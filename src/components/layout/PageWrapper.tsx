import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
  subtitle?: string;
}

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, title, subtitle }) => {
  const pageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (pageRef.current) {
      gsap.fromTo(
        pageRef.current,
        { opacity: 0, y: 6 },
        { opacity: 1, y: 0, duration: 0.5, ease: 'power2.out' }
      );
    }
  }, []);

  return (
    <div ref={pageRef} className="max-w-5xl mx-auto px-6 sm:px-10 py-4 sm:py-8 min-h-[65vh]">
      {(title || subtitle) && (
        <header className="mb-10">
          {subtitle && (
            <span className="text-[11px] uppercase tracking-[0.2em] text-[#A88B68] font-normal block mb-2">
              {subtitle}
            </span>
          )}
          {title && (
            <h1 className="text-2xl sm:text-4xl text-[#2B2927] font-normal leading-tight">
              {title}
            </h1>
          )}
        </header>
      )}
      <main className="space-y-12">
        {children}
      </main>
    </div>
  );
};
