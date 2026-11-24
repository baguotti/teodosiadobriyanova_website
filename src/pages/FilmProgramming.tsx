import React, { useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HandDrawnBullet, HandDrawnUnderline } from '../components/ui/HandDrawn';

export const FilmProgramming: React.FC = () => {
  useEffect(() => {
    document.title = 'film programming — teodosia dobriyanova';
  }, []);

  const seasons = [
    {
      title: 'Cold War Visions: Nuclear Anxiety in the Eastern Bloc',
      venue: 'Barbican Centre',
      date: 'April 2026',
      description: 'Examining cinematic responses to nuclear tension, state surveillance, and existential anxiety across Eastern European cinema.',
      link: 'https://www.barbican.org.uk/whats-on/2026/series/cold-war-visions',
    },
    {
      title: 'New East Cinema',
      venue: 'Barbican Centre',
      date: '2020–2026',
      description: 'Ongoing film programme bringing contemporary non-fiction and hybrid cinema from Eastern Europe and Central Asia to London.',
      link: 'https://www.barbican.org.uk/whats-on/series/new-east-cinema',
    },
    {
      title: 'Visions of Ukraine',
      venue: 'Barbican Centre',
      date: 'Sep – Oct 2025',
      description: 'Film season spotlighting historic and contemporary Ukrainian directors and documentary pioneers.',
      link: 'https://www.barbican.org.uk/whats-on/2025/series/visions-of-ukraine',
    },
    {
      title: 'Hidden Figures: Binka Zhelyazkova',
      venue: 'Barbican Centre',
      date: 'September 2023',
      description: 'Retrospective celebrating the pioneer of Bulgarian cinema. Anti-authoritarian satires and post-war classics.',
      link: 'https://www.barbican.org.uk/whats-on/2023/series/hidden-figures-binka-zhelyakova',
    },
    {
      title: 'Walls Remember',
      venue: 'Barbican Centre',
      date: 'June 2021',
      description: 'Short film compilation examining memory, architectural heritage, and urban landscapes in Eastern Bloc border regions.',
      link: 'https://www.barbican.org.uk/whats-on/2021/event/new-east-cinema-walls-remember-shorts-compilation-15',
    }
  ];

  const festivalRoles = [
    {
      name: 'Cambridge Film Festival',
      role: 'Film Programmer',
      date: 'since 2024',
      link: 'https://www.cambridgefilmfestival.org.uk/'
    },
    {
      name: 'Sheffield Doc/Fest',
      role: 'Programme Adviser',
      date: '2022',
      link: 'https://www.sheffdocfest.com/'
    }
  ];

  return (
    <PageWrapper>
      <h1 className="sr-only">film programming</h1>

      <section className="space-y-3.5">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={2}>curated seasons</HandDrawnUnderline>
        </h2>

        <ul className="space-y-2.5 max-w-4xl">
          {seasons.map((item, idx) => (
            <li key={item.title} className="flex items-start gap-3">
              <HandDrawnBullet variant={idx} className="mt-[0.42rem]" />
              <div className="space-y-0.5">
                <div className="text-[15px] leading-snug">
                  <a
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-ink hover:text-earth hover:underline decoration-earth/45"
                  >
                    {item.title}
                  </a>
                  <span className="italic text-ink-muted tabular-nums">
                    , {item.venue} ({item.date})
                  </span>
                </div>
                <p className="text-sm text-ink-muted leading-snug">
                  {item.description}
                </p>
              </div>
            </li>
          ))}
        </ul>
      </section>

      <section className="space-y-3.5 pt-2">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={0}>festival roles</HandDrawnUnderline>
        </h2>

        <ul className="space-y-1 max-w-4xl">
          {festivalRoles.map((festival, idx) => (
            <li key={festival.name} className="flex items-start gap-3 leading-snug">
              <HandDrawnBullet variant={idx + 1} className="mt-[0.42rem]" />
              <div className="text-[15px]">
                <a
                  href={festival.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-ink hover:text-earth hover:underline decoration-earth/45 transition-colors"
                >
                  {festival.name}
                </a>
                <span className="italic text-ink-muted tabular-nums">
                  , {festival.role} ({festival.date})
                </span>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
};
