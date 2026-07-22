import React from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight } from 'lucide-react';

export const Directing: React.FC = () => {
  const credits = [
    { role: 'Director', name: 'Teodosia Dobriyanova' },
    { role: 'Producers', name: 'Georgi Marchev, Mina Kirkova' },
    { role: 'Illustrators', name: 'Borislava Karadjova, Mihaela Karadjova' },
    { role: 'Sound Designer', name: 'Matthew Dervenkow' },
    { role: 'Web Developer', name: 'Donghe Hong' },
    { role: 'Graphic Designer', name: 'Slava Aum' },
    { role: 'Animator', name: 'Riccardo Fusetti' },
    { role: 'Project Consultant', name: 'Olga Mineva' },
    { role: 'Production Company', name: 'Story Films' }
  ];

  const stories = [
    { title: 'A Story that Liberates', author: 'Mihaela Georgieva' },
    { title: 'Good Enough', author: 'Teyah Mineva & Kalina Staneva' },
    { title: 'Moka', author: 'Anonymous & Bilyana Georgieva' },
    { title: 'Phoenix', author: 'Nora Hristova & Lilia Nova' }
  ];

  return (
    <PageWrapper 
      subtitle="Directing & Interactive Installations" 
      title="Directing"
    >
      {/* Current Projects */}
      <section className="space-y-6">
        <div className="space-y-2">
          <div className="text-xs uppercase tracking-[0.2em] text-[#A88B68] font-normal">
            In Development (currently in Post-Production)
          </div>
          <h2 className=" text-2xl text-[#2B2927]">
            Сякаш не се е случвало <span className="italic text-xl text-[#75716B]">(Like Nothing Ever Happened)</span>
          </h2>
          <div className="text-xs text-[#75716B] font-light tracking-wide">
            Short Hybrid Documentary
          </div>
        </div>

        <div className="w-full max-w-2xl">
          <div className="w-full aspect-[16/9] overflow-hidden rounded-xl border border-[#E8E3D9] shadow-sm">
            <img
              src="/assets/lneh.jpg"
              alt="Сякаш не се е случвало (Like Nothing Ever Happened)"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </section>

      {/* Past Work / Interactive Installation */}
      <section className="space-y-12 pt-12 border-t border-[#F0ECE1]">
        <div className="space-y-4">
          <div className="text-xs uppercase tracking-[0.2em] text-[#A88B68] font-normal">
            Interactive Installation &mdash; 2023
          </div>
          <h2 className=" text-2xl sm:text-2xl text-[#2B2927]">
            <a
              href="https://www.instagram.com/tova.ne.e.nasilie/"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#A88B68] transition-colors inline-flex items-baseline group"
            >
              <span>Това не е насилие</span>
              <span className="italic text-xl text-[#75716B] group-hover:text-[#A88B68] transition-colors ml-2">(This Isn’t Violence)</span>
              <ArrowUpRight size={18} className="ml-1.5 inline-block text-[#A88B68] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
            </a>
          </h2>
          <p className="text-sm text-[#75716B] font-light leading-relaxed max-w-2xl">
            An interactive web-based installation presenting four micro stories written by women who have survived domestic abuse. Funded by the National Culture Fund of Bulgaria, in collaboration with Emprove Project.
          </p>

          <div className="flex flex-wrap items-center gap-6 text-xs uppercase tracking-widest pt-2">
            <a
              href="https://www.instagram.com/tova.ne.e.nasilie/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#2B2927] hover:text-[#A88B68] transition-colors border-b border-[#A88B68]/30 pb-0.5 inline-flex items-center"
            >
              @tova.ne.e.nasilie <ArrowUpRight size={13} className="ml-1" />
            </a>
            <a
              href="https://www.dw.com/bg/v-kuhnata-v-bara-na-ulicata-domasnoto-nasilie-v-blgaria/a-65730058"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#75716B] hover:text-[#2B2927] transition-colors inline-flex items-center"
            >
              DW Interview <ArrowUpRight size={13} className="ml-1" />
            </a>
          </div>
        </div>

        {/* Stories List */}
        <div className="space-y-4 pt-4">
          <div className="text-xs uppercase tracking-[0.18em] text-[#75716B] font-normal">
            Micro-Stories
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {stories.map((s, idx) => (
              <div key={idx} className="space-y-1">
                <div className=" text-lg text-[#2B2927]">{s.title}</div>
                <div className="text-xs text-[#75716B] font-light">{s.author}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Credits */}
        <div className="space-y-4 pt-6 border-t border-[#F0ECE1]">
          <div className="text-xs uppercase tracking-[0.18em] text-[#75716B] font-normal">
            Credits
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-light text-[#75716B]">
            {credits.map((c, idx) => (
              <div key={idx} className="space-y-0.5">
                <div className="uppercase tracking-widest text-[10px] text-[#A88B68]">{c.role}</div>
                <div className="text-[#2B2927]">{c.name}</div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageWrapper>
  );
};
