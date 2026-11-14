import { createContext, useCallback, useContext, useMemo, useState } from 'react';
import { useLocation } from 'react-router-dom';
import useChat from './useChat.js';

const ChatContext = createContext(null);

// Pages that show a chat box in the page itself. Elsewhere the chat only starts when it is opened.
const INLINE_CHAT_PAGES = ['/', '/category/plumbing'];

/**
 * One chat for the whole site. The in-page chat boxes and the mobile overlay all show the same conversation.
 * `open` is the mobile full-screen overlay.
 */
export function ChatProvider({ children }) {
  const { pathname } = useLocation();
  const [open, setOpen] = useState(false);
  const chat = useChat(INLINE_CHAT_PAGES.includes(pathname) || open);

  // Opens the overlay; if there is a message (typed in the page's chat box), it is sent from the overlay.
  const openChat = useCallback(
    (text = '') => {
      setOpen(true);
      if (text.trim()) chat.send(text);
    },
    [chat.send],
  );
  const closeChat = useCallback(() => setOpen(false), []);

  const value = useMemo(() => ({ chat, open, openChat, closeChat }), [chat, open, openChat, closeChat]);
  return <ChatContext.Provider value={value}>{children}</ChatContext.Provider>;
}

export function useChatContext() {
  const ctx = useContext(ChatContext);
  if (!ctx) throw new Error('useChatContext must be used inside <ChatProvider>');
  return ctx;
}
