import { useEffect, useRef, useState } from 'react';
import { ASK_EVENT } from '../../lib/askChat.js';

const CHIPS = [
  "Printer offline or won't print",
  'Paper jam or error code',
  'Wi-Fi pairing & setup',
  'Computer freezing / blue screen',
];

export function Avatar({ name, className = 'size-6 text-[10px]' }) {
  const initial = (name || 'S').trim().charAt(0).toUpperCase();
  return (
    <span
      aria-hidden="true"
      className={`${className} shrink-0 rounded-full bg-primary text-on-primary font-bold inline-flex items-center justify-center`}
    >
      {initial}
    </span>
  );
}

export default function ChatPanel({ chat, chips = CHIPS, inputId = 'hero-chat-input', large = false }) {
  const { persona, messages, typing, started, send } = chat;
  const [draft, setDraft] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  // "Ask an expert" buttons elsewhere on the page: bring the chat into view and focus the box
  useEffect(() => {
    const onAsk = (e) => {
      const text = e.detail?.text;
      if (text) setDraft(text);
      // An inline chat scrolls into view; the floating popup is fixed in place and needs no scrolling
      const target = document.getElementById('quick-match');
      if (target && getComputedStyle(target).position !== 'fixed') {
        target.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
      setTimeout(() => {
        const box = document.getElementById(inputId);
        if (box) {
          box.focus({ preventScroll: true });
          box.setSelectionRange(box.value.length, box.value.length);
        }
      }, 450);
    };
    window.addEventListener(ASK_EVENT, onAsk);
    return () => window.removeEventListener(ASK_EVENT, onAsk);
  }, [inputId]);

  function submit(e) {
    e.preventDefault();
    if (!draft.trim() || typing) return;
    send(draft);
    setDraft('');
  }

  const bubble = large ? 'text-sm px-4 py-2.5' : 'text-xs px-3 py-1.5';
  return (
    <>
      <div
        ref={listRef}
        aria-live="polite"
        className={`space-y-2.5 overflow-y-auto pr-1 ${large ? 'max-h-[360px] min-h-[90px] space-y-4' : 'max-h-[210px]'}`}
      >
        {messages.map((m, i) =>
          m.role === 'assistant' ? (
            <div key={i} className="flex items-start gap-2.5">
              <Avatar name={persona} className={large ? 'size-8 mt-0.5 text-xs' : 'size-6 mt-0.5 text-[10px]'} />
              <div className="min-w-0">
                <p className={`font-bold text-primary mb-1 ${large ? 'text-xs' : 'text-[10px]'}`}>{persona || 'Support Specialist'}</p>
                <div className={`bg-surface-container rounded-xl rounded-tl-sm text-on-surface leading-snug ${bubble}`}>
                  <p>{m.content}</p>
                </div>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div
                className={`bg-primary text-on-primary rounded-xl rounded-tr-sm leading-snug max-w-[85%] whitespace-pre-wrap break-words ${bubble}`}
              >
                {m.content}
              </div>
            </div>
          ),
        )}
        {typing && (
          <div className="flex items-start gap-2.5">
            <Avatar name={persona} className={large ? 'size-8 mt-0.5 text-xs' : 'size-6 mt-0.5 text-[10px]'} />
            <div className="min-w-0">
              <p className={`font-bold text-primary mb-1 ${large ? 'text-xs' : 'text-[10px]'}`}>{persona || 'Support Specialist'}</p>
              <div
                className="bg-surface-container rounded-xl rounded-tl-sm px-3 py-2.5 flex items-center gap-1 w-fit"
                role="status"
                aria-label={`${persona || 'Specialist'} is typing`}
              >
                {[0, 150, 300].map((d) => (
                  <span
                    key={d}
                    className="size-1.5 rounded-full bg-on-surface-variant/60 animate-bounce"
                    style={{ animationDelay: `${d}ms` }}
                  />
                ))}
              </div>
            </div>
          </div>
        )}
      </div>

      {!started && (
        <div>
          <p className={`font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 ${large ? 'text-[11px]' : 'text-[10px]'}`}>
            Common starter issues
          </p>
          <div className="flex flex-wrap gap-2">
            {chips.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => send(c)}
                className={`rounded-lg bg-surface-container-low hover:bg-primary hover:text-white hover:border-primary font-medium text-on-surface border border-outline-variant/50 cursor-pointer transition-colors ${
                  large ? 'px-3.5 py-2 text-xs' : 'px-2 py-0.5 text-[11px]'
                }`}
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <form className="space-y-2" onSubmit={submit}>
        <div className="relative">
          <label
            className={`block font-bold text-on-surface mb-1 ${large ? 'text-xs' : 'text-[11px]'}`}
            htmlFor={inputId}
          >
            {started ? 'Your reply' : 'Describe your device or issue'}
          </label>
          <textarea
            id={inputId}
            className={`w-full bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline border border-outline-variant/50 focus:ring-2 focus:ring-primary focus:border-primary resize-none focus:outline-none transition-all ${
              large ? 'p-3.5 text-sm' : 'p-2.5 text-xs'
            }`}
            placeholder={
              started
                ? 'Type your reply...'
                : "Type your question here (e.g. My HP printer won't connect after Wi-Fi change, or laptop is stuck on a blue screen)..."
            }
            rows={large ? 3 : 2}
            maxLength={1000}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) submit(e);
            }}
          />
        </div>
        <button
          className={`w-full inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-bold rounded-lg shadow-sm transition-all gap-1.5 disabled:opacity-60 ${
            large ? 'px-5 py-3.5 text-base' : 'px-4 py-2.5 text-sm'
          }`}
          type="submit"
          disabled={typing || !draft.trim()}
        >
          {started ? 'Send' : 'Ask an Expert'} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
        </button>
      </form>
    </>
  );
}
