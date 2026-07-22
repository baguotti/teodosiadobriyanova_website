import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const sections = [
    {
      title: 'Directing',
      subtitle: 'Hybrid Documentaries & Interactive Work',
      link: '/directing',
    },
    {
      title: 'Film Programming',
      subtitle: 'Barbican & Festival Curatorial Work',
      link: '/film-programming',
    },
    {
      title: 'Journalism',
      subtitle: 'Video Reporting & Features',
      link: '/journalism',
    },
    /*
    {
      title: 'Producing & planet.a',
      subtitle: 'Independent Non-Fiction & Visual Hub',
      link: '/producing',
    }
    */
  ];

  return (
    <PageWrapper>
      {/* Hero Section: Side-by-Side Portrait & Bio */}
      <section className="grid grid-cols-1 md:grid-cols-12 gap-8 lg:gap-12 items-center py-4 sm:py-10">
        
        {/* Portrait Image Column */}
        <div className="md:col-span-4 flex justify-start">
          <div className="w-44 h-56 sm:w-52 sm:h-64 lg:w-60 lg:h-72 rounded-xl overflow-hidden border border-[#F0ECE1] bg-[#F0ECE1]/30 shadow-xs">
            <img 
              src="/assets/portrait.jpg" 
              alt="Teodosia Dobriyanova" 
              className="w-full h-full object-cover object-[50%_18%]"
            />
          </div>
        </div>

        {/* Bio & Intro Text Column */}
        <div className="md:col-span-8 space-y-6">
          <div className="text-xs uppercase tracking-[0.2em] text-[#A88B68] font-normal">
            Filmmaker & Curator &bull; London & Sofia
          </div>

          <h1 className=" text-xl sm:text-2xl lg:text-4xl text-[#2B2927] font-normal leading-[1.2]">
            Filmmaker, curator, and video journalist based between London and Sofia.
          </h1>

          <div className="pt-2 flex items-center space-x-6 text-xs uppercase tracking-widest text-[#75716B]">
            <a 
              href="mailto:tdobriyanova@gmail.com" 
              className="text-[#2B2927] hover:text-[#A88B68] transition-colors border-b border-[#A88B68]/30 pb-0.5"
            >
              Get in touch
            </a>
          </div>
        </div>
      </section>

      {/* Clean Editorial Practice List */}
      <section className="space-y-8 pt-8 border-t border-[#F0ECE1]">
        <div className="text-xs uppercase tracking-[0.2em] text-[#A88B68] font-normal">
          Selected Practice
        </div>

        <div className="divide-y divide-[#F0ECE1]">
          {sections.map((item, idx) => (
            <Link
              key={idx}
              to={item.link}
              className="group py-5 flex flex-row items-center justify-between gap-4 transition-opacity duration-300 hover:opacity-75"
            >
              <div>
                <h2 className="text-xl sm:text-2xl text-[#2B2927] group-hover:text-[#A88B68] transition-colors">
                  {item.title}
                </h2>
                <span className="text-xs text-[#A88B68] font-light tracking-wide block mt-0.5">
                  {item.subtitle}
                </span>
              </div>

              <div className="text-xs uppercase tracking-widest text-[#2B2927] flex items-center shrink-0">
                <span>View &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};
