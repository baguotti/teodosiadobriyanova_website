import React, { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight, ChevronDown, ChevronUp, Play } from '../components/ui/Icons';

interface Credit {
  label: string;
  value: string;
}

interface Project {
  id: string;
  title: string;
  category: string;
  link: string;
  platform: string;
  thumbnail: string;
  description?: string;
  credits: Credit[];
  note?: string;
  externalLinkText?: string;
  externalLinkUrl?: string;
}

export const Producing: React.FC = () => {
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const toggleExpand = (id: string) => {
    setExpandedId((prev) => (prev === id ? null : id));
  };

  const projects: Project[] = [
    {
      id: 'lisa',
      title: 'LISA',
      category: 'Safeguarding Video Report & Animated Short',
      platform: 'Vimeo',
      link: 'https://vimeo.com/549825931?fl=pl&fe=sh',
      thumbnail: 'https://vumbnail.com/549825931.jpg',
      description:
        "In 2019, over 170 people were homeless in Hammersmith and Fulham alone. One of them was Lisa, who slept rough on the borough's streets for seven years. Produced during lockdown, Lisa's interview was filmed by her social workers.",
      credits: [
        { label: 'Producers', value: 'Teodosia Dobriyanova & Francesca Tesler (for H&F Council)' },
        { label: 'Animation', value: 'Alex Marbs' },
        { label: 'Filmed by', value: 'Anna Watchman & Sabina White (St Mungo’s)' }
      ],
      note: 'If you are concerned about someone sleeping rough in your area, please reach out via streetlink.org or download the app.',
      externalLinkText: 'StreetLink Website',
      externalLinkUrl: 'https://www.streetlink.org'
    },
    {
      id: 'hobbie-stuart-deliverance',
      title: 'Hobbie Stuart - Deliverance',
      category: 'Music Video',
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=cEEX3_c4GlU',
      thumbnail: 'https://img.youtube.com/vi/cEEX3_c4GlU/hqdefault.jpg',
      credits: [
        { label: 'Director', value: 'Riccardo Fusetti' },
        { label: 'Producer', value: 'Teodosia Dobriyanova' },
        { label: 'DoP', value: 'Brandon Lee Weston' },
        { label: 'Production Company', value: 'Wild Island Films' },
        { label: '1st AC', value: 'Blerta Kambo' },
        { label: '2nd AC', value: 'Yinghe Lou' },
        { label: 'Gaffer', value: 'Morgan Shaw' },
        { label: 'Production Assistant', value: 'Brendan Cox' },
        { label: 'Colour Grade', value: 'Guido Medici' },
        { label: 'Makeup Artist', value: 'Elina Balint' },
        { label: 'Extras', value: 'Lydia Tolhurst, Niall Perera & Hash Patel' }
      ]
    },
    {
      id: 'circus-of-bones',
      title: 'Circus of Bones - Una and the Lion',
      category: 'Music Video',
      platform: 'YouTube',
      link: 'https://www.youtube.com/watch?v=RIJA6Kz0-uk',
      thumbnail: 'https://img.youtube.com/vi/RIJA6Kz0-uk/hqdefault.jpg',
      credits: [
        { label: 'Director', value: 'Riccardo Fusetti' },
        { label: 'Producer', value: 'Teodosia Dobriyanova' },
        { label: 'DoP', value: 'Brandon Lee Weston' },
        { label: 'Production Company', value: 'Wild Island Films' }
      ]
    }
  ];

  return (
    <PageWrapper title="Producing">
      <section>
        <div className="divide-y divide-canvas-subtle">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <article key={project.id} className="py-9 first:pt-0 flex flex-col md:flex-row items-start justify-between gap-7 md:gap-10 group">
                <div className="flex-1 space-y-2.5">
                  <div className="flex flex-wrap items-center gap-x-2 text-sm text-ink-muted">
                    <span className="text-earth">{project.platform}</span>
                    <span aria-hidden="true" className="text-border">&middot;</span>
                    <span>{project.category}</span>
                  </div>

                  <h2 className="text-xl sm:text-2xl text-ink leading-snug">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-earth hover:underline decoration-earth/40 transition-colors inline-flex items-baseline gap-1.5"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={14} className="text-earth/75 self-center" />
                    </a>
                  </h2>

                  {project.description && (
                    <p className="text-[15px] text-ink-muted leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  )}

                  <div className="pt-1">
                    <button
                      type="button"
                      onClick={() => toggleExpand(project.id)}
                      aria-expanded={isExpanded}
                      className="inline-flex items-center gap-1.5 text-sm text-ink-muted hover:text-ink transition-colors cursor-pointer"
                    >
                      <span>{isExpanded ? 'Hide credits' : 'Credits & details'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-4 border-t border-canvas-subtle space-y-4 max-w-xl fade-in">
                      <dl className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs">
                        {project.credits.map((credit) => (
                          <div key={credit.label} className="flex justify-between border-b border-canvas-subtle/60 pb-1.5">
                            <dt className="text-ink-muted">{credit.label}</dt>
                            <dd className="text-ink font-medium text-right ml-4">{credit.value}</dd>
                          </div>
                        ))}
                      </dl>

                      {project.note && (
                        <div className="bg-canvas-subtle/35 p-4 rounded-lg border border-canvas-subtle space-y-2 text-xs text-ink-muted">
                          <p className="leading-relaxed">{project.note}</p>
                          {project.externalLinkUrl && (
                            <a
                              href={project.externalLinkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-ink hover:text-earth font-medium transition-colors gap-1"
                            >
                              <span>{project.externalLinkText}</span>
                              <ArrowUpRight size={14} />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {project.thumbnail && (
                  <div className="w-full md:w-64 shrink-0">
                    <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-border shadow-xs relative group/thumb">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img
                          src={project.thumbnail}
                          alt={`${project.title} Preview`}
                          loading="lazy"
                          decoding="async"
                          className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover/thumb:scale-[1.02]"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/thumb:bg-black/25 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-ink shadow-xs group-hover/thumb:scale-105 transition-transform">
                            <Play size={16} className="ml-0.5" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </article>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
};
