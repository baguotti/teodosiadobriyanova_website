import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight } from 'lucide-react';

export const Planeta: React.FC = () => {
  const gridImages = Array.from({ length: 12 }, (_, i) => `/assets/planeta/grid_${i + 1}.jpg`);

  return (
    <PageWrapper
      subtitle="Climate Communication & Activism"
      title="planet.a"
    >
      <div className="space-y-12">
        <section className="space-y-6 max-w-3xl">
          <div className="space-y-6">
            <p className="font-serif text-xl sm:text-2xl text-[#2B2927] leading-relaxed font-normal">
              I am the founder of <span className="italic">planet.a</span> &mdash; an online community dedicated to communicating the climate crisis in a simple and accessible way to Bulgarian audiences.
            </p>
            <p className="text-base text-[#75716B] font-light leading-relaxed">
              We are currently running a campaign in collaboration with Greenpeace Bulgaria which aims to ban the advertisement of fossil fuels within the EU.
            </p>
          </div>

          <div className="pt-2">
            <a
              href="https://www.instagram.com/weareplanet.a/"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center text-xs uppercase tracking-[0.18em] text-[#2B2927] hover:text-[#A88B68] transition-colors group"
            >
              <span>Follow @weareplanet.a on Instagram</span>
              <ArrowUpRight size={15} className="ml-1.5 text-[#A88B68] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </div>
        </section>

        {/* Instagram Grid */}
        <section className="space-y-4 pt-8 border-t border-[#F0ECE1]">
          <div className="flex items-center justify-between">
            <h3 className="text-xs uppercase tracking-[0.2em] text-[#A88B68] font-normal">
              Instagram Feed (@weareplanet.a)
            </h3>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-1.5 sm:gap-2">
            {gridImages.map((src, idx) => (
              <a
                key={idx}
                href="https://www.instagram.com/weareplanet.a/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative block aspect-[3/4] overflow-hidden rounded-lg border border-[#E8E3D9] bg-[#F0ECE1]/30 shadow-xs"
              >
                <img
                  src={src}
                  alt={`planet.a post ${idx + 1}`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300 flex items-center justify-center">
                  <ArrowUpRight size={20} className="text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                </div>
              </a>
            ))}
          </div>
        </section>
      </div>
    </PageWrapper>
  );
};

