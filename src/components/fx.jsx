import { useEffect, useRef, useState } from 'react';

const reduceMotion = () =>
  typeof window !== 'undefined' && window.matchMedia?.('(prefers-reduced-motion: reduce)').matches;

/** Calls `onSee` once when the element first scrolls into view. */
function useInView(onSee, threshold = 0.15) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;
    if (reduceMotion() || typeof IntersectionObserver === 'undefined') {
      onSee();
      return undefined;
    }
    let fired = false;
    const fire = () => {
      if (fired) return;
      fired = true;
      cleanup();
      onSee();
    };
    // Scroll check as a backup for browsers/panes that throttle IntersectionObserver callbacks.
    const check = () => {
      const r = el.getBoundingClientRect();
      if (r.top < window.innerHeight * 0.92 && r.bottom > 0) fire();
    };
    const io = new IntersectionObserver(
      (entries) => {
        if (entries.some((e) => e.isIntersecting)) fire();
      },
      { threshold, rootMargin: '0px 0px -8% 0px' },
    );
    function cleanup() {
      io.disconnect();
      window.removeEventListener('scroll', check);
      window.removeEventListener('resize', check);
    }
    io.observe(el);
    window.addEventListener('scroll', check, { passive: true });
    window.addEventListener('resize', check);
    check();
    return cleanup;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return ref;
}

/** Fades and slides its children in when they scroll into view. `from` picks the direction. */
export function Reveal({ as: Tag = 'div', from = 'up', delay = 0, className = '', children, ...rest }) {
  const [seen, setSeen] = useState(false);
  const [done, setDone] = useState(false);
  const ref = useInView(() => setSeen(true));
  // Once the entrance has played, drop the reveal styles so the element's own hover transitions apply.
  useEffect(() => {
    if (!seen) return undefined;
    const t = setTimeout(() => setDone(true), delay + 900);
    return () => clearTimeout(t);
  }, [seen, delay]);
  return (
    <Tag
      ref={ref}
      data-from={from}
      data-seen={seen}
      className={`${done ? '' : 'reveal'} ${className}`}
      style={done ? undefined : { transitionDelay: `${delay}ms` }}
      {...rest}
    >
      {children}
    </Tag>
  );
}

/** Counts up to `to` the first time it is visible. */
export function CountUp({ to, decimals = 0, suffix = '', prefix = '', duration = 1600 }) {
  const [value, setValue] = useState(0);
  const ref = useInView(() => {
    if (reduceMotion()) {
      setValue(to);
      return;
    }
    const start = performance.now();
    const tick = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const eased = 1 - Math.pow(1 - t, 3);
      setValue(to * eased);
      if (t < 1) requestAnimationFrame(tick);
    };
    requestAnimationFrame(tick);
  }, 0.4);
  const shown = decimals ? value.toFixed(decimals) : Math.round(value).toLocaleString('en-US');
  return (
    <span ref={ref}>
      {prefix}
      {shown}
      {suffix}
    </span>
  );
}

/** Thin progress bar at the top of the page; also publishes --scroll for parallax. */
export function ScrollProgress() {
  const bar = useRef(null);
  useEffect(() => {
    let raf = 0;
    const update = () => {
      raf = 0;
      const max = document.documentElement.scrollHeight - window.innerHeight;
      const y = window.scrollY;
      if (bar.current) bar.current.style.transform = `scaleX(${max > 0 ? Math.min(1, y / max) : 0})`;
      document.documentElement.style.setProperty('--scroll', String(Math.min(y, 900)));
    };
    const onScroll = () => {
      if (!raf) raf = requestAnimationFrame(update);
    };
    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
      document.documentElement.style.removeProperty('--scroll');
    };
  }, []);
  return (
    <div className="fixed inset-x-0 top-0 z-[60] h-[3px] pointer-events-none" aria-hidden="true">
      <div
        ref={bar}
        className="h-full origin-left bg-gradient-to-r from-primary-fixed-dim via-secondary-container to-primary-fixed"
        style={{ transform: 'scaleX(0)' }}
      />
    </div>
  );
}
