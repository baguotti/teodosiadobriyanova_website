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
    <div className="fade-in max-w-4xl mx-auto px-6 sm:px-10 py-6 sm:py-10 min-h-[65vh]">
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
