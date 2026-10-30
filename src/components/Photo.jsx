import { useState } from 'react';

// Image with a fallback: it first tries `src` (the link from the design, which only loads for people
// logged into Stitch), and if that fails it uses `local` (a file in /public/images).
export default function Photo({ src, local, alt = '', ...rest }) {
  const sources = [src, local].filter(Boolean);
  const [index, setIndex] = useState(0);
  const last = sources.length - 1;

  return (
    <img
      src={sources[Math.min(index, last)]}
      alt={alt}
      onError={() => setIndex((i) => (i < last ? i + 1 : i))}
      {...rest}
    />
  );
}
