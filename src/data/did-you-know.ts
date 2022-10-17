export type Factoid = {
  details: string;
  cardTitle: string;
  link: string;
  linkText: string;
  donateCard?: boolean | undefined;
};

export const didYouKnow: Factoid[] = [
  {
    cardTitle: 'ABOUT THIS PROJECT',
    details:
      "Democracy's Library brings together more than 700 collections from over 50 government organizations, archived by the Internet Archive since 2006. With more than half a million documents (and counting) from local, regional, and national governments, we're just getting started!",
    link: 'http://blog.archive.org/2022/09/06/building-democracys-library-celebrate-with-the-internet-archive-on-october-19/',
    linkText: 'Learn more',
  },
  {
    cardTitle: "WHAT'S NEXT?",
    details:
      "This is just the beginning. Democracy's Library will continue to grow and be updated over time. We'll be adding more information from all over the world, along with useful tools to help find and access what you need. You can help us grow by making a contribution today!",
    link: 'https://archive.org/donate/?origin=iawww-democlibrycllctn',
    linkText: 'DONATE',
    donateCard: true,
  },
];
