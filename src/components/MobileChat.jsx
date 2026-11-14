import { useEffect } from 'react';
import { useChatContext } from '../lib/ChatContext.jsx';
import useIsMobile from '../lib/useIsMobile.js';
import ChatWindow from './home/ChatWindow.jsx';

const INPUT_ID = 'overlay-chat-input';

/**
 * Phone-only chat: a round icon fixed at the bottom right of every page, and a full-screen chat
 * (with a close button) that opens from it. Nothing is rendered on tablets and desktops.
 */
export default function MobileChat() {
  const { chat, open, openChat, closeChat } = useChatContext();
  const mobile = useIsMobile();

  // Leaving phone size (rotate / resize) closes the overlay so the page can scroll again
  useEffect(() => {
    if (!mobile && open) closeChat();
  }, [mobile, open, closeChat]);

  // While the overlay is open the page behind it must not scroll
  useEffect(() => {
    if (!open) return undefined;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = previous;
    };
  }, [open]);

  // Escape closes it; the reply box gets the cursor once the overlay is in place
  useEffect(() => {
    if (!open) return undefined;
    const onKey = (e) => e.key === 'Escape' && closeChat();
    window.addEventListener('keydown', onKey);
    const t = setTimeout(() => document.getElementById(INPUT_ID)?.focus({ preventScroll: true }), 300);
    return () => {
      window.removeEventListener('keydown', onKey);
      clearTimeout(t);
    };
  }, [open, closeChat]);

  if (!mobile) return null;

  return (
    <>
      {!open && (
        <button
          type="button"
          onClick={() => openChat()}
          aria-label="Chat with an expert"
          className="fixed bottom-[max(1rem,env(safe-area-inset-bottom))] right-4 z-40 flex size-14 items-center justify-center rounded-full bg-[#003733] text-white shadow-[0_12px_32px_-8px_rgba(19,27,46,0.6)] ring-1 ring-white/20 transition-transform active:scale-95"
        >
          <span className="material-symbols-outlined text-[28px]">chat</span>
          <span className="absolute right-0.5 top-0.5 flex size-3.5">
            <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
            <span className="relative inline-flex size-3.5 rounded-full border-2 border-[#003733] bg-emerald-400" />
          </span>
        </button>
      )}

      {open && (
        <div
          role="dialog"
          aria-modal="true"
          aria-label="Chat with an expert"
          className="fixed inset-0 z-[60] flex h-[100dvh] flex-col bg-white pt-[env(safe-area-inset-top)]"
        >
          <ChatWindow chat={chat} fill inputId={INPUT_ID} onClose={closeChat} />
        </div>
      )}
    </>
  );
}
