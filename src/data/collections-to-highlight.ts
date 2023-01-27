export type card = {
  title: string;
  collectionTitle: string;
  id: string;
  blurb: string;
  image: string;
  link: string;
};

export const collectionsToHighlight: card[] = [
  {
    title: 'JAN 6th COMMITTEE DOCS',
    collectionTitle: `Jan 6th Committee Docs`,
    id: 'report-final-report-jan-6-select-committee',
    blurb:
      'The United States House Select Committee to Investigate the January 6th Attack on the United States Capitol (the January 6th Committee) is a bipartisan select committee of the U.S. House of Representatives established to investigate the U.S. Capitol attack.',
    link: 'https://archive.org/details/jan-6th-committee-docs',
    image:
      'https://archive.org/services/img/report-final-report-jan-6-select-committee',
  },
  {
    title: 'EXCAVATION OF HUMMINGBIRD SHELTER',
    collectionTitle: `Bureau of Land Management Library`,
    id: 'excavationofhumm00conn',
    blurb:
      "The Bureau of Land Management's report on the excavation of Hummingbird Shelter, part of the White River Resource Area in Colorado, United States.",
    link: 'https://archive.org/details/blmlibrary',
    image: 'https://archive.org/services/img/excavationofhumm00conn',
  },
  {
    title: 'ORGANIZED CRIME ON WALL STREET',
    collectionTitle: `U.S. Congressional Hearings`,
    id: 'gov.gpo.fdsys.CHRG-106hhrg67115',
    blurb:
      "The Committee on Commerce's hearing on the topic of organized crime on Wall Street. Part of the 106th Congress' second session, this hearing took place September 13, 2000.",
    link: 'https://archive.org/details/us_house_hearings',
    image: 'https://archive.org/services/img/gov.gpo.fdsys.CHRG-106hhrg67115',
  },
  {
    title: 'WEATHER MODIFICATION IN ALBERTA',
    collectionTitle: `Government of Alberta Publications`,
    id: 'potentialforweat00advi',
    blurb:
      'Report to the Minister of Agriculture, Government of Alberta from the Advisory Committee on Weather Modification',
    link: 'https://archive.org/details/albertagovernmentpublications',
    image: 'https://archive.org/services/img/potentialforweat00advi',
  },
  {
    title: 'EDIBLE & POISONOUS MUSHROOMS OF CANADA',
    collectionTitle: `Agriculture and Agri-Food Canada Library`,
    id: 'ediblepoisonousm00grov',
    blurb:
      'From the guide: "Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous."',
    link: 'https://archive.org/details/canadianagriculturallibrary',
    image: 'https://archive.org/services/img/ediblepoisonousm00grov',
  },
];
