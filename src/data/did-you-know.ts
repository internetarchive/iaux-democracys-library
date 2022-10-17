export type Factoid = {
  details: string;
  cardTitle: string;
  link: string;
  linkText: string;
  donateCard?: boolean | undefined;
};

export const didYouKnow: Factoid[] = [
  {
    cardTitle: 'About this page',
    details:
      "Over 50 government organizations have had more than 2000 collections archived by Internet Archive's Archive-it service since 2006.",
    link: 'http://blog.archive.org/2022/09/06/building-democracys-library-celebrate-with-the-internet-archive-on-october-19/',
    linkText: "Learn more about Democracy's Library",
  },
  {
    cardTitle: 'About this page',
    details:
      "This is just the beginning. Democracy's Library will continue to grow and be updated over time. We'll be adding more information from all over the world, along with useful tools to help find and access what you need.",
    link: 'http://blog.archive.org/2022/09/06/building-democracys-library-celebrate-with-the-internet-archive-on-october-19/',
    linkText: "Learn more about Democracy's Library",
    donateCard: true,
  },
];
