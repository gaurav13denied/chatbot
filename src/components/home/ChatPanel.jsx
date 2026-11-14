import { useEffect, useRef, useState } from 'react';
import { ASK_EVENT } from '../../lib/askChat.js';
import { useChatContext } from '../../lib/ChatContext.jsx';
import useIsMobile from '../../lib/useIsMobile.js';

const CHIPS = [
  'Leaking tap or pipe',
  'Deep home cleaning',
  'Rental agreement query',
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

/**
 * large:  bigger text and buttons.
 * pinned: fills the height it is given; the messages scroll and the reply box stays at the bottom,
 *         so on a short screen the input is never pushed out of view. `footer` sits under the box.
 * fill:   the message list uses all the height it is given (no 420px cap), e.g. in the full-screen phone chat.
 * takeOver: this is a chat box inside a page. On a phone, tapping, typing in or sending from it opens the
 *         full-screen chat instead, which continues the same conversation.
 */
export default function ChatPanel({
  chat,
  chips = CHIPS,
  inputId = 'hero-chat-input',
  large = false,
  pinned = false,
  fill = false,
  takeOver = false,
  footer = null,
}) {
  const { persona, messages, typing, started, lead, send } = chat;
  const { openChat } = useChatContext();
  const isMobile = useIsMobile();
  const redirect = takeOver && isMobile;
  const [draft, setDraft] = useState('');
  const listRef = useRef(null);

  // Jump straight to the newest message (no animation, so a reply arriving mid-scroll can never leave it short)
  const toBottom = () => {
    const el = listRef.current;
    if (!el) return;
    el.scrollTop = el.scrollHeight;
    requestAnimationFrame(() => {
      el.scrollTop = el.scrollHeight;
    });
  };

  // A new message, the typing dots, or the visitor typing: keep the latest message in view
  useEffect(toBottom, [messages, typing, draft, lead]);

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
    // A chat box in the page on a phone: the message is sent from the full-screen chat
    if (redirect) openChat(draft);
    else send(draft);
    setDraft('');
  }

  const bubble = large ? 'text-sm px-4 py-2.5' : 'text-xs px-3 py-1.5';
  const avatar = large ? 'size-8 mt-0.5 text-xs' : 'size-6 mt-0.5 text-[10px]';

  const list = (
    <>
      {messages.map((m, i) =>
        m.role === 'assistant' ? (
          <div key={i} className="flex items-start gap-2.5">
            <Avatar name={persona} className={avatar} />
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
          <Avatar name={persona} className={avatar} />
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
    </>
  );

  // Shown once name, email and phone are shared: the details, a thank-you, and when to expect the call
  const thanks = lead && (
    <div className="rounded-xl border border-primary/30 bg-primary-fixed/30 p-4 text-on-surface" role="status">
      <div className="flex items-center gap-2 mb-2">
        <span className="material-symbols-outlined text-primary text-[22px]" style={{ fontVariationSettings: "'FILL' 1" }}>
          check_circle
        </span>
        <p className={`font-bold ${large ? 'text-base' : 'text-sm'}`}>
          Thank you{lead.name ? `, ${lead.name}` : ''}!
        </p>
      </div>
      {lead.name && (
        <dl className={`grid grid-cols-[auto_1fr] gap-x-3 gap-y-1 mb-3 ${large ? 'text-sm' : 'text-xs'}`}>
          <dt className="text-on-surface-variant font-semibold">Name</dt>
          <dd className="font-semibold break-words">{lead.name}</dd>
          <dt className="text-on-surface-variant font-semibold">Email</dt>
          <dd className="font-semibold break-all">{lead.email}</dd>
          <dt className="text-on-surface-variant font-semibold">Phone</dt>
          <dd className="font-semibold break-words">{lead.phone}</dd>
        </dl>
      )}
      <p className={`text-on-surface-variant leading-snug ${large ? 'text-sm' : 'text-xs'}`}>
        Thank you for sharing your details. A specialist will connect with you in the next few minutes.
      </p>
    </div>
  );

  const starters = !started && (
    <div>
      <p className={`font-bold uppercase tracking-wider text-on-surface-variant mb-1.5 ${large ? 'text-[11px]' : 'text-[10px]'}`}>
        Common starter issues
      </p>
      <div className="flex flex-wrap gap-2">
        {chips.map((c) => (
          <button
            key={c}
            type="button"
            onClick={() => (redirect ? openChat(c) : send(c))}
            className={`rounded-lg bg-surface-container-low hover:bg-primary hover:text-white hover:border-primary font-medium text-on-surface border border-outline-variant/50 cursor-pointer transition-colors ${
              large ? 'px-3.5 py-2 text-xs' : 'px-2 py-0.5 text-[11px]'
            }`}
          >
            {c}
          </button>
        ))}
      </div>
    </div>
  );

  const form = (
    <form className="space-y-2" onSubmit={submit}>
      <div className="relative">
        <label
          className={`block font-bold text-on-surface mb-1 ${large ? 'text-xs' : 'text-[11px]'} ${
            pinned ? '[@media(max-height:700px)]:sr-only' : ''
          }`}
          htmlFor={inputId}
        >
          {started ? 'Your reply' : 'Describe what you need'}
        </label>
        <textarea
          id={inputId}
          className={`w-full bg-surface-container-low rounded-lg text-on-surface placeholder:text-outline border border-outline-variant/50 focus:ring-2 focus:ring-primary focus:border-primary resize-none focus:outline-none transition-all ${
            large ? 'p-3 text-sm' : 'p-2.5 text-xs'
          }`}
          placeholder={
            started
              ? 'Type your reply...'
              : 'Type your request here (e.g. My kitchen tap is leaking and I need a plumber today)...'
          }
          rows={large || pinned ? 2 : 2}
          maxLength={1000}
          value={draft}
          onFocus={(e) => {
            if (redirect) {
              // Tapping the box in the page on a phone opens the full-screen chat (with whatever was typed)
              e.target.blur();
              openChat(draft);
              setDraft('');
            } else {
              toBottom();
            }
          }}
          onChange={(e) => setDraft(e.target.value)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' && !e.shiftKey) submit(e);
          }}
        />
      </div>
      <button
        className={`w-full inline-flex items-center justify-center bg-primary hover:bg-primary-container text-on-primary font-bold rounded-lg shadow-sm transition-all gap-1.5 disabled:opacity-60 ${
          large ? 'px-5 py-3 text-base' : 'px-4 py-2.5 text-sm'
        }`}
        type="submit"
        disabled={typing || !draft.trim()}
      >
        {started ? 'Send' : 'Ask an Expert'} <span className="material-symbols-outlined text-[18px]">arrow_forward</span>
      </button>
    </form>
  );

  if (pinned) {
    return (
      <div className="flex min-h-0 flex-1 flex-col gap-3">
        <div ref={listRef} aria-live="polite" className={`chat-scroll chat-scroll-fade min-h-0 flex-1 space-y-4 overflow-y-auto py-3 pr-1.5 ${fill ? '' : 'max-h-[420px] lg:max-h-none'}`}>
          {list}
          {thanks}
          {starters}
        </div>
        <div className="shrink-0 space-y-3 border-t border-surface-container pt-3">
          {form}
          {footer}
        </div>
      </div>
    );
  }

  return (
    <>
      <div
        ref={listRef}
        aria-live="polite"
        className={`chat-scroll space-y-2.5 overflow-y-auto pr-1 ${large ? 'max-h-[360px] min-h-[90px] space-y-4' : 'max-h-[210px]'}`}
      >
        {list}
        {thanks}
      </div>
      {starters}
      {form}
    </>
  );
}
