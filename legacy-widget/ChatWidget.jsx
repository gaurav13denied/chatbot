import { useEffect, useRef, useState } from 'react';

async function api(path, options) {
  const res = await fetch(path, {
    credentials: 'include',
    headers: { 'Content-Type': 'application/json' },
    ...options,
  });
  const data = await res.json().catch(() => ({}));
  if (!res.ok) {
    const err = new Error(data.error || 'Something went wrong');
    err.code = data.code;
    throw err;
  }
  return data;
}

// White chatbot (robot) icon for the floating button.
function BotIcon() {
  return (
    <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M12 2v3" />
      <circle cx="12" cy="2" r="0.6" fill="#fff" />
      <rect x="4" y="5" width="16" height="12" rx="4" />
      <circle cx="9" cy="11" r="1.4" fill="#fff" stroke="none" />
      <circle cx="15" cy="11" r="1.4" fill="#fff" stroke="none" />
      <path d="M9.5 14.2c.7.5 1.5.8 2.5.8s1.8-.3 2.5-.8" />
      <path d="M2 10v3M22 10v3" />
      <path d="M8 17v2.5L11 17" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2.2" strokeLinecap="round" aria-hidden="true">
      <path d="M6 6l12 12M18 6L6 18" />
    </svg>
  );
}

export default function ChatWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState([]);
  const [options, setOptions] = useState([]);
  const [done, setDone] = useState(false);
  const [typing, setTyping] = useState(false);
  const [input, setInput] = useState('');
  const [teaser, setTeaser] = useState(false);
  const loaded = useRef(false);
  const busy = useRef(false); // hard lock against double clicks / double Enter
  const bodyRef = useRef(null);

  useEffect(() => {
    const t = setTimeout(() => setTeaser(true), 3000);
    return () => clearTimeout(t);
  }, []);

  // Loads (or reloads) the saved chat for this browser's session cookie.
  function loadChat() {
    busy.current = true;
    setTyping(true);
    return api('/api/chat/init')
      .then((d) => {
        loaded.current = true;
        setMessages(d.messages);
        setOptions(d.options);
        setDone(d.done);
      })
      .catch((e) => {
        loaded.current = false; // reopening the chat retries
        setMessages([{ role: 'bot', content: e.message || 'Chat is not available right now. Please try again later.' }]);
        setOptions([]);
      })
      .finally(() => {
        busy.current = false;
        setTyping(false);
      });
  }

  useEffect(() => {
    if (open && !loaded.current && !busy.current) loadChat();
  }, [open]);

  useEffect(() => {
    bodyRef.current?.scrollTo({ top: bodyRef.current.scrollHeight, behavior: 'smooth' });
  }, [messages, typing, options]);

  async function send(text) {
    const value = text.trim();
    if (!value || busy.current) return;
    busy.current = true;
    const previousOptions = options;
    setInput('');
    setOptions([]);
    setMessages((m) => [...m, { role: 'user', content: value }]);
    setTyping(true);
    try {
      const d = await api('/api/chat/message', { method: 'POST', body: JSON.stringify({ text: value }) });
      await new Promise((r) => setTimeout(r, 500));
      setMessages((m) => [...m, ...d.replies.map((content) => ({ role: 'bot', content }))]);
      setOptions(d.options);
      setDone(d.done);
    } catch (e) {
      if (e.code === 'session_expired') {
        // The saved session is gone (e.g. cookie cleared): start a fresh chat.
        busy.current = false;
        await loadChat();
        return;
      }
      setMessages((m) => [...m, { role: 'bot', content: e.message }]);
      setOptions(previousOptions); // keep the buttons so the user can try again
    } finally {
      busy.current = false;
      setTyping(false);
    }
  }

  return (
    <>
      {open && (
        <section className="cw-panel" role="dialog" aria-label="Printer chat">
          <div className="cw-head">
            <div className="cw-avatar">🖨️</div>
            <div className="cw-title">
              <strong>Printer Assistant</strong>
              <span>● Online</span>
            </div>
            <button className="cw-close" onClick={() => setOpen(false)} aria-label="Close chat">
              ×
            </button>
          </div>

          <div className="cw-body" ref={bodyRef}>
            {messages.map((m, i) => (
              <div key={i} className={`cw-msg ${m.role}`}>
                {m.content}
              </div>
            ))}
            {typing && (
              <div className="cw-msg bot cw-typing">
                <span></span>
                <span></span>
                <span></span>
              </div>
            )}
            {!typing && options.length > 0 && (
              <div className="cw-options">
                {options.map((o) => (
                  <button key={o} onClick={() => send(o)}>
                    {o}
                  </button>
                ))}
              </div>
            )}
          </div>

          <form
            className="cw-input"
            onSubmit={(e) => {
              e.preventDefault();
              send(input);
            }}
          >
            <input
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Type your message..."
              maxLength={300}
            />
            <button type="submit" disabled={typing || !input.trim()} aria-label="Send">
              ➤
            </button>
          </form>
        </section>
      )}

      {!open && teaser && <div className="cw-teaser">Need a printer? Chat with us 👋</div>}
      <button
        className="cw-fab"
        onClick={() => {
          setOpen((o) => !o);
          setTeaser(false);
        }}
        aria-label={open ? 'Close chat' : 'Open chat'}
      >
        {open ? <CloseIcon /> : <BotIcon />}
      </button>
    </>
  );
}
