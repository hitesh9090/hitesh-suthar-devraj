export interface ProjectPreviewSlide {
  label: string;
  localSrc: string;
  remoteSrc: string;
  alt: string;
  caption: string;
}

export interface ProjectItem {
  number: string;
  id: string;
  title: string;
  category: string;
  filterGroup: 'hospitality' | 'food' | 'fitness';
  liveUrl: string;
  displayDomain: string;
  location: string;
  description: string;
  verifiedFeatures: string[];
  designHighlights: {
    typography: string;
    palette: { name: string; hex: string }[];
    navigation: string;
    customerExperience: string;
    responsiveVerified: string;
  };
  previewBrowser: {
    heroEyebrow: string;
    heroHeadline: string;
    heroSubtext: string;
    primaryCtaText: string;
    secondaryCtaText: string;
    accentHex: string;
    surfaceHex: string;
    textHex: string;
    badgeText: string;
  };
  slides: ProjectPreviewSlide[];
  brandingNote?: string;
}

export const SELECTED_PROJECTS: ProjectItem[] = [
  {
    number: '01',
    id: '9-teas-cafe',
    title: "9 Tea's Cafe",
    category: 'Cafe / Restaurant',
    filterGroup: 'hospitality',
    liveUrl: 'https://tea-cafe-sepia.vercel.app/',
    displayDomain: 'tea-cafe-sepia.vercel.app',
    location: 'Nalasopara East, Maharashtra',
    description:
      'Designed around a warm, neighborhood hangout atmosphere ("Brewed with love, served with warmth"), this multi-page website pairs expressive Instrument Serif headlines and clean DM Sans body typography over a deep espresso-and-amber palette. Visitors can explore a dedicated Menu page featuring signature items like Masala Chai (₹49), KitKat Freak Shake (₹180), and Double Dekkar Paneer (₹149), alongside a 4.6★ Google rating showcase across 837+ reviews, operating hours until 11 PM, and one-tap call and Google Maps directions.',
    verifiedFeatures: [
      'Multi-Page SPA Routing',
      'Interactive Menu & Reviews',
      'Direct Call & Maps Integration',
    ],
    designHighlights: {
      typography: 'Instrument Serif (italicized editorial display) paired with DM Sans body copy.',
      palette: [
        { name: 'Espresso Bark', hex: '#17120E' },
        { name: 'Chai Amber', hex: '#D97706' },
        { name: 'Warm Cream', hex: '#F5EFE6' },
      ],
      navigation: 'Top navigation bar with routes for Home, Menu, About, Reviews, Visit, and an Order Online CTA.',
      customerExperience:
        'Highlights dine-in, takeaway, and no-contact delivery options, ₹1–400 per person pricing transparency, real guest testimonials, and instant tel:07304064166 dialer links.',
      responsiveVerified:
        'Verified fluid 4-column to 1-column menu card grid, responsive split-screen vibe showcase, and mobile-accessible navigation.',
    },
    previewBrowser: {
      heroEyebrow: '4.6 ★ · 837 REVIEWS · NALASOPARA EAST',
      heroHeadline: 'Brewed with love, served with warmth.',
      heroSubtext: 'A cozy corner where every cup of chai tells a story — and every freak shake makes one.',
      primaryCtaText: 'Explore Menu →',
      secondaryCtaText: 'Find Us',
      accentHex: '#D97706',
      surfaceHex: '#18120E',
      textHex: '#FAF5EE',
      badgeText: 'Open · until 11 pm',
    },
    slides: [
      {
        label: 'Hero & Ambience',
        localSrc: '/assets/projects/01-9teas-hero.jpg',
        remoteSrc: 'https://tea-cafe-sepia.vercel.app/assets/hero-chai-5NVP-uN1.jpg',
        alt: "9 Tea's Cafe hero preview showing steaming masala chai with spices",
        caption: 'Full-viewport hero featuring steaming masala chai, 4.6★ rating proof, and dual primary actions.',
      },
      {
        label: 'Bestseller Shakes',
        localSrc: '/assets/projects/01-9teas-shake.jpg',
        remoteSrc: 'https://tea-cafe-sepia.vercel.app/assets/freak-shake-Cws7a5K5.jpg',
        alt: "KitKat Freak Shake menu card visual from 9 Tea's Cafe",
        caption: 'Crowd Favourites 4-column showcase highlighting the ₹180 KitKat Freak Shake bestseller.',
      },
      {
        label: 'House Specials',
        localSrc: '/assets/projects/01-9teas-paneer.jpg',
        remoteSrc: 'https://tea-cafe-sepia.vercel.app/assets/paneer-sandwich-DqocF2g3.jpg',
        alt: "Double Dekkar Paneer sandwich from 9 Tea's Cafe",
        caption: 'Split-screen neighborhood hangout story paired with house special sandwich photography.',
      },
    ],
  },
  {
    number: '02',
    id: 'joeys-pizza',
    title: "Joey's Pizza",
    category: 'Restaurant / Pizza',
    filterGroup: 'food',
    liveUrl: 'https://joeys-pizza-live.vercel.app/',
    displayDomain: 'joeys-pizza-live.vercel.app',
    location: 'Andheri West, Mumbai',
    description:
      'Built for the iconic Andheri West pizzeria ("Mumbai’s Most Loaded Slice"), this food-first web experience combines punchy Anton display headings and Plus Jakarta Sans copy with high-contrast crust-to-crust pizza photography. It showcases six signature pies—including China Gate, Butter Chicken, Paneer Makhani, Tornado, and Half & Half—followed by an interactive tabbed Menu Explorer (Veg Pizzas, Chicken Pizzas, Sides, Beverages), a 4.4★ social proof strip from 24,000+ diners, an embedded Google Map near D.N. Nagar Metro Station, and direct phone ordering.',
    verifiedFeatures: [
      'Tabbed Menu Explorer',
      'Embedded Google Maps & Directions',
      'Direct Call Ordering',
    ],
    designHighlights: {
      typography: 'Condensed Anton display headlines paired with Plus Jakarta Sans for menu clarity.',
      palette: [
        { name: 'Oven Charcoal', hex: '#12100E' },
        { name: 'Marinara Crimson', hex: '#E11D48' },
        { name: 'Melted Cheddar', hex: '#F59E0B' },
      ],
      navigation: 'Single-page smooth-scroll header linking to Home, Menu, Why Joey’s, Reviews, Visit Us, Call Now, and Get Directions.',
      customerExperience:
        'Communicates portion value (₹200–₹400 per person), explains custom Half & Half ordering, displays a 6-photo visual gallery, and provides instant tel:+918451845565 calling.',
      responsiveVerified:
        'Verified responsive 3-column signature pie cards, mobile drawer navigation, and adaptive split-column outlet location map.',
    },
    previewBrowser: {
      heroEyebrow: 'ANDHERI WEST · MUMBAI · 4.4 ★ (24,000+ DINERS)',
      heroHeadline: "MUMBAI'S MOST LOADED SLICE",
      heroSubtext: 'Bold desi flavours, toppings stacked to the crust and cheese that refuses to quit.',
      primaryCtaText: 'Explore Menu',
      secondaryCtaText: 'Get Directions',
      accentHex: '#EA580C',
      surfaceHex: '#14110F',
      textHex: '#FFFBEB',
      badgeText: '₹200–₹400 Per Person',
    },
    slides: [
      {
        label: 'Hero Slice Showcase',
        localSrc: '/assets/projects/02-joeys-hero.jpg',
        remoteSrc: 'https://joeys-pizza-live.vercel.app/assets/hero-pizza-C-fiichO.jpg',
        alt: "Joey's Pizza loaded pizza hero photography",
        caption: "High-impact hero section showcasing Mumbai's most loaded slice and 24,000+ diner reviews.",
      },
      {
        label: 'China Gate Signature',
        localSrc: '/assets/projects/02-joeys-chinagate.jpg',
        remoteSrc: 'https://joeys-pizza-live.vercel.app/assets/pizza-chinagate-D-AG8tif.jpg',
        alt: "China Gate Pizza signature dish at Joey's Pizza",
        caption: 'Signature Favourites card for the cult-favourite schezwan-base China Gate Pizza.',
      },
      {
        label: 'Butter Chicken Pie',
        localSrc: '/assets/projects/02-joeys-butterchicken.jpg',
        remoteSrc: 'https://joeys-pizza-live.vercel.app/assets/pizza-butterchicken-D2S8arxH.jpg',
        alt: "Butter Chicken Pizza at Joey's Pizza Andheri West",
        caption: 'Desi-fusion Butter Chicken Pizza highlighted in the interactive menu explorer.',
      },
    ],
  },
  {
    number: '03',
    id: '44-the-food-hub',
    title: '44 The Food Hub',
    category: 'Vegetarian Fast Food',
    filterGroup: 'food',
    liveUrl: 'https://44-the-food-hub-hitesh9090s-projects.vercel.app/',
    displayDomain: '44-the-food-hub-hitesh9090s-projects.vercel.app',
    location: 'Malad West, Mumbai',
    description:
      'Created for a late-night 100% vegetarian fast-food kitchen in Malad West, this vibrant multi-route website uses bold Bebas Neue display typography ("VEGETARIAN FAST FOOD, MUMBAI STYLE") and energetic saffron, golden-yellow, and pure-veg green accents. It immediately highlights the restaurant’s 3 AM closing time, ₹200–400 per person range, and diverse street-food categories—spanning Makhmali Dosa (₹180), Pav Bhaji (₹160), Chilli Coriander Noodles (₹220), Veg Burrito (₹240), and fresh fruit juices—supported by a 4.2★ Google rating (248 reviews) and direct Call to Order actions.',
    verifiedFeatures: [
      'Multi-Page Menu & Beverages',
      'Late-Night 3 AM Status Highlights',
      'Direct Click-to-Call Ordering',
    ],
    designHighlights: {
      typography: 'All-caps Bebas Neue display headers paired with clean Inter body typography.',
      palette: [
        { name: 'Street Saffron', hex: '#EA580C' },
        { name: 'Midnight Gold', hex: '#EAB308' },
        { name: 'Pure Veg Leaf', hex: '#16A34A' },
      ],
      navigation: 'Multi-page routing across Home, Menu, Reviews, About, and Contact with a primary Order Now phone action.',
      customerExperience:
        'Organizes South Indian, Street Food, Chinese, Mexican, and Fresh Juice offerings with upfront rupee pricing and instant tel:+917738397544 ordering (phone-based ordering without third-party chat popups).',
      responsiveVerified:
        'Verified 2-column hero split, 3-column feature divider bar, and 4-column responsive square dish cards.',
    },
    previewBrowser: {
      heroEyebrow: 'OPEN UNTIL 3 AM · MALAD WEST · 100% VEGETARIAN',
      heroHeadline: 'VEGETARIAN FAST FOOD, MUMBAI STYLE',
      heroSubtext: 'Late-night cravings meet bold flavours: Dosa, Chinese, Pav Bhaji, burritos, and fresh juices.',
      primaryCtaText: 'Explore Menu',
      secondaryCtaText: 'Call to Order',
      accentHex: '#EA580C',
      surfaceHex: '#181310',
      textHex: '#FAF8F5',
      badgeText: '4.2 ★ (248 Reviews)',
    },
    slides: [
      {
        label: 'Mumbai Street Spread',
        localSrc: '/assets/projects/03-44foodhub-hero.jpg',
        remoteSrc: 'https://veggie-hub-delights.lovable.app/assets/hero-food-LWEEY4Dv.jpg',
        alt: '44 The Food Hub vegetarian spread of dosa, pav bhaji, and noodles',
        caption: 'Hero showcase featuring the full vegetarian fast-food spread and 3 AM late-night service badge.',
      },
      {
        label: 'Makhmali Dosa',
        localSrc: '/assets/projects/03-44foodhub-dosa.jpg',
        remoteSrc: 'https://veggie-hub-delights.lovable.app/assets/dosa-CxbtW0KA.jpg',
        alt: 'Makhmali Dosa served with chutneys at 44 The Food Hub',
        caption: 'Fan Favourites card spotlighting the ₹180 crispy Makhmali Dosa with South Indian chutneys.',
      },
      {
        label: 'Wok-Tossed Chinese',
        localSrc: '/assets/projects/03-44foodhub-noodles.jpg',
        remoteSrc: 'https://veggie-hub-delights.lovable.app/assets/chinese-noodles-COb2bTly.jpg',
        alt: 'Chilli Coriander Noodles at 44 The Food Hub',
        caption: 'Chilli Coriander Noodles (₹220) featured in the categorized vegetarian menu grid.',
      },
    ],
  },
  {
    number: '04',
    id: 'olivea-cafe-restaurant',
    title: 'Olivea Cafe & Restaurant',
    category: 'Cafe / Restaurant',
    filterGroup: 'hospitality',
    liveUrl: 'https://olivea-cafe-and-restaurant.vercel.app/',
    displayDomain: 'olivea-cafe-and-restaurant.vercel.app',
    location: 'Mira Road East, Maharashtra',
    description:
      'An editorial hospitality experience for a pure vegetarian cafe and restaurant near Thakur Mall in Mira Road East. Opening with a choreographed OLIVEA reveal animation, the site pairs Cormorant Garamond serif headings and Jost sans-serif typography across a warm cream, deep ink, and brushed-brass color scheme. Visitors can filter the culinary menu by category (All, Starters, Main Course, Chinese, Pasta, Beverages), browse a 6-photo interior and food gallery, read verified 4.3★ Google reviews (124+ reviews), and book a table via the reservation section or direct WhatsApp integration.',
    verifiedFeatures: [
      'Category-Filterable Menu',
      'Table Reservation & WhatsApp Booking',
      '6-Image Visual Gallery & Maps',
    ],
    designHighlights: {
      typography: 'Refined Cormorant Garamond serif headlines with wide-tracked Jost geometric sans-serif.',
      palette: [
        { name: 'Botanical Olive Ink', hex: '#141B15' },
        { name: 'Brushed Brass', hex: '#B89758' },
        { name: 'Warm Alabaster', hex: '#F6F3EC' },
      ],
      navigation: 'Fixed glassmorphic header with links to Home, About, Menu, Gallery, Reviews, Contact, View Menu, and Reserve a Table.',
      customerExperience:
        'Combines an interactive menu filter (Pink Sauce Pasta, Paneer Pahadi Kebab, Dry Manchurian, Cafe Coolers), a 4-step Olivea Experience narrative, embedded Google Maps, and floating WhatsApp (+91 96733 22159) and back-to-top controls.',
      responsiveVerified:
        'Verified 3-column desktop to single-column mobile grid transitions, mobile sticky call action, and smooth scroll-snap interactions.',
    },
    previewBrowser: {
      heroEyebrow: 'MIRA ROAD EAST · PURE VEGETARIAN · 4.3 / 5 (124+ REVIEWS)',
      heroHeadline: 'Pure Vegetarian. Made With Love.',
      heroSubtext: 'A cozy dining experience with delicious vegetarian food, warm hospitality and a beautiful atmosphere.',
      primaryCtaText: 'Explore Our Menu',
      secondaryCtaText: 'Reserve a Table',
      accentHex: '#B89758',
      surfaceHex: '#151B16',
      textHex: '#F7F4EE',
      badgeText: '100% Pure Veg Kitchen',
    },
    slides: [
      {
        label: 'Hero Dining Atmosphere',
        localSrc: '/assets/projects/04-olivea-hero.jpg',
        remoteSrc: 'https://olivea-cafe-and-restaurant.vercel.app/assets/hero-BMyZvsUw.jpg',
        alt: 'Olivea Cafe & Restaurant warm dining table presentation',
        caption: 'Cinematic hero presentation with Reserve a Table and Explore Our Menu calls-to-action.',
      },
      {
        label: 'Cafe Interior Story',
        localSrc: '/assets/projects/04-olivea-about.jpg',
        remoteSrc: 'https://olivea-cafe-and-restaurant.vercel.app/assets/about-BtIhI-6w.jpg',
        alt: 'Interior seating and warm lighting at Olivea Cafe & Restaurant',
        caption: 'Our Story section highlighting cozy seating, soft lighting, and freshly prepared vegetarian dining.',
      },
      {
        label: 'Pink Sauce Pasta',
        localSrc: '/assets/projects/04-olivea-pasta.jpg',
        remoteSrc: 'https://olivea-cafe-and-restaurant.vercel.app/assets/dish-pasta-BbNyQ_mM.jpg',
        alt: 'Signature Pink Sauce Pasta at Olivea Cafe & Restaurant',
        caption: 'Guest-favourite Pink Sauce Pasta inside the interactive category-filterable menu.',
      },
    ],
  },
  {
    number: '05',
    id: 'prolevel-personal-training',
    title: 'ProLevel Personal Training Studio',
    category: 'Fitness / Personal Training',
    filterGroup: 'fitness',
    liveUrl: 'https://project-nh9f9.vercel.app/',
    displayDomain: 'project-nh9f9.vercel.app',
    location: 'Viman Nagar, Pune',
    description:
      'Designed on a dark obsidian (#090b0d) and slate panel (#14171a) canvas with high-energy #ff5a16 orange accents and athletic Barlow Condensed typography ("YOUR GOALS, OUR GUIDANCE"), this website represents a 24-hour personal training studio in Viman Nagar, Pune rated 4.9★ across 139 Google reviews. A fast client-side router powers dedicated views for Home, Programs (6 numbered tracks including 1-on-1 Personal Training, HIIT, Calisthenics, and Diet Plans), Coaches (spotlighting Head Coach Avinash and Coach Om Atre), and Contact—complete with an interactive consultation form that dynamically builds a custom WhatsApp enquiry.',
    verifiedFeatures: [
      'Dynamic WhatsApp Consultation Form',
      'Multi-View Program & Coach Profiles',
      'Responsive Mobile Navigation Drawer',
    ],
    designHighlights: {
      typography: 'Athletic Barlow Condensed (weights 600–800) paired with clean Barlow body copy.',
      palette: [
        { name: 'Obsidian Ink', hex: '#090B0D' },
        { name: 'Performance Orange', hex: '#FF5A16' },
        { name: 'Steel Panel', hex: '#14171A' },
      ],
      navigation: 'Header with P-monogram brand mark, links for Home, Programs, Coaches, Contact, mobile menu toggle, and a Train Now WhatsApp CTA.',
      customerExperience:
        'Builds trust with a 4-pillar capability strip, facility checklist, detailed coach credentials, Instagram video link (@prolevel_lifestyle_studio), and a goal-selector consultation form that dispatches directly to WhatsApp (+91 84596 21391).',
      responsiveVerified:
        'Verified responsive 3-column program grid, split-column facility and coach cards, and toggleable mobile menu drawer.',
    },
    previewBrowser: {
      heroEyebrow: 'STRONGER EVERYDAY · 4.9 ★ (139 REVIEWS) · OPEN 24 HOURS',
      heroHeadline: 'YOUR GOALS, OUR GUIDANCE',
      heroSubtext: 'Personal Training · Customized Programs · Real Results in Viman Nagar, Pune.',
      primaryCtaText: 'Start Your Journey',
      secondaryCtaText: 'Watch Video',
      accentHex: '#FF5A16',
      surfaceHex: '#090B0D',
      textHex: '#F5F3EE',
      badgeText: 'Open 24 Hours · Pune',
    },
    slides: [
      {
        label: 'Studio Hero & Trust Strip',
        localSrc: '/assets/projects/05-prolevel-hero.jpg',
        remoteSrc: 'https://proleve.lovable.app/assets/hero-gym-JejO8B-U.jpg',
        alt: 'ProLevel Personal Training Studio hero visual',
        caption: 'High-contrast athletic hero showcasing 4.9★ Google rating, 24-hour access, and direct WhatsApp onboarding.',
      },
      {
        label: 'Modern Viman Nagar Facility',
        localSrc: '/assets/projects/05-prolevel-facility.jpg',
        remoteSrc: 'https://proleve.lovable.app/assets/facility-DXB-3Q2m.jpg',
        alt: 'Inside ProLevel Personal Training Studio in Viman Nagar, Pune',
        caption: 'Split-column studio overview highlighting modern equipment and customized workout & diet plans.',
      },
      {
        label: 'Expert Coach Profiles',
        localSrc: '/assets/projects/05-prolevel-coach.jpg',
        remoteSrc: 'https://proleve.lovable.app/assets/coach-avinash-D3xHW4Wv.jpg',
        alt: 'Head Coach Avinash at ProLevel Personal Training Studio',
        caption: 'Dedicated Coaches view profiling Head Coach Avinash (Strength, Fat Loss & Transformation) and Coach Om Atre.',
      },
    ],
  },
  {
    number: '06',
    id: 'iron-works',
    title: 'Iron//Works',
    category: 'Gym / Fitness',
    filterGroup: 'fitness',
    liveUrl: 'https://fitness-fanatic-hub-hitesh9090s-projects.vercel.app/',
    displayDomain: 'fitness-fanatic-hub-hitesh9090s-projects.vercel.app',
    location: '24/7 Strength & Conditioning Floor',
    description:
      'Crafted with an unapologetic brutalist-industrial aesthetic, Iron//Works contrasts a warm paper canvas and heavy 2px solid ink borders with monumental Anton typography ("BUILD THE BODY YOU WANTED.") and Space Grotesk body copy. A top enrollment bar announces a free 7-day trial, no contracts, and 24/7 access, leading into a 12-column hero split with live floor metrics (120+ Members, 40 Weekly Classes, 24/7 Floor Access). Prospective members can compare four bordered training tracks—Barbell Club ($40/mo), Engine Room ($55/mo), Mobility Lab ($35/mo), and 1:1 Coaching ($180/mo)—inspect the dark weekly class schedule, and claim a free week.',
    verifiedFeatures: [
      'Brutalist 2px Grid Architecture',
      'Program & Membership Pricing Cards',
      'Weekly Floor Class Schedule',
    ],
    brandingNote:
      'Supplied URL uses the fitness-fanatic-hub slug while the live deployed application is natively titled and branded as "IRON//WORKS — 24/7 Strength & Conditioning".',
    designHighlights: {
      typography: 'Monumental Anton display headlines (leading 0.82) paired with Space Grotesk and monospace section indices.',
      palette: [
        { name: 'Foundry Ink', hex: '#121212' },
        { name: 'Industrial Crimson', hex: '#E11D48' },
        { name: 'Raw Paper', hex: '#F4F1EA' },
      ],
      navigation: 'Top enrollment ticker + 2px-bordered header with IRON//WORKS wordmark, Programs, Classes, Pricing, Join links, and Start Free Week CTA.',
      customerExperience:
        'Eliminates friction with transparent monthly pricing across all 4 programs, a structured weekly floor schedule, and high-contrast "Claim Your Free Week" calls-to-action.',
      responsiveVerified:
        'Verified 12-column hero split, 4-column bordered program grid with hover inversion, and responsive mobile layout.',
    },
    previewBrowser: {
      heroEyebrow: 'EST. 2011 — 24/7 STRENGTH FLOOR · FREE 7-DAY TRIAL',
      heroHeadline: 'BUILD THE BODY YOU WANTED.',
      heroSubtext: 'No mirrors to hide in. Barbell rows, programming you can follow, and coaches who actually show up.',
      primaryCtaText: 'Claim Your Free Week',
      secondaryCtaText: 'See Class Schedule',
      accentHex: '#E11D48',
      surfaceHex: '#141414',
      textHex: '#F4F1EA',
      badgeText: '120+ Members · 40 Classes/Wk',
    },
    slides: [
      {
        label: '24/7 Strength Floor Hero',
        localSrc: '/assets/projects/06-ironworks-hero.jpg',
        remoteSrc: 'https://fitness-fanatic-hub.lovable.app/assets/hero-lifter-iKmVWDEi.jpg',
        alt: 'Lifter mid barbell squat in gritty industrial gym for Iron//Works',
        caption: '12-column industrial hero split pairing barbell squat photography with 120+ Members, 40 Weekly Classes, and 24/7 Access metrics.',
      },
    ],
  },
];
