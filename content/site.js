/*
  COOL BOX WEBSITE CONTENT

  This is the main file for routine text and image updates.
  Editing values here does not change the page layout.

  Image paths point to files inside /public.
  Example: /images/box-padel.png
*/

export const siteContent = {
  navigation: [
    { label: 'What is Cool Box?', href: '#what' },
    { label: 'Why Cool Box?', href: '#why' },
    { label: 'Where It Works', href: '#environments' },
    { label: 'Advertising Offer', href: '#offer' },
  ],

  hero: {
    kicker: 'AN INNOVATIVE MARKETING & ENGAGEMENT CONCEPT',
    titleStart: 'Smart advertising',
    titleEmphasisLine1: 'that moves with',
    titleEmphasisLine2: 'your audience.',
    description:
      'Cool Box delivers a fresh approach to connecting with consumers — combining hydration, redeemable offers and smart advertising in one physical experience.',
    images: {
      product: '/images/box-bottle.png',
      droplets: '/images/droplets.png',
      ice: '/images/ice-cubes.png',
      coupons: [
        '/images/coupon-1.png',
        '/images/coupon-2.png',
        '/images/coupon-3.png',
        '/images/coupon-4.png',
      ],
    },
  },

  heroHighlights: [
    {
      number: '01',
      title: 'HYDRATION',
      description: 'Essential water for active participants',
    },
    {
      number: '02',
      title: 'SAVINGS',
      description: '8 redeemable offers from multiple brands',
    },
    {
      number: '03',
      title: 'SMART ADVERTISING',
      description: 'Measurable engagement and real results',
    },
  ],

  reasons: [
    {
      title: '100% Hand-to-Hand Distribution',
      description: 'Every box reaches an engaged attendee who will use it.',
    },
    {
      title: 'No Wasted Impressions',
      description: 'Unlike flyers or banners, every unit drives measurable action.',
    },
    {
      title: 'High-Value Active Audience',
      description: 'Target participants who are already engaged and motivated.',
    },
    {
      title: 'Offers That Get Redeemed',
      description: 'Detachable vouchers drive actual store visits and conversions.',
    },
    {
      title: 'Utility That Drives Brand Recall',
      description: "People don't throw it away. They use it.",
    },
  ],

  environments: [
    { title: 'Corporate Events', description: 'Conferences and business gatherings.' },
    { title: 'Universities', description: 'Campus events and student activities.' },
    { title: 'Festivals', description: 'Cultural and music celebrations.' },
    { title: 'Tournaments', description: 'Sports competitions and championships.' },
    { title: 'Exhibitions', description: 'Trade shows and industry events.' },
  ],

  activeCommunities: {
    kicker: 'WE STARTED WHERE ENERGY IS HIGH',
    title: 'Built to engage',
    titleEmphasis: 'active communities.',
    description:
      'Cool Box began in environments where hydration is essential and engagement is natural. The concept is designed to scale wherever people gather and brands want meaningful presence.',
    image: '/images/box-padel.png',
    imageAlt: 'Cool Box displayed beside a padel court',
    imageLabel: 'IN THE REAL WORLD',
    imageCaption: 'Right where the audience is.',
    items: [
      {
        title: 'Padel Courts',
        description: 'Where hydration is essential and engagement is natural.',
      },
      {
        title: 'Sports Complexes',
        description: 'Active communities seeking quality experiences.',
      },
      {
        title: 'Active Communities',
        description: 'Engaged participants ready to redeem offers.',
      },
    ],
  },

  advertisingOffer: {
    adSpace: '6 × 10 cm',
    adSpaceDescription: 'Dedicated removable voucher panel',
    details: [
      { value: '4,000', label: 'boxes distributed per campaign' },
      { value: '8', label: 'coupon ads per box' },
      { value: '4', label: 'faces available for strip ad banners' },
      { value: '2', label: 'strip banners — top & bottom' },
    ],
    idealFor:
      'restaurants, cafés, sports stores and lifestyle venues aiming to boost visits.',
  },

  contact: {
    phoneDisplay: '+961 3 152 071',
    phoneLink: '009613152071',
    email: 'wael@sparxme.com',
    instagram: 'https://www.instagram.com/cool_box.official/',
    sparxLogo: '/images/sparx-logo.png',
  },
}
