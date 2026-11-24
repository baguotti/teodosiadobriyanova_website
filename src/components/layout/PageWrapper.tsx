import React, { useEffect } from 'react';

interface PageWrapperProps {
  children: React.ReactNode;
  title?: string;
}

const SITE_TITLE = 'Teodosia Dobriyanova — Filmmaker, Curator & Video Journalist';

export const PageWrapper: React.FC<PageWrapperProps> = ({ children, title }) => {
  useEffect(() => {
    document.title = title ? `${title} — Teodosia Dobriyanova` : SITE_TITLE;
  }, [title]);

  return (
    <div className="w-full max-w-[1440px] mx-auto px-5 sm:px-8 pt-4 sm:pt-6 pb-16 sm:pb-24 min-h-[65vh]">
      {title && (
        <header className="mb-10 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl text-ink font-normal leading-tight">
            {title}
          </h1>
        </header>
      )}
      <main className="space-y-12">
        {children}
      </main>
    </div>
  );
};
