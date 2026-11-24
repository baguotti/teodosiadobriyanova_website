import React, { useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';
import { HandDrawnBullet, HandDrawnUnderline } from '../components/ui/HandDrawn';
import aboutData from '../data/about.json';

export const Home: React.FC = () => {
  useEffect(() => {
    document.title = 'teodosia dobriyanova — filmmaker, curator & video journalist';
  }, []);

  return (
    <PageWrapper>
      {/* Portrait & Bio */}
      <section className="flex flex-col sm:flex-row items-start sm:items-center gap-5 sm:gap-7">
        {aboutData.portrait && (
          <div className="relative shrink-0">
            <div
              className="w-40 h-52 sm:w-44 sm:h-56 bg-white p-[5px] shadow-[0_1px_5px_rgba(30,31,34,0.08)]"
              style={{
                clipPath: 'polygon(0.6% 0.4%, 99.5% 0%, 100% 99.3%, 0.2% 100%)',
              }}
            >
              <img
                src={aboutData.portrait}
                alt="Teodosia Dobriyanova"
                width={639}
                height={800}
                decoding="async"
                className="w-full h-full object-cover object-[50%_18%]"
              />
            </div>
          </div>
        )}

        <div className="space-y-1.5 max-w-sm">
          <h1 className="text-[15px] text-ink font-normal lowercase leading-relaxed">
            {aboutData.bio}
          </h1>

          <p className="text-sm text-ink-muted flex flex-wrap items-center gap-x-3 gap-y-1">
            {aboutData.email && (
              <a
                href={`mailto:${aboutData.email}`}
                className="hover:text-ink hover:underline decoration-earth/45"
              >
                {aboutData.email}
              </a>
            )}
            {aboutData.email && aboutData.instagramUrl && (
              <span aria-hidden="true" className="text-border">&middot;</span>
            )}
            {aboutData.instagramUrl && (
              <a
                href={aboutData.instagramUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-ink hover:underline decoration-earth/45 lowercase"
              >
                instagram
              </a>
            )}
          </p>
        </div>
      </section>

      {/* Work Index */}
      <section aria-label="Work" className="space-y-2.5 -mt-4">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={1}>work</HandDrawnUnderline>
        </h2>

        <ul className="space-y-1 max-w-4xl">
          {aboutData.workLinks.map((item, idx) => (
            <li key={item.link} className="flex items-start gap-3 leading-snug">
              <HandDrawnBullet variant={idx} className="mt-[0.42rem]" />
              <div className="text-[15px]">
                <Link
                  to={item.link}
                  className="group text-ink hover:text-earth lowercase"
                >
                  <HandDrawnUnderline hoverOnly size="sm" variant={idx + 2}>
                    {item.title}
                  </HandDrawnUnderline>
                </Link>
                {item.subtitle && (
                  <span className="italic text-ink-muted">, {item.subtitle}</span>
                )}
              </div>
            </li>
          ))}
        </ul>
      </section>
    </PageWrapper>
  );
};
