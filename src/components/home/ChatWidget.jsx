import { useEffect, useState } from 'react';
import useChat from '../../lib/useChat.js';
import { ASK_EVENT } from '../../lib/askChat.js';
import ChatWindow from './ChatWindow.jsx';

const DISMISSED_KEY = 'aaa_chat_dismissed';
const AUTO_OPEN_MS = 5000;

const wasDismissed = () => {
  try {
    return sessionStorage.getItem(DISMISSED_KEY) === '1';
  } catch {
    return false;
  }
};

/** Right-hand chat window. It slides in by itself after 5 seconds and can be reopened from the launcher. */
export default function ChatWidget({ chips, inputId }) {
  const chat = useChat();
  const [open, setOpen] = useState(false);
  const [nudge, setNudge] = useState(false);

  // Open on its own after a few seconds (small screens get a badge on the launcher instead of a covering window)
  useEffect(() => {
    const t = setTimeout(() => {
      if (wasDismissed()) return;
      if (window.innerWidth >= 768) setOpen(true);
      else setNudge(true);
    }, AUTO_OPEN_MS);
    return () => clearTimeout(t);
  }, []);

  // Any "Ask an expert" button on the page opens the window
  useEffect(() => {
    const onAsk = () => setOpen(true);
    window.addEventListener(ASK_EVENT, onAsk);
    return () => window.removeEventListener(ASK_EVENT, onAsk);
  }, []);

  function close() {
    setOpen(false);
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1');
    } catch {
      /* private mode: it will simply auto-open again next visit */
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={() => {
          setOpen(true);
          setNudge(false);
        }}
        aria-label="Chat with an expert"
        className={`fixed bottom-5 right-4 sm:right-6 z-40 flex items-center gap-2.5 rounded-full bg-on-surface py-3.5 pl-4 pr-5 text-sm font-bold text-white shadow-[0_12px_32px_-8px_rgba(19,27,46,0.6)] ring-1 ring-white/20 transition-all duration-300 hover:bg-primary ${
          open ? 'pointer-events-none translate-y-6 opacity-0' : 'translate-y-0 opacity-100'
        }`}
      >
        <span className="relative flex size-2.5">
          <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
          <span className="relative inline-flex size-2.5 rounded-full bg-emerald-400" />
        </span>
        <span className="material-symbols-outlined text-[20px]">chat</span>
        Chat with an expert
        {nudge && (
          <span className="absolute -top-1.5 -right-1 flex size-5 items-center justify-center rounded-full bg-error text-[11px] font-bold">
            1
          </span>
        )}
      </button>

      <div
        role="dialog"
        aria-label="Chat with an expert"
        aria-hidden={!open}
        className={`fixed bottom-3 right-3 sm:bottom-6 sm:right-6 z-50 flex w-[calc(100vw-1.5rem)] sm:w-[500px] max-h-[calc(100vh-1.5rem)] sm:max-h-[calc(100vh-3rem)] origin-bottom-right flex-col overflow-hidden rounded-2xl bg-white text-on-surface shadow-[0_30px_90px_-20px_rgba(19,27,46,0.6)] ring-1 ring-black/10 transition-all duration-500 ease-out ${
          open ? 'visible translate-x-0 translate-y-0 scale-100 opacity-100' : 'invisible translate-x-10 translate-y-6 scale-95 opacity-0'
        }`}
      >
        <ChatWindow chat={chat} chips={chips} inputId={inputId} onClose={close} />
      </div>
    </>
  );
}
