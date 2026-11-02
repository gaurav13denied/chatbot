import { useEffect, useRef, useState } from 'react';

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

export default function ChatPanel({ chat, chips = CHIPS, inputId = "hero-chat-input" }) {
  const { persona, messages, typing, started, send } = chat;
  const [draft, setDraft] = useState('');
  const listRef = useRef(null);

  useEffect(() => {
    const el = listRef.current;
    if (el) el.scrollTop = el.scrollHeight;
  }, [messages, typing]);

  function submit(e) {
    e.preventDefault();
    if (!draft.trim() || typing) return;
    send(draft);
    setDraft('');
  }

  return (
    <>
      <div ref={listRef} aria-live="polite" className="space-y-2.5 max-h-[210px] overflow-y-auto pr-1">
        {messages.map((m, i) =>
          m.role === 'assistant' ? (
            <div key={i} className="flex items-start gap-2">
              <Avatar name={persona} className="size-6 mt-0.5 text-[10px]" />
              <div className="bg-surface-container rounded-xl rounded-tl-sm px-3 py-1.5 text-xs text-on-surface leading-snug">
                <p>{m.content}</p>
              </div>
            </div>
          ) : (
            <div key={i} className="flex justify-end">
              <div className="bg-primary text-on-primary rounded-xl rounded-tr-sm px-3 py-1.5 text-xs leading-snug max-w-[85%] whitespace-pre-wrap break-words">
                {m.content}
              </div>
            </div>
          ),
        )}
        {typing && (
          <div className="flex items-start gap-2">
            <Avatar name={persona} className="size-6 mt-0.5 text-[10px]" />
            <div
              className="bg-surface-container rounded-xl rounded-tl-sm px-3 py-2.5 flex items-center gap-1"
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
        )}
      </div>

      {!started && (
        <div>
          <p className="text-[10px] font-bold uppercase tracking-wider text-on-surface-variant mb-1">
            Common starter issues
          </p>
          <div className="flex flex-wrap gap-1.5">
            {chips.map((c) => (
              <button
                key={c}
                type="button"
                onClick={() => send(c)}
                className="px-2 py-0.5 rounded-lg bg-surface-container-low hover:bg-surface-container text-[11px] font-medium text-on-surface border border-outline-variant/30 cursor-pointer transition-colors"
              >
                {c}
              </button>
            ))}
          </div>
        </div>
      )}

      <form className="space-y-2" onSubmit={submit}>
        <div className="relative">
          <label className="block text-[11px] font-bold text-on-surface mb-1" htmlFor={inputId}>
            {started ? 'Your reply' : 'Describe your device or issue'}
          </label>
          <textarea
            id={inputId}
            className="w-full p-2.5 bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline border border-outline-variant/40 focus:ring-2 focus:ring-primary text-xs resize-none focus:outline-none transition-all"
            placeholder={
              started
                ? 'Type your reply...'
                : 'Type your question here (e.g. My HP printer won\'t connect after Wi-Fi change, or laptop is stuck on a blue screen)...'
            }
            rows="2"
            maxLength={1000}
            value={draft}
            onChange={(e) => setDraft(e.target.value)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' && !e.shiftKey) submit(e);
            }}
          />
        </div>
        <button
          className="w-full inline-flex items-center justify-center px-4 py-2.5 bg-primary hover:bg-primary-container text-on-primary font-bold text-sm rounded-lg shadow-sm transition-all gap-1.5 disabled:opacity-60"
          type="submit"
          disabled={typing || !draft.trim()}
        >
          {started ? 'Send' : 'Ask an Expert'} <span className="material-symbols-outlined text-[16px]">arrow_forward</span>
        </button>
      </form>
    </>
  );
}
