import React, { useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HandDrawnBullet, HandDrawnUnderline } from '../components/ui/HandDrawn';
import journalismData from '../data/journalism.json';

interface JournalismItem {
  title: string;
  outlet?: string;
  url: string;
}

export const Journalism: React.FC = () => {
  useEffect(() => {
    document.title = 'journalism — teodosia dobriyanova';
  }, []);

  const renderList = (items: JournalismItem[]) => (
    <ul className="space-y-1 max-w-4xl">
      {items.map((item, idx) => (
        <li key={item.title} className="flex items-start gap-3 leading-snug">
          <HandDrawnBullet variant={idx} className="mt-[0.42rem]" />
          <div className="text-[15px]">
            <a
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-ink hover:text-earth hover:underline decoration-earth/45"
            >
              {item.title}
            </a>
            {item.outlet && (
              <span className="italic text-ink-muted">, {item.outlet}</span>
            )}
          </div>
        </li>
      ))}
    </ul>
  );

  return (
    <PageWrapper>
      <h1 className="sr-only">journalism</h1>

      <section className="space-y-3.5">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={0}>video journalism</HandDrawnUnderline>
        </h2>
        {renderList(journalismData.videoReports)}
      </section>

      <section className="space-y-3.5 pt-2">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={3}>written features</HandDrawnUnderline>
        </h2>
        {renderList(journalismData.writtenArticles)}
      </section>
    </PageWrapper>
  );
};
