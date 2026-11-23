import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const sections = [
    {
      title: 'Directing',
      subtitle: 'Hybrid documentaries & interactive work',
      link: '/directing',
    },
    {
      title: 'Film Programming',
      subtitle: 'Barbican Centre & festival curatorial work',
      link: '/film-programming',
    },
    {
      title: 'Journalism',
      subtitle: 'Video reporting & published features',
      link: '/journalism',
    },
    /*
    {
      title: 'Producing & planet.a',
      subtitle: 'Independent non-fiction & visual hub',
      link: '/producing',
    }
    */
  ];

  return (
    <PageWrapper>
      {/* Hero Section: Side-by-Side Portrait & Intro */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center py-4 sm:py-8">
        <div className="md:col-span-4 flex justify-start">
          <div className="w-44 h-56 sm:w-52 sm:h-64 lg:w-56 lg:h-72 rounded-xl overflow-hidden border border-border bg-canvas-subtle/40 shadow-xs">
            <img
              src="/assets/portrait.jpg"
              alt="Teodosia Dobriyanova"
              width={639}
              height={800}
              decoding="async"
              className="w-full h-full object-cover object-[50%_18%]"
            />
          </div>
        </div>

        <div className="md:col-span-8 space-y-5">
          <h1 className="text-2xl sm:text-3xl text-ink font-normal leading-[1.3]">
            Filmmaker, curator, and video journalist based between London and Sofia.
          </h1>

          <p className="text-sm text-ink-muted">
            <a
              href="mailto:tdobriyanova@gmail.com"
              className="text-ink hover:text-earth underline decoration-earth/35 hover:decoration-earth transition-colors"
            >
              tdobriyanova@gmail.com
            </a>
          </p>
        </div>
      </section>

      {/* Work Index */}
      <section aria-label="Work" className="pt-10 border-t border-canvas-subtle">
        <div className="divide-y divide-canvas-subtle">
          {sections.map((item) => (
            <Link
              key={item.link}
              to={item.link}
              className="group py-6 first:pt-0 flex items-baseline justify-between gap-6 transition-colors duration-200"
            >
              <div className="space-y-1">
                <h2 className="text-xl sm:text-2xl text-ink group-hover:text-earth transition-colors leading-snug">
                  {item.title}
                </h2>
                <p className="text-sm text-ink-muted">
                  {item.subtitle}
                </p>
              </div>

              <span
                aria-hidden="true"
                className="text-ink-muted group-hover:text-earth group-hover:translate-x-1 transition-all duration-200 shrink-0 text-lg"
              >
                &rarr;
              </span>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};
