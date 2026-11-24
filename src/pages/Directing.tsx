import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HandDrawnUnderline } from '../components/ui/HandDrawn';
import directingData from '../data/directing.json';

export const Directing: React.FC = () => {
  const [openCredits, setOpenCredits] = useState<Record<number, boolean>>({});

  useEffect(() => {
    document.title = 'directing — teodosia dobriyanova';
  }, []);

  const toggleCredits = (idx: number) => {
    setOpenCredits((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  return (
    <PageWrapper>
      <h1 className="sr-only">directing</h1>

      {/* Films */}
      {directingData.films.length > 0 && (
        <section className="space-y-3.5">
          <h2 className="text-sm font-normal text-ink lowercase">
            <HandDrawnUnderline size="sm" variant={1}>film</HandDrawnUnderline>
          </h2>

          <div className="space-y-8 max-w-2xl">
            {directingData.films.map((film) => (
              <div key={film.title} className="space-y-4">
                <div className="space-y-0.5 leading-snug">
                  <h3 className="text-[15px] text-ink">
                    {film.title}
                    {film.translation && (
                      <>
                        {' '}
                        <span className="italic text-ink-muted">({film.translation})</span>
                      </>
                    )}
                  </h3>
                  {(film.format || film.status) && (
                    <p className="text-sm text-ink-muted">
                      {film.format}
                      {film.format && film.status ? ' ' : ''}
                      {film.status && (
                        <span className="italic text-earth">({film.status})</span>
                      )}
                    </p>
                  )}
                </div>

                {film.still && (
                  <div className="w-full max-w-[490px] aspect-[3/2] overflow-hidden rounded-[3px] bg-canvas-subtle/40">
                    <img
                      src={film.still}
                      alt={`Still from ${film.title}`}
                      width={1200}
                      height={795}
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover"
                    />
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      )}

      {/* Interactive Installations */}
      {directingData.installations.length > 0 && (
        <section className="space-y-3.5 pt-2">
          <h2 className="text-sm font-normal text-ink lowercase">
            <HandDrawnUnderline size="sm" variant={3}>interactive installation</HandDrawnUnderline>
          </h2>

          <div className="space-y-8 max-w-2xl">
            {directingData.installations.map((item, idx) => {
              const showCredits = !!openCredits[idx];
              const hasCredits = item.credits && item.credits.length > 0;
              const links = item.links ?? [];

              return (
                <div key={item.title} className="space-y-2.5">
                  <div className="text-[15px] leading-snug">
                    {item.url ? (
                      <a
                        href={item.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-ink hover:text-earth hover:underline decoration-earth/45"
                      >
                        {item.title}
                        {item.translation && (
                          <>
                            {' '}
                            <span className="italic text-ink-muted">({item.translation})</span>
                          </>
                        )}
                      </a>
                    ) : (
                      <span className="text-ink">
                        {item.title}
                        {item.translation && (
                          <>
                            {' '}
                            <span className="italic text-ink-muted">({item.translation})</span>
                          </>
                        )}
                      </span>
                    )}
                    {item.year && (
                      <span className="text-sm text-ink-muted tabular-nums">, {item.year}</span>
                    )}
                  </div>

                  {item.description && (
                    <p className="text-sm text-ink-muted leading-relaxed">
                      {item.description}
                    </p>
                  )}

                  {(links.length > 0 || hasCredits) && (
                    <p className="text-sm text-ink-muted flex flex-wrap items-center gap-x-3 gap-y-1">
                      {links.map((link, linkIdx) => (
                        <React.Fragment key={link.url}>
                          {linkIdx > 0 && (
                            <span aria-hidden="true" className="text-border">&middot;</span>
                          )}
                          <a
                            href={link.url}
                            target="_blank"
                            rel="noopener noreferrer"
                            className={
                              linkIdx === 0
                                ? 'text-ink hover:text-earth hover:underline decoration-earth/45'
                                : 'hover:text-ink hover:underline decoration-earth/45'
                            }
                          >
                            {link.label}
                          </a>
                        </React.Fragment>
                      ))}
                      {hasCredits && (
                        <>
                          {links.length > 0 && (
                            <span aria-hidden="true" className="text-border">&middot;</span>
                          )}
                          <button
                            type="button"
                            onClick={() => toggleCredits(idx)}
                            aria-expanded={showCredits}
                            className="text-earth hover:text-ink hover:underline decoration-earth/45 lowercase cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
                          >
                            credits
                          </button>
                        </>
                      )}
                    </p>
                  )}

                  {showCredits && hasCredits && (
                    <p className="pt-2 text-sm text-ink-muted leading-relaxed">
                      {item.credits.map((c, cIdx) => (
                        <React.Fragment key={`${c.role}-${cIdx}`}>
                          <span className="italic">{c.role}:</span>{' '}
                          <span className="text-ink">{c.name}</span>
                          {cIdx < item.credits.length - 1 ? ' · ' : ''}
                        </React.Fragment>
                      ))}
                    </p>
                  )}
                </div>
              );
            })}
          </div>
        </section>
      )}
    </PageWrapper>
  );
};
