import { Link } from 'react-router-dom';

// Logo from the design: a rounded green icon plus the "AskAnythingAnswers" wordmark.
// `variant` picks the size used in the home header, inner-page header or footer of the design.
const VARIANTS = {
  home: { link: 'gap-3.5', box: 'size-9 rounded-xl shadow-sm shadow-primary/20 transition-transform group-hover:scale-105', svg: 'size-5', text: 'text-2xl tracking-tight' },
  inner: { link: 'gap-2.5', box: 'size-7 rounded-lg shadow-sm shadow-primary/20 transition-transform group-hover:scale-105', svg: 'size-4', text: 'text-xl tracking-tight' },
  footer: { link: 'gap-3', box: 'size-8 rounded-lg', svg: 'size-4', text: 'text-lg' },
};

const ICON_PATH =
  'M39.475 21.6262C40.358 21.4363 40.6863 21.5589 40.7581 21.5934C40.7876 21.655 40.8547 21.857 40.8082 22.3336C40.7408 23.0255 40.4502 24.0046 39.8572 25.2301C38.6799 27.6631 36.5085 30.6631 33.5858 33.5858C30.6631 36.5085 27.6632 38.6799 25.2301 39.8572C24.0046 40.4502 23.0255 40.7407 22.3336 40.8082C21.8571 40.8547 21.6551 40.7875 21.5934 40.7581C21.5589 40.6863 21.4363 40.358 21.6262 39.475C21.8562 38.4054 22.4689 36.9657 23.5038 35.2817C24.7575 33.2417 26.5497 30.9744 28.7621 28.762C30.9744 26.5497 33.2417 24.7574 35.2817 23.5037C36.9657 22.4689 38.4054 21.8562 39.475 21.6262ZM4.41189 29.2403L18.7597 43.5881C19.8813 44.7097 21.4027 44.9179 22.7217 44.7893C24.0585 44.659 25.5148 44.1631 26.9723 43.4579C29.9052 42.0387 33.2618 39.5667 36.4142 36.4142C39.5667 33.2618 42.0387 29.9052 43.4579 26.9723C44.1631 25.5148 44.659 24.0585 44.7893 22.7217C44.9179 21.4027 44.7097 19.8813 43.5881 18.7597L29.2403 4.41187C27.8527 3.02428 25.8765 3.02573 24.2861 3.36776C22.6081 3.72863 20.7334 4.58419 18.8396 5.74801C16.4978 7.18716 13.9881 9.18353 11.5858 11.5858C9.18354 13.988 7.18717 16.4978 5.74802 18.8396C4.58421 20.7334 3.72865 22.6081 3.36778 24.2861C3.02574 25.8765 3.02429 27.8527 4.41189 29.2403Z';

export default function Logo({ variant = 'inner', linked = true }) {
  const v = VARIANTS[variant];
  const body = (
    <>
      <div className={`${v.box} bg-primary text-on-primary flex items-center justify-center`}>
        <svg className={v.svg} fill="none" viewBox="0 0 48 48" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path clipRule="evenodd" d={ICON_PATH} fill="currentColor" fillRule="evenodd" />
        </svg>
      </div>
      <span className={`text-on-surface font-headline-lg font-bold ${v.text}`}>AskAnythingAnswers</span>
    </>
  );
  const cls = `flex items-center group ${v.link}`;
  return linked ? (
    <Link className={cls} to="/" aria-label="AskAnythingAnswers home">
      {body}
    </Link>
  ) : (
    <div className={cls}>{body}</div>
  );
}
