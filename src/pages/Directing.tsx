import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HandDrawnUnderline } from '../components/ui/HandDrawn';

export const Directing: React.FC = () => {
  const [showCredits, setShowCredits] = useState(false);

  useEffect(() => {
    document.title = 'directing — teodosia dobriyanova';
  }, []);

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

  return (
    <PageWrapper>
      <h1 className="sr-only">directing</h1>

      {/* Current Project */}
      <section className="space-y-3.5">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={1}>film</HandDrawnUnderline>
        </h2>

        <div className="space-y-4 max-w-2xl">
          <div className="space-y-0.5 leading-snug">
            <h3 className="text-[15px] text-ink">
              Сякаш не се е случвало{' '}
              <span className="italic text-ink-muted">(Like Nothing Ever Happened)</span>
            </h3>
            <p className="text-sm text-ink-muted">
              Short Hybrid Documentary{' '}
              <span className="italic text-earth">(Currently in Post-production)</span>
            </p>
          </div>

          <div className="w-full max-w-xl aspect-[3/2] overflow-hidden bg-canvas-subtle/40">
            <img
              src="/assets/lneh.jpg"
              alt="Still from Сякаш не се е случвало (Like Nothing Ever Happened)"
              width={1200}
              height={795}
              loading="lazy"
              decoding="async"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Interactive Installation */}
      <section className="space-y-3.5 pt-4">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={3}>interactive installation</HandDrawnUnderline>
        </h2>

        <div className="space-y-2.5 max-w-2xl">
          <div className="text-[15px] leading-snug">
            <a
              href="https://www.instagram.com/tova.ne.e.nasilie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-earth hover:underline decoration-earth/45"
            >
              Това не е насилие{' '}
              <span className="italic text-ink-muted">(This Isn’t Violence)</span>
            </a>
            <span className="text-sm text-ink-muted tabular-nums">, 2023</span>
          </div>

          <p className="text-sm text-ink-muted leading-relaxed">
            An interactive web-based installation presenting four micro stories written by women who have survived domestic abuse. Funded by the National Culture Fund of Bulgaria, in collaboration with Emprove Project.
          </p>

          <p className="text-sm text-ink-muted flex flex-wrap items-center gap-x-3 gap-y-1">
            <a
              href="https://www.instagram.com/tova.ne.e.nasilie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-earth hover:underline decoration-earth/45"
            >
              @tova.ne.e.nasilie
            </a>
            <span aria-hidden="true" className="text-border">&middot;</span>
            <a
              href="https://www.dw.com/bg/v-kuhnata-v-bara-na-ulicata-domasnoto-nasilie-v-blgaria/a-65730058"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-ink hover:underline decoration-earth/45"
            >
              DW Interview
            </a>
            <span aria-hidden="true" className="text-border">&middot;</span>
            <button
              type="button"
              onClick={() => setShowCredits((prev) => !prev)}
              aria-expanded={showCredits}
              className="text-earth hover:text-ink hover:underline decoration-earth/45 lowercase cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
            >
              credits
            </button>
          </p>

          {showCredits && (
            <p className="pt-2 text-sm text-ink-muted leading-relaxed">
              {credits.map((c, idx) => (
                <React.Fragment key={c.role}>
                  <span className="italic">{c.role}:</span>{' '}
                  <span className="text-ink">{c.name}</span>
                  {idx < credits.length - 1 ? ' · ' : ''}
                </React.Fragment>
              ))}
            </p>
          )}
        </div>
      </section>
    </PageWrapper>
  );
};
