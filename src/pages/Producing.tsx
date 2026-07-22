import React, { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight, ChevronDown, ChevronUp, Play } from 'lucide-react';

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
    setExpandedId(prev => (prev === id ? null : id));
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
    <PageWrapper
      subtitle="Film Production & Project Management"
      title="Producing"
    >
      <section className="space-y-12">
        <div className="divide-y divide-[#F0ECE1]">
          {projects.map((project) => {
            const isExpanded = expandedId === project.id;
            return (
              <div key={project.id} className="py-10 flex flex-col md:flex-row items-start justify-between gap-8 md:gap-12 group">
                {/* Text Information Column */}
                <div className="flex-1 space-y-3">
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                    <span className="text-[#A88B68] font-medium uppercase tracking-wider">{project.platform}</span>
                    <span className="text-[#E8E3D9]">&bull;</span>
                    <span className="text-[#75716B] font-light">{project.category}</span>
                  </div>

                  <h2 className="font-serif text-2xl md:text-[28px] text-[#2B2927] leading-snug">
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-[#A88B68] transition-colors inline-flex items-baseline group/link"
                    >
                      <span>{project.title}</span>
                      <ArrowUpRight size={15} className="ml-1.5 inline-block text-[#A88B68] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                    </a>
                  </h2>

                  {project.description && (
                    <p className="text-sm text-[#75716B] font-light leading-relaxed max-w-xl">
                      {project.description}
                    </p>
                  )}

                  <div className="pt-2">
                    <button
                      onClick={() => toggleExpand(project.id)}
                      className="inline-flex items-center gap-1.5 text-xs uppercase tracking-wider text-[#75716B] hover:text-[#2B2927] transition-colors"
                    >
                      <span>{isExpanded ? 'Hide Full Credits' : 'View Full Credits & Details'}</span>
                      {isExpanded ? <ChevronUp size={14} /> : <ChevronDown size={14} />}
                    </button>
                  </div>

                  {isExpanded && (
                    <div className="pt-4 border-t border-[#F0ECE1] space-y-4 max-w-xl fade-in">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-6 gap-y-2 text-xs font-light">
                        {project.credits.map((credit, idx) => (
                          <div key={idx} className="flex justify-between border-b border-[#F0ECE1]/60 pb-1.5">
                            <span className="text-[#75716B]">{credit.label}</span>
                            <span className="text-[#2B2927] font-medium text-right ml-4">{credit.value}</span>
                          </div>
                        ))}
                      </div>

                      {project.note && (
                        <div className="bg-[#F9F7F2] p-4 rounded-lg border border-[#F0ECE1] space-y-2 text-xs text-[#75716B]">
                          <p className="font-light leading-relaxed">{project.note}</p>
                          {project.externalLinkUrl && (
                            <a
                              href={project.externalLinkUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center text-[#2B2927] hover:text-[#A88B68] font-medium transition-colors"
                            >
                              <span>{project.externalLinkText}</span>
                              <ArrowUpRight size={13} className="ml-1" />
                            </a>
                          )}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Video Preview Thumbnail Column */}
                {project.thumbnail && (
                  <div className="w-full md:w-72 shrink-0">
                    <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-[#E8E3D9] shadow-sm relative group/thumb">
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="block w-full h-full">
                        <img
                          src={project.thumbnail}
                          alt={`${project.title} Preview`}
                          className="w-full h-full object-cover"
                        />
                        <div className="absolute inset-0 bg-black/10 group-hover/thumb:bg-black/25 transition-colors flex items-center justify-center">
                          <div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-xs flex items-center justify-center text-[#2B2927] shadow-sm group-hover/thumb:scale-105 transition-transform">
                            <Play size={16} className="ml-0.5 fill-current" />
                          </div>
                        </div>
                      </a>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
};


