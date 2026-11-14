import { useEffect, useState } from 'react';

// "Mobile" = under 768px (Tailwind's md breakpoint). The overlay chat is only used below this width.
const QUERY = '(max-width: 767px)';

export default function useIsMobile() {
  const [mobile, setMobile] = useState(() => typeof window !== 'undefined' && window.matchMedia(QUERY).matches);

  useEffect(() => {
    const mq = window.matchMedia(QUERY);
    const update = () => setMobile(mq.matches);
    update();
    mq.addEventListener('change', update);
    return () => mq.removeEventListener('change', update);
  }, []);

  return mobile;
}
