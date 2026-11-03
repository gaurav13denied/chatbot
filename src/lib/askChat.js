// Any "Ask an expert" button calls this: scroll to the chat, optionally prefill the message, focus the box.
export const ASK_EVENT = 'aaa:ask';

export function askChat(text = '') {
  window.dispatchEvent(new CustomEvent(ASK_EVENT, { detail: { text } }));
}
