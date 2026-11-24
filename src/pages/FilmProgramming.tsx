import React, { useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HandDrawnUnderline } from '../components/ui/HandDrawn';
import filmProgrammingData from '../data/film-programming.json';

export const FilmProgramming: React.FC = () => {
  useEffect(() => {
    document.title = 'film programming — teodosia dobriyanova';
  }, []);

  return (
    <PageWrapper>
      <h1 className="sr-only">film programming</h1>

      <section className="space-y-3.5">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={2}>curated seasons</HandDrawnUnderline>
        </h2>

        <ul className="list-disc pl-5 marker:text-ink-muted space-y-1 max-w-4xl">
          {filmProgrammingData.seasons.map((item) => (
            <li key={item.title} className="text-[15px] leading-snug">
              {item.link ? (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-earth hover:underline decoration-earth/45"
                >
                  {item.title}
                </a>
              ) : (
                <span className="text-ink">{item.title}</span>
              )}
              {(item.venue || item.date) && (
                <span className="italic text-ink-muted tabular-nums">
                  {item.venue ? `, ${item.venue}` : ''}
                  {item.date ? ` (${item.date})` : ''}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3.5 pt-2">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={0}>festival roles</HandDrawnUnderline>
        </h2>

        <ul className="list-disc pl-5 marker:text-ink-muted space-y-1 max-w-4xl">
          {filmProgrammingData.festivalRoles.map((festival) => (
            <li key={festival.name} className="text-[15px] leading-snug">
              {festival.link ? (
                <a
                  href={festival.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-earth hover:underline decoration-earth/45"
                >
                  {festival.name}
                </a>
              ) : (
                <span className="text-ink">{festival.name}</span>
              )}
              {(festival.role || festival.date) && (
                <span className="italic text-ink-muted tabular-nums">
                  {festival.role ? `, ${festival.role}` : ''}
                  {festival.date ? ` (${festival.date})` : ''}
                </span>
              )}
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
};
