import { useCallback, useEffect, useRef, useState } from 'react';

// Dev: vite proxies /api to the Nest server. Production: set VITE_API_URL to the server's address.
const API = import.meta.env.VITE_API_URL || '';
const KEY = 'aaa_chat_session';

const GREETING =
  'Hello! I am reviewing live requests right now. Tell me what you need, or pick a service below to start.';

const readStored = () => {
  try {
    return sessionStorage.getItem(KEY);
  } catch {
    return null;
  }
};
const writeStored = (id) => {
  try {
    if (id) sessionStorage.setItem(KEY, id);
    else sessionStorage.removeItem(KEY);
  } catch {
    /* storage can be unavailable (private mode); chat still works for this page view */
  }
};

async function call(path, body) {
  const res = await fetch(API + path, {
    method: body ? 'POST' : 'GET',
    headers: body ? { 'Content-Type': 'application/json' } : undefined,
    body: body ? JSON.stringify(body) : undefined,
  });
  if (!res.ok) throw new Error(`HTTP ${res.status}`);
  return res.json();
}

// `enabled` false = do not contact the server yet (used on pages that have no chat box until the chat is opened)
export default function useChat(enabled = true) {
  const [persona, setPersona] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: GREETING }]);
  const [typing, setTyping] = useState(false);
  const [ready, setReady] = useState(false);
  // Set once the visitor has shared name, email and phone: {name, email, phone}, or true if the server did not send the details
  const [lead, setLead] = useState(null);
  const sessionId = useRef(null);
  const sending = useRef(false);

  const begin = useCallback(async () => {
    const s = await call('/api/chat/start', { pageUrl: window.location.href });
    sessionId.current = s.sessionId;
    writeStored(s.sessionId);
    setPersona(s.persona);
    setMessages([{ role: 'assistant', content: s.greeting }]);
    setLead(null);
  }, []);

  useEffect(() => {
    if (!enabled) return undefined;
    let cancelled = false;
    (async () => {
      try {
        const stored = readStored();
        if (stored) {
          try {
            const h = await call(`/api/chat/${stored}`);
            if (cancelled) return;
            sessionId.current = stored;
            setPersona(h.persona);
            setMessages(h.messages.map((m) => ({ role: m.role, content: m.content })));
            setLead(h.lead || null);
            return;
          } catch {
            writeStored(null); // expired or unknown session: start a fresh one
          }
        }
        if (!cancelled) await begin();
      } catch {
        /* server offline: the first send will try again */
      } finally {
        if (!cancelled) setReady(true);
      }
    })();
    return () => {
      cancelled = true;
    };
  }, [begin, enabled]);

  const send = useCallback(
    async (text) => {
      const msg = text.trim();
      if (!msg || sending.current) return;
      sending.current = true;
      setMessages((m) => [...m, { role: 'user', content: msg }]);
      setTyping(true);
      try {
        if (!sessionId.current) await begin();
        const r = await call('/api/chat/message', { sessionId: sessionId.current, message: msg });
        setPersona(r.persona);
        setMessages((m) => [...m, { role: 'assistant', content: r.reply }]);
        if (r.lead) setLead(r.lead);
        else if (r.leadComplete) setLead(true);
      } catch {
        setMessages((m) => [
          ...m,
          { role: 'assistant', content: "Sorry, I'm having trouble connecting right now. Please try again in a moment." },
        ]);
      } finally {
        setTyping(false);
        sending.current = false;
      }
    },
    [begin],
  );

  const started = messages.some((m) => m.role === 'user');
  return { persona, messages, typing, ready, started, lead, send };
}
