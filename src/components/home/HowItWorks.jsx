import { Reveal } from '../fx.jsx';

const STEPS = [
  {
    icon: 'edit_note',
    title: "Tell us what's happening",
    text: "Describe your problem in your own words in a few seconds. Type what you see, hear, or feel that isn't working properly.",
  },
  {
    icon: 'group_add',
    title: 'Get matched with the right expert',
    text: "We pair you directly with a verified specialist who knows your exact brand and issue, so you don't repeat yourself.",
  },
  {
    icon: 'forum',
    title: "Chat 1-on-1 until it's solved",
    text: 'Talk back and forth via instant chat or phone until your problem is completely fixed. Step-by-step guidance made easy.',
  },
];

export default function HowItWorks() {
  return (
    <section className="relative py-20 bg-surface-container-lowest overflow-hidden" id="how-it-works">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Reveal className="text-center max-w-2xl mx-auto mb-16">
          <span className="text-xs font-bold uppercase tracking-wider text-primary">Simple & Fast</span>
          <h2 className="font-headline-lg text-3xl sm:text-5xl text-on-surface font-normal mt-2 leading-tight">
            How You Get Your Solution in <span className="italic text-primary">3 Steps</span>
          </h2>
          <p className="text-sm sm:text-base text-on-surface-variant mt-3">
            No technical expertise needed on your part. We keep it as simple and stress-free as talking to a
            knowledgeable neighbor.
          </p>
        </Reveal>

        <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8">
          <div
            className="hidden md:block absolute top-[3.1rem] left-[16%] right-[16%] border-t-2 border-dashed border-primary/30"
            aria-hidden="true"
          />
          {STEPS.map((s, i) => (
            <Reveal
              key={s.title}
              from={i === 0 ? 'left' : i === 2 ? 'right' : 'up'}
              delay={i * 150}
              className="group relative rounded-2xl bg-surface-container-low border border-outline-variant/40 p-8 pt-12 hover:-translate-y-2 hover:shadow-xl hover:border-primary/40 transition-all duration-500"
            >
              <div className="absolute -top-7 left-8 size-14 rounded-xl bg-gradient-to-br from-primary to-primary-container text-white font-headline-lg text-2xl flex items-center justify-center shadow-lg shadow-primary/30 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-500">
                {i + 1}
              </div>
              <span className="material-symbols-outlined absolute top-6 right-6 text-[34px] text-primary/25 group-hover:text-primary transition-colors">
                {s.icon}
              </span>
              <h3 className="font-headline-sm text-xl font-bold text-on-surface mb-3">{s.title}</h3>
              <p className="text-sm text-on-surface-variant leading-relaxed">{s.text}</p>
            </Reveal>
          ))}
        </div>

        <Reveal className="mt-14 text-center" delay={100}>
          <a
            className="inline-flex items-center justify-center gap-2 px-9 py-4 bg-primary hover:bg-on-surface text-on-primary font-bold text-base rounded-xl shadow-lg shadow-primary/30 hover:-translate-y-0.5 transition-all"
            href="#quick-match"
          >
            Try It Now. Ask Your Question
            <span className="material-symbols-outlined text-[20px]">arrow_forward</span>
          </a>
        </Reveal>
      </div>
    </section>
  );
}
