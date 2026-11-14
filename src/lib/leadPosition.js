// Where the "Thank you" details card belongs in a conversation.
//
// The server sends the whole history but not when the details were captured, so it is worked out from the
// messages: the card goes right after the assistant's reply to the visitor message in which the LAST of name,
// email and phone was given. New messages (e.g. the visitor coming back later) then appear below it.
//
// Returns the index of that reply in `messages`, or -1 when it cannot be worked out (the card then stays at the end).

const lower = (s) => String(s).toLowerCase();
const digits = (s) => String(s).replace(/\D/g, '');
const escapeRe = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');

export default function leadPosition(messages, lead) {
  if (!lead || lead === true) return -1; // `true` = the server did not send the details
  const { name, email, phone } = lead;
  if (!name || !email || !phone) return -1;

  const phoneKey = digits(phone).slice(-10);
  // Whole-word match so a short name like "Ana" is not found inside "banana"
  const nameRe = new RegExp(`(^|[^\\p{L}])${escapeRe(lower(name))}([^\\p{L}]|$)`, 'u');

  const firstUser = (test) => messages.findIndex((m) => m.role === 'user' && test(String(m.content)));
  const found = [
    firstUser((t) => lower(t).includes(lower(email))),
    firstUser((t) => phoneKey.length >= 7 && digits(t).includes(phoneKey)),
    firstUser((t) => nameRe.test(lower(t))),
  ];
  if (found.some((i) => i < 0)) return -1;

  const last = Math.max(...found);
  return messages[last + 1]?.role === 'assistant' ? last + 1 : last;
}
