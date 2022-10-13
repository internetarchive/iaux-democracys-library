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
    title: 'TROPICA ROADSTER CRASH REPORT',
    collectionTitle: `National Transportation Library`,
    id: 'finalreportofren00look',
    blurb:
      'What happens when you crash a Tropica Roadster straight into a barrier at 47kph? Find out in this report from the Vehicle Research and Test Center.',
    link: 'https://archive.org/details/nationaltransportationlibrary',
    image: 'https://archive.org/services/img/finalreportofren00look',
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
      "From this guide from Agriculture Canada—'Actually there is only one test to find out whether a mushroom or any other plant is poisonous and that is to eat it. If it makes you sick or kills you it is poisonous...' ",
    link: 'https://archive.org/details/canadianagriculturallibrary',
    image: 'https://archive.org/services/img/ediblepoisonousm00grov',
  },
];
