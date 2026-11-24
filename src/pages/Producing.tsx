import React, { useEffect, useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HandDrawnUnderline } from '../components/ui/HandDrawn';
import producingData from '../data/producing.json';

interface Credit {
  role: string;
  name: string;
}

interface ProducingProject {
  title: string;
  category?: string;
  link?: string;
  description?: string;
  credits?: Credit[];
  note?: string;
  externalLinkText?: string;
  externalLinkUrl?: string;
}

export const Producing: React.FC = () => {
  const [openCredits, setOpenCredits] = useState<Record<number, boolean>>({});

  useEffect(() => {
    document.title = 'producing — teodosia dobriyanova';
  }, []);

  const toggleCredits = (idx: number) => {
    setOpenCredits((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const projects = producingData.projects as ProducingProject[];

  return (
    <PageWrapper>
      <h1 className="sr-only">producing</h1>

      <section className="space-y-3.5">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={1}>selected projects</HandDrawnUnderline>
        </h2>

        <ul className="list-disc pl-5 marker:text-ink-muted space-y-1 max-w-4xl">
          {projects.map((project, idx) => {
            const showCredits = !!openCredits[idx];
            const hasCredits = !!(project.credits && project.credits.length > 0);

            return (
              <li key={project.title} className="text-[15px] leading-snug">
                {project.link ? (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-earth hover:underline decoration-earth/45"
                  >
                    {project.title}
                  </a>
                ) : (
                  <span className="text-ink">{project.title}</span>
                )}
                {project.category && (
                  <span className="italic text-ink-muted">, {project.category}</span>
                )}
                {hasCredits && (
                  <>
                    <span aria-hidden="true" className="text-border mx-2">&middot;</span>
                    <button
                      type="button"
                      onClick={() => toggleCredits(idx)}
                      aria-expanded={showCredits}
                      className="text-sm text-earth hover:text-ink hover:underline decoration-earth/45 lowercase cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
                    >
                      credits
                    </button>
                  </>
                )}

                {project.description && (
                  <p className="mt-0.5 text-sm text-ink-muted leading-snug max-w-2xl">
                    {project.description}
                  </p>
                )}

                {showCredits && hasCredits && (
                  <div className="mt-1.5 mb-2 space-y-1.5 text-sm text-ink-muted leading-relaxed max-w-2xl">
                    <p>
                      {project.credits!.map((c, cIdx) => (
                        <React.Fragment key={`${c.role}-${cIdx}`}>
                          <span className="italic">{c.role}:</span>{' '}
                          <span className="text-ink">{c.name}</span>
                          {cIdx < project.credits!.length - 1 ? ' · ' : ''}
                        </React.Fragment>
                      ))}
                    </p>
                    {project.note && (
                      <p className="text-xs text-ink-muted">
                        {project.note}{' '}
                        {project.externalLinkUrl && (
                          <a
                            href={project.externalLinkUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-ink hover:text-earth hover:underline decoration-earth/45"
                          >
                            {project.externalLinkText || project.externalLinkUrl}
                          </a>
                        )}
                      </p>
                    )}
                  </div>
                )}
              </li>
            );
          })}
        </ul>
      </section>
    </PageWrapper>
  );
};
