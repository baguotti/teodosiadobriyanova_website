import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight } from 'lucide-react';

export const FilmProgramming: React.FC = () => {
  const seasons = [
    {
      title: 'Cold War Visions: Nuclear Anxiety in the Eastern Bloc',
      venue: 'Barbican Centre',
      date: 'April 2026',
      role: 'Season Curator',
      description: 'Examining cinematic responses to nuclear tension, state surveillance, and existential anxiety across Eastern European cinema.',
      link: 'https://www.barbican.org.uk/whats-on/2026/series/cold-war-visions',
      poster: '/assets/cold_war_visions_poster.jpeg'
    },
    {
      title: 'New East Cinema',
      venue: 'Barbican Centre',
      date: '2020–2026',
      role: 'Programme Curator',
      description: 'Ongoing film programme bringing contemporary non-fiction and hybrid cinema from Eastern Europe and Central Asia to London.',
      link: 'https://www.barbican.org.uk/whats-on/series/new-east-cinema',
      poster: '/assets/new_east_cinema_poster.webp'
    },
    {
      title: 'Visions of Ukraine',
      venue: 'Barbican Centre',
      date: 'Sep – Oct 2025',
      role: 'Season Curator',
      description: 'Film season spotlighting historic and contemporary Ukrainian directors and documentary pioneers.',
      link: 'https://www.barbican.org.uk/whats-on/2025/series/visions-of-ukraine',
      poster: '/assets/visions_of_ukraine_poster.jpg'
    },
    {
      title: 'Hidden Figures: Binka Zhelyazkova',
      venue: 'Barbican Centre',
      date: 'September 2023',
      role: 'Season Co-Curator',
      description: 'Retrospective celebrating the pioneer of Bulgarian cinema. Anti-authoritarian satires and post-war classics.',
      link: 'https://www.barbican.org.uk/whats-on/2023/series/hidden-figures-binka-zhelyakova',
      poster: '/assets/binka_zhelyazkova_poster.webp'
    },
    {
      title: 'Walls Remember',
      venue: 'Barbican Centre',
      date: 'June 2021',
      role: 'Short Programme Curator',
      description: 'Short film compilation examining memory, architectural heritage, and urban landscapes in Eastern Bloc border regions.',
      link: 'https://www.barbican.org.uk/whats-on/2021/event/new-east-cinema-walls-remember-shorts-compilation-15',
      poster: '/assets/walls_remember_poster.jpg'
    }
  ];

  return (
    <PageWrapper
      subtitle="Curatorial Work & Retrospectives"
      title="Film Programming"
    >
      {/* Curated Seasons & Retrospectives List */}
      <section className="space-y-12">
        <div className="divide-y divide-[#F0ECE1]">
          {seasons.map((item, idx) => (
            <div key={idx} className="py-10 flex flex-col md:flex-row items-center justify-between gap-8 md:gap-12 group">
              {/* Text Information Column */}
              <div className="flex-1 space-y-3">
                <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs">
                  <span className="text-[#A88B68] font-medium uppercase tracking-wider">{item.date}</span>
                  <span className="text-[#E8E3D9]">&bull;</span>
                  <span className="text-[#75716B] font-light">{item.venue}</span>
                  {item.role && (
                    <>
                      <span className="text-[#E8E3D9]">&bull;</span>
                      <span className="text-[#75716B] font-light italic">{item.role}</span>
                    </>
                  )}
                </div>

                <h2 className=" text-xl md:text-2xl text-[#2B2927] leading-snug">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-[#A88B68] transition-colors inline-flex items-baseline group/link"
                  >
                    <span>{item.title}</span>
                    <ArrowUpRight size={15} className="ml-1.5 inline-block text-[#A88B68] group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                  </a>
                </h2>

                <p className="text-sm text-[#75716B] font-light leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>

              {/* Poster Thumbnail Column */}
              {item.poster && (
                <div className="w-full md:w-72 shrink-0">
                  <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-xl border border-[#E8E3D9] shadow-sm">
                    <img
                      src={item.poster}
                      alt={`${item.title} Poster`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Festival Roles */}
      <section className="space-y-6 pt-10 border-t border-[#F0ECE1]">
        <div className="text-xs uppercase tracking-[0.2em] text-[#A88B68] font-medium">
          Festival Roles
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 text-sm">
          <div>
            <h3 className=" text-xl text-[#2B2927]">
              <a 
                href="https://www.cambridgefilmfestival.org.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#A88B68] transition-colors inline-flex items-baseline group"
              >
                <span>Cambridge Film Festival</span>
                <ArrowUpRight size={13} className="ml-1 inline-block text-[#A88B68] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </h3>
            <div className="text-xs text-[#75716B] font-light mt-0.5">Film Programmer &bull; Since 2024</div>
          </div>
          <div>
            <h3 className=" text-xl text-[#2B2927]">
              <a 
                href="https://www.sheffdocfest.com/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="hover:text-[#A88B68] transition-colors inline-flex items-baseline group"
              >
                <span>Sheffield Doc/Fest</span>
                <ArrowUpRight size={13} className="ml-1 inline-block text-[#A88B68] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
            </h3>
            <div className="text-xs text-[#75716B] font-light mt-0.5">Programme Adviser &bull; 2022</div>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
