/**
 * Destinations data for Wanderlust Travel website
 * Contains information about various destinations including image paths
 */

const destinations = [
  {
    id: 1,
    name: 'Santorini, Greece',
    description: 'Known for its stunning white-washed buildings, blue domes, and breathtaking sunsets over the Aegean Sea.',
    image: '/assets/images/destinations/santorini.jpg',
    region: 'Europe',
    popular: true,
    activities: ['Island Exploration', 'Beach Relaxation', 'Wine Tasting', 'Boat Tours']
  },
  {
    id: 2,
    name: 'Bali, Indonesia',
    description: 'A tropical paradise featuring lush rice terraces, ancient temples, and vibrant cultural experiences.',
    image: '/assets/images/destinations/bali.jpg',
    region: 'Asia',
    popular: true,
    activities: ['Surfing', 'Temple Visits', 'Spa Retreats', 'Rice Terrace Hiking']
  },
  {
    id: 3,
    name: 'Machu Picchu, Peru',
    description: 'The ancient Incan citadel set high in the Andes Mountains, offering spectacular views and rich history.',
    image: '/assets/images/destinations/machu-picchu.jpg',
    region: 'South America',
    popular: true,
    activities: ['Archaeological Tours', 'Inca Trail Hiking', 'Cultural Experiences', 'Photography']
  },
  {
    id: 4,
    name: 'Kyoto, Japan',
    description: 'Japan\'s cultural capital with over 1,600 Buddhist temples, beautiful gardens, and traditional geisha districts.',
    image: '/assets/images/destinations/kyoto.jpg',
    region: 'Asia',
    popular: false,
    activities: ['Temple Visits', 'Traditional Tea Ceremonies', 'Garden Tours', 'Kimono Experiences']
  },
  {
    id: 5,
    name: 'Serengeti National Park, Tanzania',
    description: 'Home to the spectacular annual wildebeest migration and an incredible diversity of wildlife.',
    image: '/assets/images/destinations/serengeti.jpg',
    region: 'Africa',
    popular: true,
    activities: ['Safari Game Drives', 'Hot Air Balloon Tours', 'Bird Watching', 'Cultural Village Visits']
  },
  {
    id: 6,
    name: 'Amalfi Coast, Italy',
    description: 'A stunning coastline with cliffside villages, terraced vineyards, and spectacular Mediterranean views.',
    image: '/assets/images/destinations/amalfi-coast.jpg',
    region: 'Europe',
    popular: true,
    activities: ['Coastal Drives', 'Boat Excursions', 'Local Cuisine Sampling', 'Beach Relaxation']
  },
  {
    id: 7,
    name: 'Great Barrier Reef, Australia',
    description: 'The world\'s largest coral reef system, offering incredible marine diversity and underwater experiences.',
    image: '/assets/images/destinations/great-barrier-reef.jpg',
    region: 'Oceania',
    popular: true,
    activities: ['Scuba Diving', 'Snorkeling', 'Glass-Bottom Boat Tours', 'Island Hopping']
  },
  {
    id: 8,
    name: 'New York City, USA',
    description: 'The iconic metropolis featuring world-famous landmarks, diverse neighborhoods, and unmatched cultural experiences.',
    image: '/assets/images/destinations/new-york.jpg',
    region: 'North America',
    popular: true,
    activities: ['Landmark Tours', 'Museum Visits', 'Broadway Shows', 'Food Tours']
  },
  {
    id: 9,
    name: 'Petra, Jordan',
    description: 'An ancient city carved into rose-colored rock faces, showcasing incredible architecture and history.',
    image: '/assets/images/destinations/petra.jpg',
    region: 'Middle East',
    popular: false,
    activities: ['Archaeological Tours', 'Desert Excursions', 'Camel Rides', 'Night Tours']
  },
  {
    id: 10,
    name: 'Queenstown, New Zealand',
    description: 'Adventure capital of the world set against the dramatic backdrop of the Southern Alps.',
    image: '/assets/images/destinations/queenstown.jpg',
    region: 'Oceania',
    popular: false,
    activities: ['Bungee Jumping', 'Skiing', 'Wine Tours', 'Scenic Flights']
  },
];

// Image placeholder paths for packages
const packageImages = {
  himalaya: '/assets/images/packages/himalaya.jpg',
  bali: '/assets/images/packages/bali.jpg',
  europe: '/assets/images/packages/europe.jpg',
  egypt: '/assets/images/packages/egypt.jpg',
  amazon: '/assets/images/packages/amazon.jpg',
  santorini: '/assets/images/packages/santorini.jpg',
};

// Image paths for hero carousel
const heroImages = [
  '/assets/images/hero/hero1.jpg',
  '/assets/images/hero/hero2.jpg',
  '/assets/images/hero/hero3.jpg',
];

// Image paths for team members
const teamImages = [
  '/assets/images/team/team1.jpg',
  '/assets/images/team/team2.jpg',
  '/assets/images/team/team3.jpg',
  '/assets/images/team/team4.jpg',
];

// About us image
const aboutImage = '/assets/images/about/about-us.jpg';

// Team culture image
const teamCultureImage = '/assets/images/about/team-culture.jpg';

// Export all image paths and destination data
export {
  destinations,
  packageImages,
  heroImages,
  teamImages,
  aboutImage,
  teamCultureImage
};

export default destinations;