import ChatPanel, { Avatar } from './ChatPanel.jsx';

/** The chat itself (header, rating bar, messages, input). Used inside the floating popup and inline in a page. */
export default function ChatWindow({ chat, chips, inputId, onClose }) {
  return (
    <div className="flex min-h-0 flex-1 flex-col">
      <div className="flex items-center justify-between gap-3 bg-[#003733] px-4 py-3.5 text-white">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Avatar name={chat.persona} className="size-10 text-base !bg-primary-fixed !text-on-primary-fixed" />
            <span className="absolute bottom-0 right-0 size-3 rounded-full bg-emerald-400 border-2 border-[#003733]" />
          </div>
          <div>
            <div className="flex items-center gap-2">
              <h4 className="text-sm font-bold">{chat.persona || 'Support Specialist'}</h4>
              <span className="rounded bg-primary-fixed px-1.5 py-0.5 text-[10px] font-bold text-on-primary-fixed">
                On Duty
              </span>
            </div>
            <p className="text-[11px] text-white/70">Live Help Desk • Ready to respond</p>
          </div>
        </div>
        <div className="text-right">
          <span className="block text-xs font-bold text-white">&lt; 90 seconds</span>
          <span className="text-[11px] text-white/70">typical reply</span>
        </div>
        {onClose && (
          <button
            type="button"
            onClick={onClose}
            aria-label="Close chat"
            className="flex size-8 items-center justify-center rounded-lg text-white/80 hover:bg-white/10 hover:text-white transition-colors"
          >
            <span className="material-symbols-outlined text-[20px]">close</span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between border-b border-surface-container bg-surface-container-low px-4 py-2 text-xs">
        <div className="flex items-center gap-1 text-amber-500">
          <span className="material-symbols-outlined text-[14px]" style={{ fontVariationSettings: "'FILL' 1" }}>
            star
          </span>
          <span className="font-bold text-on-surface">4.9/5</span>
          <span className="text-[11px] text-on-surface-variant">(14,200+ verified ratings)</span>
        </div>
      </div>

      <div className="flex min-h-0 flex-1 flex-col bg-white p-4 text-on-surface">
        <ChatPanel
          chat={chat}
          large
          pinned
          chips={chips}
          inputId={inputId}
          footer={
            <div className="flex flex-wrap items-center justify-between gap-1.5 text-[10px] text-on-surface-variant [@media(max-height:760px)]:hidden">
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-primary">lock</span> Private & Secure Chat
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-primary">verified_user</span> Verified Human
                Specialists
              </span>
              <span className="flex items-center gap-1">
                <span className="material-symbols-outlined text-[13px] text-primary">chat_bubble</span> Pay on Hourly-basis
              </span>
            </div>
          }
        />
      </div>
    </div>
  );
}
