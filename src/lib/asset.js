// Prefixes public/ file paths with the site's base path (e.g. "/chatbot"), so "/images/x.jpg" works under a sub-folder.
const base = import.meta.env.BASE_URL.replace(/\/$/, '');
export const asset = (path) => base + path;
