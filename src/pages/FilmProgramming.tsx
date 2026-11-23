import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight } from '../components/ui/Icons';

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
    <PageWrapper title="Film Programming">
      {/* Curated Seasons & Retrospectives */}
      <section>
        <div className="divide-y divide-canvas-subtle">
          {seasons.map((item) => (
            <article key={item.title} className="py-9 first:pt-0 flex flex-col md:flex-row items-start md:items-center justify-between gap-7 md:gap-10 group">
              <div className="flex-1 space-y-2.5">
                <div className="flex flex-wrap items-center gap-x-2 text-sm text-ink-muted tabular-nums">
                  <span className="text-earth">{item.date}</span>
                  <span aria-hidden="true" className="text-border">&middot;</span>
                  <span>{item.venue}</span>
                  {item.role && (
                    <>
                      <span aria-hidden="true" className="text-border">&middot;</span>
                      <span>{item.role}</span>
                    </>
                  )}
                </div>

                <h2 className="text-xl sm:text-2xl text-ink leading-snug">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-earth transition-colors inline-flex items-baseline gap-1.5 group/link"
                  >
                    <span className="group-hover/link:underline decoration-earth/40">{item.title}</span>
                    <ArrowUpRight size={14} className="text-earth/75 group-hover/link:text-earth transition-colors shrink-0 self-center" />
                  </a>
                </h2>

                <p className="text-[15px] text-ink-muted leading-relaxed max-w-xl">
                  {item.description}
                </p>
              </div>

              {item.poster && (
                <a
                  href={item.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  tabIndex={-1}
                  aria-hidden="true"
                  className="w-full md:w-64 shrink-0 block"
                >
                  <div className="w-full aspect-[4/3] sm:aspect-[16/9] md:aspect-[4/3] overflow-hidden rounded-xl border border-border shadow-xs">
                    <img
                      src={item.poster}
                      alt=""
                      loading="lazy"
                      decoding="async"
                      className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.02]"
                    />
                  </div>
                </a>
              )}
            </article>
          ))}
        </div>
      </section>

      {/* Festival Roles */}
      <section className="space-y-5 pt-10 border-t border-canvas-subtle">
        <h2 className="text-sm text-ink-muted font-sans font-medium tracking-[0.02em]">
          Festival Roles
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <div className="space-y-0.5">
            <h3 className="text-lg text-ink">
              <a
                href="https://www.cambridgefilmfestival.org.uk/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earth hover:underline decoration-earth/40 transition-colors inline-flex items-baseline gap-1"
              >
                <span>Cambridge Film Festival</span>
                <ArrowUpRight size={14} className="text-earth/75 self-center" />
              </a>
            </h3>
            <p className="text-sm text-ink-muted tabular-nums">Film Programmer &middot; Since 2024</p>
          </div>

          <div className="space-y-0.5">
            <h3 className="text-lg text-ink">
              <a
                href="https://www.sheffdocfest.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-earth hover:underline decoration-earth/40 transition-colors inline-flex items-baseline gap-1"
              >
                <span>Sheffield Doc/Fest</span>
                <ArrowUpRight size={14} className="text-earth/75 self-center" />
              </a>
            </h3>
            <p className="text-sm text-ink-muted tabular-nums">Programme Adviser &middot; 2022</p>
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
