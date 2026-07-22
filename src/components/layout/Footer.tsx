import React from 'react';
import { ArrowUpRight } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-[#F9F7F2] mt-20 pb-12 pt-10 px-6 sm:px-10 text-[#2B2927]">
      <div className="max-w-5xl mx-auto border-t border-[#F0ECE1] pt-8 flex flex-col md:flex-row justify-between items-start md:items-center gap-6 text-xs text-[#75716B] font-light">
        
        {/* Left */}
        <div className="space-y-1">
          <div className="font-serif text-lg text-[#2B2927] font-normal">
            Teodosia Dobriyanova
          </div>
          <div>London &bull; Sofia</div>
        </div>

        {/* Center / Email */}
        <div>
          <a 
            href="mailto:tdobriyanova@gmail.com" 
            className="text-[#2B2927] hover:text-[#A88B68] transition-colors border-b border-[#A88B68]/30 pb-0.5"
          >
            tdobriyanova@gmail.com
          </a>
        </div>

        {/* Right / External Links */}
        <div className="flex items-center space-x-6 text-[11px] uppercase tracking-widest">
          <a 
            href="https://www.instagram.com/teodosiadob/" 
            target="_blank" 
            rel="noopener noreferrer" 
            className="hover:text-[#2B2927] transition-colors inline-flex items-center"
          >
            Instagram <ArrowUpRight size={12} className="ml-0.5" />
          </a>
        </div>

      </div>
    </footer>
  );
};

