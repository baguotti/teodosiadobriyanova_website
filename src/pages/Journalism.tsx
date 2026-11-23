import React, { useState } from 'react';
import { PageWrapper } from '../components/layout/PageWrapper';
import { ArrowUpRight, ChevronDown } from '../components/ui/Icons';

export const Journalism: React.FC = () => {
  const [expandedVideos, setExpandedVideos] = useState<Record<number, boolean>>({});
  const [expandedArticles, setExpandedArticles] = useState<Record<number, boolean>>({});

  const toggleVideo = (idx: number) => {
    setExpandedVideos((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const toggleArticle = (idx: number) => {
    setExpandedArticles((prev) => ({ ...prev, [idx]: !prev[idx] }));
  };

  const videoReports = [
    {
      title: 'From Rom-Coms to BDSM: How Cinema Re-examines Desire, Babygirl, and Pillion',
      outlet: 'Mashable',
      date: '2024',
      paragraphs: [
        'BDSM and cinema share a long history – so long that coded examples of Dom/sub dynamics on screen can be traced all the way back to silent film. But it was only in the 2000s that BDSM movies managed to become mainstream enough so that we can have films like Babygirl and Pillion. So, how did kink become so popular? And is more representation necessarily a good thing?',
        'Mashable spoke to Liam Wignall, senior lecturer in Psychology at the University of Brighton and editor of The Power of BDSM, and screenwriter Caitlin Parrish (G20, Supergirl) to find out.'
      ],
      youtubeUrl: 'https://mashable.com/video/romcoms-bdsm-cinema-babygirl-pillion'
    },
    {
      title: 'Could We Turn Cities Threatened by Floods Into Sponges?',
      outlet: 'Mashable',
      date: '2023',
      paragraphs: [
        'What if bringing nature back to our gray cities could help us contain urban flooding? When architect Kongjian Yu first pitched this concept, he was celebrated in the West, but ignored in his native China—until a devastating flood in 2012 hit Beijing and forced policymakers to give his green idea a chance.',
        'Today, the so-called sponge cities have revolutionised landscape architecture in China and serve as inspiration to architects globally. In this Mashable Original, we explore the genesis of Kongjian Yu\'s sponge cities, their global application, and how efficient sponge cities are in the face of climate change.'
      ],
      youtubeUrl: 'https://www.youtube.com/watch?v=jUpH2BiUh6s'
    },
    {
      title: 'Why Is the World’s Newest Country Facing an Existential Threat?',
      outlet: 'Mashable',
      date: '2023',
      paragraphs: [
        'South Sudan, the world\'s newest country, has been grappling with extreme weather events for almost half of its independent history.',
        'Devastating floods in South Sudan have displaced millions of people, subsequently worsening the country’s ongoing conflict and food security crisis. The U.N. estimates that around two-thirds of South Sudan’s population of 10 million will not have enough to eat during the lean season.',
        'To find out about the crisis first-hand and the severe impact climate change is having on the country, Mashable spoke to Wendy Ahonda, a young climate activist from South Sudan, who has been campaigning with UNICEF for the past few years. In the aftermath of the floods in October 2022, she traveled to flood-struck areas to gather information about the needs and problems of those most affected by the crisis.'
      ],
      youtubeUrl: 'https://www.youtube.com/watch?v=pKJdrMFbRDs'
    },
    {
      title: 'Why Europe is Facing Record-Breaking Heatwaves',
      outlet: 'Mashable',
      date: '2022',
      paragraphs: [
        'While July 2021 was marked by devastating floods across Europe, this summer the continent is enduring a record-breaking heatwave. Many European regions have reached all-time high temperatures, resulting in the spread of wildfires. This includes the UK, where temperatures reached 40.2°C for the first time in history.',
        'To make sense of it all, we spoke to Len Shaffrey, professor of climate science at the University of Reading, who talked us through the heatwave\'s timeline and explained why Europe has been warming faster than most of the world.'
      ],
      youtubeUrl: 'https://www.youtube.com/watch?v=44A-oa7SeFY'
    },
    {
      title: 'Why Venice’s Canals Are Drying Up',
      outlet: 'Mashable',
      date: '2023',
      paragraphs: [
        'Can you imagine Venice without its iconic waters? After a winter of low snow and rainfall, a record low level tide of -62 centimetres above mean sea level has emptied some of the ancient city\'s 150 canals. This has stranded boats and gondolas and complicated emergency and essential services.',
        'Last summer, Northern Italy announced a state of emergency after the region\'s rivers and lakes faced the most severe droughts in over 70 years.'
      ],
      youtubeUrl: 'https://www.youtube.com/watch?v=f8kyHcczgdQ'
    },
    {
      title: 'The Sandstone School Harnessing Natural Cooling in the Thar Desert',
      outlet: 'Mashable',
      date: '2023',
      paragraphs: [
        'An oval building made of sandstone stands amid the Thar desert near the city of Jaisalmer, India. The Rajkumari Ratnavati Girl’s School blends so well with the landscape that it almost seems to be emerging from the dunes. This, of course, is by design.',
        'Renowned architect Diana Kellogg and her New York-based studio ensured that they honor the local cultural and building traditions, while also introducing modern elements to the school. Almost entirely, the studio worked with locally sourced materials and incorporated traditional building practices. Ancient rain harvesting techniques ensure the water supply in the building, while electricity is sourced entirely from solar power. The school relies on natural cooling, which Kellogg says has significantly reduced temperatures in the building.',
        'To her, female empowerment through education and play stands at the centre of her practice. Those values informed her work on all levels, from researching and applying the symbolism of the elliptical shape, to the incorporation of jali walls and modesty screens where the girls can play.'
      ],
      youtubeUrl: 'https://www.youtube.com/watch?v=RFBDMFB-eBE'
    },
    {
      title: 'Solar Energy Must Be Beautiful as Well as Sustainable',
      outlet: 'Mashable',
      date: '2022',
      paragraphs: [
        'In the race to catch up with renewable energy, the question of aesthetics is rarely on the table. Considering our growing need for energy independence away from fossil fuels, this is somewhat understandable. Yet, many individuals and entire regions are refusing to make the leap to renewable energy exactly because of the way solar panels and wind turbines look. In the city of Amsterdam, whose historic centre is a protected conservation area, solar panels ruin the traditional landscape and are therefore not permitted.',
        'Dutch designer Marjan van Aubel is working on ways to change that—not by challenging policy, but by disrupting our preconceived ideas of what solar panels should and could look like. One stunning example are the colourful solar panel skylights her studio designed for the Netherlands Pavilion at Dubai Expo 2020.',
        'In this video, she talks to Mashable about the importance of creating technology in symbiosis with our environments, why the solar energy of the future needs to be beautiful as well as sustainable, and how she\'s already achieving this.'
      ],
      youtubeUrl: 'https://www.youtube.com/watch?v=mMgI320lGDU'
    },
    {
      title: 'Meet ECHO: The Robot Living With Antarctica’s Emperor Penguins',
      outlet: 'Mashable',
      date: '2022',
      paragraphs: [
        'ECHO is a small yellow robot currently living with a colony of emperor penguins in Antarctica. The robot is part of a project by Woods Hole Oceanographic Institution studying climate change\'s impact on the South Pole\'s most iconic inhabitants.',
        'Physicist Daniel Zitterbart, who has been working alongside ecologist Céline Le Bohec, tells us about how ECHO works, what the project is trying to achieve, and his hopes for the future.'
      ],
      youtubeUrl: 'https://www.youtube.com/watch?v=LZB8TpD8cro'
    },
    {
      title: 'В кухнята, в бара, на улицата: домашното насилие в България',
      outlet: 'Deutsche Welle',
      date: '2023',
      paragraphs: [
        'An in-depth investigation into domestic violence in Bulgaria, examining structural protection, social stigma, and survivor testimonies in public and private spaces.'
      ],
      youtubeUrl: 'https://www.dw.com/bg/v-kuhnata-v-bara-na-ulicata-domasnoto-nasilie-v-blgaria/a-65730058'
    }
  ];

  const writtenArticles = [
    {
      title: 'World Water Day: UN Warnings & Climate Crisis Solutions',
      outlet: 'Mashable',
      date: '2023',
      description: 'Reporting on global water security, systemic depletion of freshwater reserves, and sustainable climate adaptation strategies highlighted by the United Nations.',
      articleUrl: 'https://mashable.com/article/world-water-day-un-crisis-solutions'
    },
    {
      title: 'Vegan Trends & Fried Chicken: On Jerzy Sladkowski’s Bitter Love',
      outlet: 'New East Cinema',
      date: '2023',
      description: 'There is a point in summer, somewhere between August and September, where time is experienced differently and life is elevated to a metaphor. A review and reflection on Jerzy Sladkowski’s Bitter Love, following a group of holidaymakers boarding a cruise ship across the river Volga.',
      articleUrl: 'https://neweastcinema.co.uk/read/vegan-trends-amp-fried-chicken-j77lr'
    },
    {
      title: 'The Ennui of Late Socialism in Binka Zhelyazkova’s The Swimming Pool',
      outlet: 'New East Cinema',
      date: '2023',
      description: 'Critical exploration of disillusionment, youth angst, and moral compromise in Binka Zhelyazkova’s post-war classic The Swimming Pool (1977).',
      articleUrl: 'https://neweastcinema.co.uk/read/the-ennui-of-late-socialism-in-binka-zhelyazkovas-the-swimming-pool'
    },
    {
      title: 'Binka Zhelyazkova, The Tied Up Balloon, and Socialist Realism in Bulgarian Cinema',
      outlet: 'New East Cinema',
      date: '2023',
      description: 'An analysis of Binka Zhelyazkova’s banned masterpiece The Tied Up Balloon, exploring anti-authoritarian allegories and post-war censorship in Bulgarian socialist realism.',
      articleUrl: 'https://neweastcinema.co.uk/read/binka-zhelyazkova-the-tied-up-balloon-bulgarian-cinema-socialist-realism'
    },
    {
      title: 'Torrents of Truth: How Activists Use Peer-to-Peer Networks to Bypass Russian Censorship',
      outlet: 'Mashable',
      date: '2022',
      description: 'An investigation into how peer-to-peer networks and torrents are utilized to bypass state media blockades and deliver uncensored reporting on the war in Ukraine to audiences inside Russia.',
      articleUrl: 'https://mashable.com/article/ukraine-russia-censorship-torrents-of-truth'
    },
    {
      title: '“Sound Can Bombard You, Music Is Manipulative”: Director Alexander Markov on Red Africa',
      outlet: 'New East Cinema',
      date: '2022',
      description: 'An interview with director Alexander Markov on archival editing, acoustic manipulation, and Soviet cinematic influence across the African continent in Red Africa.',
      articleUrl: 'https://neweastcinema.co.uk/read/sound-can-bombard-you-music-is-manipulative-director-alexander-markov-on-red-africa-2022'
    },
    {
      title: 'Silent Voice: Documenting the Anti-LGBTQ Purge in Chechnya',
      outlet: 'The Calvert Journal',
      date: '2021',
      description: 'In early 2017, reports emerged from the Chechen Republic of state-sanctioned anti-gay purges, illegal detentions, and honor killings. This feature covers the courageous filmmakers documenting survivors seeking asylum despite ongoing crackdowns.',
      articleUrl: 'https://www.calvertjournal.com/features/show/13014/silent-voice-documentary-film-reka-valerik-chechnya-lgbtq-purge'
    },
    {
      title: 'Alina Manolache: Lost Kids on the Beach and Post-Socialist Romania',
      outlet: 'The Calvert Journal',
      date: '2021',
      description: 'The smallest details have the power to evoke youthful memories once forgotten. For documentary filmmaker Alina Manolache, her childhood lives on in Radio Vacanta: a beach radio station in 1990s Romania which broadcast announcements about children lost on the beach—the haunting premise of her feature documentary, Lost Kids on The Beach.',
      articleUrl: 'https://www.calvertjournal.com/features/show/12781/alina-manolache-lost-kids-on-the-beach-post-socialist-90s-romania-generation-documentary'
    }
  ];

  return (
    <PageWrapper title="Journalism">
      {/* Video Reporting */}
      <section className="space-y-4">
        <h2 className="text-sm text-ink-muted font-sans font-medium tracking-[0.02em]">
          Video Journalism
        </h2>

        <div className="divide-y divide-canvas-subtle">
          {videoReports.map((item, idx) => {
            const isExpanded = !!expandedVideos[idx];
            return (
              <div
                key={item.title}
                className="py-3.5 px-3 -mx-3 rounded-lg hover:bg-canvas-subtle/40 transition-colors duration-150 group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-4">
                  <button
                    type="button"
                    onClick={() => toggleVideo(idx)}
                    aria-expanded={isExpanded}
                    className="flex-1 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 text-left cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
                  >
                    <div className="md:w-40 shrink-0 flex items-baseline gap-2 md:block text-sm tabular-nums">
                      <span className="text-earth">{item.outlet}</span>
                      <span aria-hidden="true" className="text-border md:hidden">&middot;</span>
                      <span className="text-xs text-ink-muted md:block">{item.date}</span>
                    </div>

                    <h3 className="flex-1 text-lg text-ink group-hover:text-earth transition-colors leading-snug">
                      {item.title}
                    </h3>
                  </button>

                  <div className="flex items-center justify-end gap-2.5 shrink-0">
                    {item.youtubeUrl && item.youtubeUrl !== '#' && (
                      <a
                        href={item.youtubeUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Watch ${item.title}`}
                        title="Watch video"
                        className="text-earth/80 hover:text-ink transition-colors p-1"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleVideo(idx)}
                      aria-expanded={isExpanded}
                      aria-label={`Toggle summary for ${item.title}`}
                      className="text-ink-muted hover:text-ink transition-colors p-1 cursor-pointer"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-earth' : ''}`}
                      />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-canvas-subtle/80 space-y-2.5 text-[15px] text-ink-muted leading-relaxed md:ml-44 pr-2 max-w-2xl">
                    {item.paragraphs.map((p, pIdx) => (
                      <p key={pIdx}>{p}</p>
                    ))}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>

      {/* Written Articles */}
      <section className="space-y-4 pt-10 border-t border-canvas-subtle">
        <h2 className="text-sm text-ink-muted font-sans font-medium tracking-[0.02em]">
          Written Features
        </h2>

        <div className="divide-y divide-canvas-subtle">
          {writtenArticles.map((article, idx) => {
            const isExpanded = !!expandedArticles[idx];
            return (
              <div
                key={article.title}
                className="py-3.5 px-3 -mx-3 rounded-lg hover:bg-canvas-subtle/40 transition-colors duration-150 group"
              >
                <div className="flex flex-col md:flex-row md:items-baseline justify-between gap-2 md:gap-4">
                  <button
                    type="button"
                    onClick={() => toggleArticle(idx)}
                    aria-expanded={isExpanded}
                    className="flex-1 flex flex-col md:flex-row md:items-baseline gap-1 md:gap-4 text-left cursor-pointer rounded-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-earth"
                  >
                    <div className="md:w-40 shrink-0 flex items-baseline gap-2 md:block text-sm tabular-nums">
                      <span className="text-earth">{article.outlet}</span>
                      <span aria-hidden="true" className="text-border md:hidden">&middot;</span>
                      <span className="text-xs text-ink-muted md:block">{article.date}</span>
                    </div>

                    <h3 className="flex-1 text-lg text-ink group-hover:text-earth transition-colors leading-snug">
                      {article.title}
                    </h3>
                  </button>

                  <div className="flex items-center justify-end gap-2.5 shrink-0">
                    {article.articleUrl && article.articleUrl !== '#' && (
                      <a
                        href={article.articleUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={`Read ${article.title}`}
                        title="Read article"
                        className="text-earth/80 hover:text-ink transition-colors p-1"
                      >
                        <ArrowUpRight size={14} />
                      </a>
                    )}
                    <button
                      type="button"
                      onClick={() => toggleArticle(idx)}
                      aria-expanded={isExpanded}
                      aria-label={`Toggle summary for ${article.title}`}
                      className="text-ink-muted hover:text-ink transition-colors p-1 cursor-pointer"
                    >
                      <ChevronDown
                        size={14}
                        className={`transition-transform duration-200 ${isExpanded ? 'rotate-180 text-earth' : ''}`}
                      />
                    </button>
                  </div>
                </div>

                {isExpanded && (
                  <div className="mt-3 pt-3 border-t border-canvas-subtle/80 text-[15px] text-ink-muted leading-relaxed md:ml-44 pr-2 max-w-2xl">
                    <p>{article.description}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </section>
    </PageWrapper>
  );
};
