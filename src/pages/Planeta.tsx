import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight } from '../components/ui/Icons';

export const Planeta: React.FC = () => {
  const gridImages = Array.from({ length: 12 }, (_, i) => `/assets/planeta/grid_${i + 1}.jpg`);

  return (
    <PageWrapper title="planet.a">
      <div className="space-y-12">
        <section className="space-y-5 max-w-2xl">
          <p className="font-serif text-xl sm:text-2xl text-ink leading-relaxed font-normal">
            I am the founder of <span className="italic">planet.a</span> — an online community dedicated to communicating the climate crisis in a simple and accessible way to Bulgarian audiences.
          </p>
          <p className="text-[15px] text-ink-muted leading-relaxed">
            We are currently running a campaign in collaboration with Greenpeace Bulgaria which aims to ban the advertisement of fossil fuels within the EU.
          </p>

          <div className="pt-1">
            <a
              href="https://www.instagram.com/weareplanet.a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1 text-sm text-ink hover:text-earth underline decoration-earth/35 hover:decoration-earth transition-colors"
            >
              <span>@weareplanet.a on Instagram</span>
              <ArrowUpRight size={14} className="text-earth/75" />
            </a>
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="space-y-4 pt-10 border-t border-canvas-subtle">
          <h2 className="text-sm text-ink-muted font-sans font-medium tracking-[0.02em]">
            Selected Posts
          </h2>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
            {gridImages.map((src, idx) => (
              <a
                key={src}
                href="https://www.instagram.com/weareplanet.a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/4] overflow-hidden rounded-lg border border-border bg-canvas-subtle/30 shadow-xs"
              >
                <img
                  src={src}
                  alt={`planet.a post ${idx + 1}`}
                  loading="lazy"
                  decoding="async"
                  className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-[1.03]"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors duration-300 flex items-center justify-center">
                  <ArrowUpRight size={18} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};
