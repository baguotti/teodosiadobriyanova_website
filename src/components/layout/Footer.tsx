import React from 'react';
import { ArrowUpRight } from '../ui/Icons';

export const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-canvas mt-20 pb-12 pt-8 px-6 sm:px-10 text-ink">
      <div className="max-w-4xl mx-auto border-t border-canvas-subtle pt-8 flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 text-sm text-ink-muted">
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-1">
          <span className="font-serif text-base text-ink">Teodosia Dobriyanova</span>
          <span className="text-ink-muted/70">London & Sofia</span>
        </div>

        <div className="flex flex-wrap items-center gap-x-6 gap-y-2">
          <a
            href="mailto:tdobriyanova@gmail.com"
            className="text-ink hover:text-earth underline decoration-earth/35 hover:decoration-earth transition-colors"
          >
            tdobriyanova@gmail.com
          </a>

          <a
            href="https://www.instagram.com/teodosiadob/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-ink transition-colors inline-flex items-center gap-0.5"
          >
            Instagram <ArrowUpRight size={14} className="opacity-70" />
          </a>
        </div>
      </div>
    </footer>
  );
};
