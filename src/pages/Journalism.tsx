import React, { useEffect } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { HandDrawnBullet, HandDrawnUnderline } from '../components/ui/HandDrawn';

interface JournalismItem {
  title: string;
  outlet: string;
  url: string;
}

export const Journalism: React.FC = () => {
  useEffect(() => {
    document.title = 'journalism — teodosia dobriyanova';
  }, []);

  const videoReports: JournalismItem[] = [
    {
      title: 'From Rom-Coms to BDSM: How Cinema Re-examines Desire, Babygirl, and Pillion',
      outlet: 'Mashable',
      url: 'https://mashable.com/video/romcoms-bdsm-cinema-babygirl-pillion'
    },
    {
      title: 'Could We Turn Cities Threatened by Floods Into Sponges?',
      outlet: 'Mashable',
      url: 'https://www.youtube.com/watch?v=jUpH2BiUh6s'
    },
    {
      title: 'Why Is the World’s Newest Country Facing an Existential Threat?',
      outlet: 'Mashable',
      url: 'https://www.youtube.com/watch?v=pKJdrMFbRDs'
    },
    {
      title: 'Why Venice’s Canals Are Drying Up',
      outlet: 'Mashable',
      url: 'https://www.youtube.com/watch?v=f8kyHcczgdQ'
    },
    {
      title: 'The Sandstone School Harnessing Natural Cooling in the Thar Desert',
      outlet: 'Mashable',
      url: 'https://www.youtube.com/watch?v=RFBDMFB-eBE'
    },
    {
      title: 'В кухнята, в бара, на улицата: домашното насилие в България',
      outlet: 'Deutsche Welle',
      url: 'https://www.dw.com/bg/v-kuhnata-v-bara-na-ulicata-domasnoto-nasilie-v-blgaria/a-65730058'
    },
    {
      title: 'Why Europe is Facing Record-Breaking Heatwaves',
      outlet: 'Mashable',
      url: 'https://www.youtube.com/watch?v=44A-oa7SeFY'
    },
    {
      title: 'Solar Energy Must Be Beautiful as Well as Sustainable',
      outlet: 'Mashable',
      url: 'https://www.youtube.com/watch?v=mMgI320lGDU'
    },
    {
      title: 'Meet ECHO: The Robot Living With Antarctica’s Emperor Penguins',
      outlet: 'Mashable',
      url: 'https://www.youtube.com/watch?v=LZB8TpD8cro'
    }
  ];

  const writtenArticles: JournalismItem[] = [
    {
      title: 'World Water Day: UN Warnings & Climate Crisis Solutions',
      outlet: 'Mashable',
      url: 'https://mashable.com/article/world-water-day-un-crisis-solutions'
    },
    {
      title: 'Vegan Trends & Fried Chicken: On Jerzy Sladkowski’s Bitter Love',
      outlet: 'New East Cinema',
      url: 'https://neweastcinema.co.uk/read/vegan-trends-amp-fried-chicken-j77lr'
    },
    {
      title: 'The Ennui of Late Socialism in Binka Zhelyazkova’s The Swimming Pool',
      outlet: 'New East Cinema',
      url: 'https://neweastcinema.co.uk/read/the-ennui-of-late-socialism-in-binka-zhelyazkovas-the-swimming-pool'
    },
    {
      title: 'Binka Zhelyazkova, The Tied Up Balloon, and Socialist Realism in Bulgarian Cinema',
      outlet: 'New East Cinema',
      url: 'https://neweastcinema.co.uk/read/binka-zhelyazkova-the-tied-up-balloon-bulgarian-cinema-socialist-realism'
    },
    {
      title: 'Torrents of Truth: How Activists Use Peer-to-Peer Networks to Bypass Russian Censorship',
      outlet: 'Mashable',
      url: 'https://mashable.com/article/ukraine-russia-censorship-torrents-of-truth'
    },
    {
      title: '“Sound Can Bombard You, Music Is Manipulative”: Director Alexander Markov on Red Africa',
      outlet: 'New East Cinema',
      url: 'https://neweastcinema.co.uk/read/sound-can-bombard-you-music-is-manipulative-director-alexander-markov-on-red-africa-2022'
    },
    {
      title: 'Silent Voice: Documenting the Anti-LGBTQ Purge in Chechnya',
      outlet: 'The Calvert Journal',
      url: 'https://www.calvertjournal.com/features/show/13014/silent-voice-documentary-film-reka-valerik-chechnya-lgbtq-purge'
    },
    {
      title: 'Alina Manolache: Lost Kids on the Beach and Post-Socialist Romania',
      outlet: 'The Calvert Journal',
      url: 'https://www.calvertjournal.com/features/show/12781/alina-manolache-lost-kids-on-the-beach-post-socialist-90s-romania-generation-documentary'
    }
  ];

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
            <span className="italic text-ink-muted">, {item.outlet}</span>
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
        {renderList(videoReports)}
      </section>

      <section className="space-y-3.5 pt-2">
        <h2 className="text-sm font-normal text-ink lowercase">
          <HandDrawnUnderline size="sm" variant={3}>written features</HandDrawnUnderline>
        </h2>
        {renderList(writtenArticles)}
      </section>
    </PageWrapper>
  );
};
