import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { Link } from 'react-router-dom';

export const Home: React.FC = () => {
  const sections = [
    {
      title: 'Directing',
      subtitle: 'Hybrid Documentaries & Interactive Work',
      description: 'Short film projects including "Like Nothing Ever Happened" and the interactive installation "This Isn’t Violence".',
      link: '/directing',
    },
    {
      title: 'Film Programming',
      subtitle: 'Barbican & Festival Curatorial Work',
      description: 'Curating retrospective film seasons and Eastern European cinema series for Barbican Centre and international festivals.',
      link: '/film-programming',
    },
    {
      title: 'Journalism',
      subtitle: 'Video Reporting & Features',
      description: 'In-depth reporting and documentary features published across international outlets including Deutsche Welle.',
      link: '/journalism',
    },
    {
      title: 'Producing & planet.a',
      subtitle: 'Independent Non-Fiction & Visual Hub',
      description: 'Co-producing non-fiction projects and creative visual storytelling built on collaborative filmmaking.',
      link: '/producing',
    }
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

          <h1 className="font-serif text-3xl sm:text-4xl lg:text-5xl text-[#2B2927] font-normal leading-[1.2]">
            Filmmaker, curator, and video journalist based between <span className="italic font-serif text-[#A88B68]">London</span> and <span className="italic font-serif text-[#A88B68]">Sofia</span>.
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
              className="group py-6 flex flex-col md:flex-row md:items-baseline justify-between gap-4 transition-opacity duration-300 hover:opacity-75"
            >
              <div className="md:w-1/3">
                <h2 className="font-serif text-2xl sm:text-3xl text-[#2B2927] group-hover:text-[#A88B68] transition-colors">
                  {item.title}
                </h2>
                <span className="text-xs text-[#A88B68] font-light tracking-wide block mt-1">
                  {item.subtitle}
                </span>
              </div>

              <div className="md:w-1/2">
                <p className="text-sm text-[#75716B] font-light leading-relaxed">
                  {item.description}
                </p>
              </div>

              <div className="md:w-auto text-xs uppercase tracking-widest text-[#2B2927] flex items-center pt-2 md:pt-0">
                <span>View &rarr;</span>
              </div>
            </Link>
          ))}
        </div>
      </section>
    </PageWrapper>
  );
};
