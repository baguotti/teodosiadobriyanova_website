import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight } from '../components/ui/Icons';

export const Directing: React.FC = () => {
  const credits = [
    { role: 'Director', name: 'Teodosia Dobriyanova' },
    { role: 'Producers', name: 'Georgi Marchev, Mina Kirkova' },
    { role: 'Illustrators', name: 'Borislava Karadjova, Mihaela Karadjova' },
    { role: 'Sound Designer', name: 'Matthew Dervenkow' },
    { role: 'Web Developer', name: 'Donghe Hong' },
    { role: 'Graphic Designer', name: 'Slava Aum' },
    { role: 'Animator', name: 'Riccardo Fusetti' },
    { role: 'Project Consultant', name: 'Olga Mineva' },
    { role: 'Production Company', name: 'Story Films' }
  ];

  const stories = [
    { title: 'A Story that Liberates', author: 'Mihaela Georgieva' },
    { title: 'Good Enough', author: 'Teyah Mineva & Kalina Staneva' },
    { title: 'Moka', author: 'Anonymous & Bilyana Georgieva' },
    { title: 'Phoenix', author: 'Nora Hristova & Lilia Nova' }
  ];

  return (
    <PageWrapper title="Directing">
      {/* Current Project */}
      <section className="space-y-6">
        <div className="space-y-1.5">
          <h2 className="text-xl sm:text-2xl text-ink leading-snug">
            Сякаш не се е случвало{' '}
            <span className="italic text-ink-muted font-light">(Like Nothing Ever Happened)</span>
          </h2>
          <p className="text-sm text-ink-muted">
            Short Hybrid Documentary <span className="text-earth">(Currently in Post-production)</span>
          </p>
        </div>

        <div className="w-full max-w-2xl">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-border shadow-xs">
            <img
              src="/assets/lneh.jpg"
              alt="Still from Сякаш не се е случвало (Like Nothing Ever Happened)"
              width={800}
              height={450}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interactive Installation */}
      <section className="space-y-10 pt-10 border-t border-canvas-subtle">
        <div className="space-y-4">
          <div className="space-y-1.5">
            <h2 className="text-xl sm:text-2xl text-ink leading-snug">
              <a
                href="https://www.instagram.com/tova.ne.e.nasilie/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earth transition-colors inline-flex items-baseline flex-wrap gap-x-2 group"
              >
                <span className="group-hover:underline decoration-earth/40">Това не е насилие</span>
                <span className="italic text-ink-muted group-hover:text-earth font-light transition-colors">
                  (This Isn’t Violence)
                </span>
                <ArrowUpRight size={14} className="text-earth/75 group-hover:text-earth transition-colors self-center" />
              </a>
            </h2>
            <p className="text-sm text-ink-muted tabular-nums">
              Interactive Installation &middot; 2023
            </p>
          </div>

          <p className="text-[15px] text-ink-muted leading-relaxed max-w-2xl">
            An interactive web-based installation presenting four micro stories written by women who have survived domestic abuse. Funded by the National Culture Fund of Bulgaria, in collaboration with Emprove Project.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-sm pt-1">
            <a
              href="https://www.instagram.com/tova.ne.e.nasilie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-earth underline decoration-earth/35 hover:decoration-earth transition-colors inline-flex items-center gap-1"
            >
              @tova.ne.e.nasilie <ArrowUpRight size={14} className="opacity-70" />
            </a>
            <a
              href="https://www.dw.com/bg/v-kuhnata-v-bara-na-ulicata-domasnoto-nasilie-v-blgaria/a-65730058"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink-muted hover:text-ink transition-colors inline-flex items-center gap-1"
            >
              DW Interview <ArrowUpRight size={14} className="opacity-70" />
            </a>
          </div>
        </div>

        {/* Stories List */}
        <div className="space-y-4">
          <h3 className="text-sm text-ink-muted font-sans font-medium tracking-[0.02em]">
            Micro-Stories
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-4">
            {stories.map((s) => (
              <div key={s.title} className="space-y-0.5">
                <div className="font-serif text-lg text-ink">{s.title}</div>
                <div className="text-sm text-ink-muted">{s.author}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Credits */}
        <div className="space-y-4 pt-10 border-t border-canvas-subtle">
          <h3 className="text-sm text-ink-muted font-sans font-medium tracking-[0.02em]">
            Credits
          </h3>
          <dl className="grid grid-cols-1 sm:grid-cols-3 gap-x-6 gap-y-4 text-sm">
            {credits.map((c) => (
              <div key={c.role} className="space-y-0.5">
                <dt className="text-xs text-earth">{c.role}</dt>
                <dd className="text-ink">{c.name}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>
    </PageWrapper>
  );
};
