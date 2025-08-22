import { Event, Program, NewsArticle, Project, TeamMember, GalleryItem, HeroSlide, SuccessStory } from './types';

export const heroSlides: HeroSlide[] = [
  {
    id: '1',
    title: 'Empowering Girls & Women',
    subtitle: 'Rising Above Limitations',
    description: 'We empower girls, women, and youth to rise above cultural, gender, and societal limitations through education, mentorship, and opportunities.',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    ctaPrimary: {
      text: 'Join Our Mission',
      href: '/join-us'
    },
    ctaSecondary: {
      text: 'Learn More',
      href: '/about'
    }
  },
  {
    id: '2',
    title: 'STEM Education',
    subtitle: 'Igniting Innovation',
    description: 'We promote STEM education, especially among girls, to ignite curiosity and innovation for the future of technology and science.',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    ctaPrimary: {
      text: 'Support STEM',
      href: '/programs'
    },
    ctaSecondary: {
      text: 'View Programs',
      href: '/programs'
    }
  },
  {
    id: '3',
    title: 'Combat SGBV',
    subtitle: 'Creating Safe Spaces',
    description: 'We combat Sexual and Gender-Based Violence through education, advocacy, and support systems that protect and empower communities.',
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    ctaPrimary: {
      text: 'Support Our Work',
      href: '/programs'
    },
    ctaSecondary: {
      text: 'Get Involved',
      href: '/join-us'
    }
  },
  {
    id: '4',
    title: 'Climate Resilience',
    subtitle: 'Sustainable Communities',
    description: 'We strengthen community resilience to climate change by promoting education, adaptation, and sustainable practices for a better future.',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080',
    ctaPrimary: {
      text: 'Climate Action',
      href: '/programs'
    },
    ctaSecondary: {
      text: 'Our Projects',
      href: '/projects'
    }
  }
];

export const successStories: SuccessStory[] = [
  {
    id: '1',
    name: 'Akosua Mensah',
    age: 17,
    location: 'Nyanfeku Ekroful, Ghana',
    story: 'Akosua was struggling with mathematics when she joined our SHEROES in STEM program. Through dedicated mentorship and hands-on learning experiences, she discovered her passion for engineering.',
    program: 'SHEROES in STEM',
    achievement: 'Won Regional Science Fair and secured scholarship to study Engineering',
    image: 'https://images.unsplash.com/photo-1594736797933-d0d3e341b921?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'MOLEX Foundation showed me that being a girl in STEM is not a limitation, but a superpower. I now mentor other girls in my community.'
  },
  {
    id: '2',
    name: 'Fatima Ibrahim',
    age: 16,
    location: 'Tamale, Ghana',
    story: 'Coming from a family where girls were not encouraged to pursue higher education, Fatima joined our Girls Education Advocacy program. She learned about her rights and gained confidence to pursue her dreams.',
    program: 'Girls Education Advocacy',
    achievement: 'First in her family to complete secondary school and pursuing computer science',
    image: 'https://images.unsplash.com/photo-1546019865-9d4f4e4e66a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'Education is the key that unlocked my potential. Now I am determined to help other girls in my community break the cycle of limitation.'
  },
  {
    id: '3',
    name: 'Ama Osei',
    age: 19,
    location: 'Cape Coast, Ghana',
    story: 'After experiencing gender-based violence, Ama found refuge and healing through our SGBV Prevention and Support program. She received counseling, legal support, and skills training.',
    program: 'SGBV Prevention & Support',
    achievement: 'Started her own tailoring business and became a community advocate',
    image: 'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    quote: 'MOLEX Foundation helped me transform my pain into purpose. I now use my story to help other survivors heal and thrive.'
  }
];

export const programs: Program[] = [
  {
    id: 'sheroes',
    title: 'SHEROES in STEM',
    description: 'Enpowering Girls Through Artificial Intelligence and robotics',
    objectives: [
      "Provide comprehensive training and development opportunities",
      "Create sustainable impact in target communities",
      "Build local capacity and leadership skills",
      "Establish long-term partnerships with community stakeholders",
      "Measure and evaluate program effectiveness"
    ],
    activities: [
      "Community workshops and training sessions",
      "Mentorship and coaching programs",
      "Resource distribution and support",
      "Capacity building initiatives",
      "Impact assessment and evaluation"
    ],
    category: 'education',
    image: 'https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-21.jpg?alt=media&token=5057f237-8a7c-42cd-96d9-e80e0058a5e8',
    icon: 'GraduationCap',
    gallery: [
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1596495578065-6e0763fa1178?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1532619675605-1ede6c2ed2b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  },
  {
    id: 'kiddie-stem',
    title: 'Kiddie STEM',
    description: 'Delivers hands-on STEM to children in rural and underserved areas',
    category: 'education',
    objectives: [
      "Provide comprehensive training and development opportunities",
      "Create sustainable impact in target communities",
      "Build local capacity and leadership skills",
      "Establish long-term partnerships with community stakeholders",
      "Measure and evaluate program effectiveness"
    ],
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'Users',
    gallery: [
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  },
  {
    id: 'ai-club',
    title: 'Robotics & AI Clubs in SHS',
    description: 'Advancing gender equality and combating Sexual and Gender-Based Violence through education, advocacy, and community support systems.',
    category: 'development',
    objectives: [
      "Provide comprehensive training and development opportunities",
      "Create sustainable impact in target communities",
      "Build local capacity and leadership skills",
      "Establish long-term partnerships with community stakeholders",
      "Measure and evaluate program effectiveness"
    ],
    image: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'Heart',
    gallery: [
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1591604129939-f1efa4d9f7fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1609220136736-443140cffec6?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1562813733-b31f71025d54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1525026198548-4baa812f1183?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  },
  {
    id: 'pinnale-journey',
    title: 'Pinnacle Journey',
    description: 'Empowering individuals by sharing diverse life experiences and personal narratives',
    category: 'education',
    objectives: [
      "Provide comprehensive training and development opportunities",
      "Create sustainable impact in target communities",
      "Build local capacity and leadership skills",
      "Establish long-term partnerships with community stakeholders",
      "Measure and evaluate program effectiveness"
    ],
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'HandHeart',
    gallery: [
      'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1546019865-9d4f4e4e66a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1594736797933-d0d3e341b921?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  },
  {
    id: 'guiding-stars',
    title: 'Guiding Stars',
    description: 'Strengthening community resilience to climate change by promoting education, adaptation, and sustainable practices.',
    category: 'development',
    objectives: [
      "Provide comprehensive training and development opportunities",
      "Create sustainable impact in target communities",
      "Build local capacity and leadership skills",
      "Establish long-term partnerships with community stakeholders",
      "Measure and evaluate program effectiveness"
    ],
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    icon: 'Sprout',
    gallery: [
      'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
      'https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
    ]
  },
  // {
  //   id: '6',
  //   title: 'Ethical Leadership Development',
  //   description: 'Cultivating ethical and visionary leadership rooted in values and service to build tomorrow\'s leaders.',
  //   category: 'education',
  //   image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  //   icon: 'Target',
  //   gallery: [
  //     'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  //     'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  //     'https://images.unsplash.com/photo-1517486808906-6ca8b3f04846?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  //     'https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  //     'https://images.unsplash.com/photo-1567427018141-0584cfcbf1b8?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
  //     'https://images.unsplash.com/photo-1531545514256-b1400bc00f31?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600'
  //   ]
  // }
];

export const events: Event[] = [
  {
    id: '1',
    title: 'Annual Fundraising Gala',
    date: '2024-03-15',
    location: 'Nairobi, Kenya',
    description: 'Join us for an evening of celebration, networking, and fundraising to support our educational initiatives across Africa.',
    image: 'https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'fundraising'
  },
  {
    id: '2',
    title: 'Volunteer Workshop',
    date: '2024-04-08',
    location: 'Online Event',
    description: 'Learn how to get involved with our programs and make a direct impact in African communities through volunteer work.',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'training'
  },
  {
    id: '3',
    title: 'Youth Empowerment Summit',
    date: '2024-05-20',
    location: 'Lagos, Nigeria',
    description: 'A three-day summit focusing on leadership development and entrepreneurship skills for young African leaders.',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    category: 'summit'
  }
];

export const newsArticles: NewsArticle[] = [
  {
    id: '1',
    title: 'New Schools Open in Rural Kenya',
    excerpt: 'Three new primary schools have opened their doors to over 600 children in remote villages, providing access to quality education for the first time.',
    content: 'In a groundbreaking initiative, MOLEX Foundation Africa has successfully opened three new primary schools in the remote villages of Kisumu County, Kenya. These state-of-the-art facilities now provide quality education to over 600 children who previously had to walk hours to reach the nearest school.\n\nThe schools feature modern classrooms, libraries, computer labs, and clean water facilities. Each school has been designed with sustainability in mind, incorporating solar panels for electricity and rainwater harvesting systems.\n\n"This is a dream come true for our community," said Mary Otieno, a local parent. "Now my children can get the education they deserve without the long, dangerous journey to the district school."\n\nThe project, which took 18 months to complete, was funded through a combination of international donations and local government support. MOLEX Foundation worked closely with community leaders to ensure the schools meet the specific needs of each village.\n\nThe foundation plans to open five more schools across East Africa by the end of 2024.',
    date: '2024-02-28',
    category: 'Education',
    image: 'https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    author: 'Sarah Kimani',
    gallery: [
      'https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    ]
  },
  {
    id: '2',
    title: 'Clean Water Reaches 10,000 People',
    excerpt: 'Our latest water infrastructure project now provides clean, safe drinking water to 10,000 people across 15 communities in Ghana.',
    content: 'MOLEX Foundation Africa has achieved a major milestone in its clean water initiative, bringing safe drinking water to 10,000 people across 15 communities in Ghana\'s Northern Region.\n\nThe comprehensive project included the construction of 12 boreholes, 8 hand pumps, and a solar-powered water treatment facility. The foundation also established water management committees in each community to ensure long-term sustainability.\n\n"Access to clean water has transformed our daily lives," explained Fatima Abdul, chairwoman of the Tamale Community Water Committee. "Children no longer miss school to fetch water, and waterborne diseases have decreased dramatically."\n\nThe project incorporated innovative technology, including solar-powered pumps and water quality monitoring systems that can be accessed remotely. Local technicians were trained to maintain the equipment, ensuring the systems remain operational for years to come.\n\nSince the project\'s completion, there has been a 70% reduction in waterborne illnesses in the target communities, and school attendance has increased by 40%.',
    date: '2024-02-25',
    category: 'Water & Sanitation',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    author: 'Kwame Asante',
    gallery: [
      'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1515263487990-61b07816b924?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1586985564150-0e2ad9174949?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    ]
  },
  {
    id: '3',
    title: '500 Women Launch New Businesses',
    excerpt: 'Through our microfinance and training programs, 500 women have successfully launched their own businesses, creating economic opportunities for their families.',
    content: 'In a remarkable achievement for women\'s empowerment, MOLEX Foundation Africa\'s microfinance and entrepreneurship program has helped 500 women across five countries launch successful businesses.\n\nThe comprehensive 12-month program combines business skills training, mentorship, and access to microloans ranging from $100 to $2,000. Participants learn accounting, marketing, customer service, and product development while receiving ongoing support from successful female entrepreneurs.\n\n"I never imagined I could run my own business," said Grace Mwangi, who started a successful tailoring business in Nairobi. "The training gave me confidence, and the microloan helped me buy equipment. Now I employ three other women."\n\nThe program has achieved an impressive 94% loan repayment rate and has created over 1,200 jobs in local communities. Business sectors range from agriculture and food processing to retail and technology services.\n\nAisha Okafor, the program director, notes: "When we empower women economically, the benefits ripple through entire communities. These women are not just supporting their families – they\'re becoming community leaders and role models."\n\nThe foundation plans to expand the program to reach 1,000 women by 2025.',
    date: '2024-02-20',
    category: "Women's Empowerment",
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    author: 'Amina Hassan',
    gallery: [
      'https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300',
      'https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300'
    ]
  }
];

export const projects: Project[] = [
  {
    id: '1',
    title: 'Kisumu Education Center',
    description: 'A comprehensive education facility serving 800 students with modern classrooms, library, and computer lab.',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    location: 'Kisumu, Kenya',
    status: 'completed',
    beneficiaries: 800,
    startDate: '2022-06-01',
    endDate: '2023-12-15'
  },
  {
    id: '2',
    title: 'Ghana Water Initiative',
    description: 'Installing solar-powered water systems across 15 rural communities in Northern Ghana.',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    location: 'Northern Ghana',
    status: 'completed',
    beneficiaries: 10000,
    startDate: '2023-01-15',
    endDate: '2024-02-20'
  },
  {
    id: '3',
    title: 'Mobile Health Network',
    description: 'Deploying mobile health clinics to provide healthcare access in remote areas of Tanzania.',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    location: 'Rural Tanzania',
    status: 'ongoing',
    beneficiaries: 5000,
    startDate: '2024-01-01'
  }
];

export const executiveTeam: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Amara Kone',
    title: 'Chief Executive Officer',
    bio: 'Dr. Amara Kone is a visionary leader with over 20 years of distinguished experience in international development, humanitarian work, and organizational leadership across sub-Saharan Africa. As Chief Executive Officer of MOLEX Foundation Africa, she provides strategic direction and operational oversight to our comprehensive programs empowering girls, women, and youth. Dr. Kone holds a Ph.D. in International Development from Harvard University and a Master\'s in Public Health from the London School of Hygiene and Tropical Medicine. Her career spans leadership roles with major international organizations including the United Nations Development Programme, where she served as Country Director in three different nations, and the World Bank, where she managed a $500 million portfolio of education and health programs. Dr. Kone has been instrumental in designing and implementing transformational programs that have directly impacted over 2 million people across 15 African countries. Her expertise includes program management, partnership development, policy advocacy, and organizational transformation. She is a published researcher with over 30 peer-reviewed articles on sustainable development and has been recognized with multiple awards including the African Leadership Excellence Award.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'executive',
    linkedin: 'https://linkedin.com/in/amara-kone',
    twitter: 'https://twitter.com/amarakone'
  },
  {
    id: '2',
    name: 'Mr. Kwame Nkrumah',
    title: 'Chief Operating Officer',
    bio: 'Kwame Nkrumah brings exceptional operational excellence and strategic partnership expertise to MOLEX Foundation Africa, ensuring our programs deliver maximum impact to the communities we serve. As Chief Operating Officer, he oversees daily operations, program implementation, and strategic partnerships across all our initiatives. Kwame holds a Master\'s degree in Business Administration from INSEAD and a Bachelor\'s in Engineering from the University of Ghana. With over 16 years of experience in international development and private sector management, he has successfully scaled organizations from startup to multi-million dollar operations. Prior to joining MOLEX Foundation Africa, Kwame served as Regional Operations Director for Doctors Without Borders, where he managed complex humanitarian operations across West Africa. He also spent five years in management consulting with McKinsey & Company, focusing on organizational transformation for NGOs and government agencies. His expertise includes operations management, strategic planning, partnership development, and technology integration. Kwame is passionate about leveraging innovative approaches and strategic partnerships to amplify our impact and create sustainable change in African communities.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'executive',
    linkedin: 'https://linkedin.com/in/kwame-nkrumah',
    twitter: 'https://twitter.com/kwamenk'
  },
  {
    id: '3',
    name: 'Ms. Fatima Diallo',
    title: 'Program Director',
    bio: 'Fatima Diallo is a dynamic and results-oriented program leader who brings deep expertise in education, women\'s empowerment, and youth development to MOLEX Foundation Africa. As Program Director, she leads the design, implementation, and evaluation of all our core programs, ensuring they align with our mission and deliver measurable impact. Fatima holds a Master\'s degree in International Education Development from Columbia University and a Bachelor\'s in Social Work from the University of Dakar. With over 14 years of experience in program management and community development, she has successfully designed and implemented programs that have empowered over 50,000 women and youth across West Africa. Prior to joining MOLEX Foundation Africa, Fatima served as Senior Program Manager for Plan International, where she led education and child protection programs in Senegal, Mali, and Guinea. She also worked with UNESCO on girls\' education initiatives and gender equality programs. Her expertise includes program design and evaluation, community engagement, capacity building, and gender-sensitive programming. Fatima is fluent in French, English, and Wolof, and is passionate about creating culturally responsive programs that address the unique needs and aspirations of African women and youth.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b612b786?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'executive',
    linkedin: 'https://linkedin.com/in/fatima-diallo',
    twitter: 'https://twitter.com/fatimadiallo'
  }
];

export const advisoryCouncil: TeamMember[] = [
  {
    id: '1',
    name: 'Prof. Wangari Maathai Jr.',
    title: 'Environmental Policy Advisor',
    bio: 'Prof. Wangari Maathai Jr. is a distinguished environmental scientist and policy expert who brings deep expertise in sustainable development and climate resilience to our Advisory Council. Following in the footsteps of her renowned mother, she has dedicated her career to advancing environmental conservation and community empowerment across Africa. Prof. Maathai Jr. holds a Ph.D. in Environmental Science from Stanford University and currently serves as Professor of Environmental Policy at the University of Nairobi. She has over 18 years of experience working with international environmental organizations including the United Nations Environment Programme, where she led climate adaptation initiatives across 12 African countries. Her research on community-based conservation has been published in over 40 peer-reviewed journals and has influenced environmental policy at national and regional levels. Prof. Maathai Jr. has been instrumental in developing innovative approaches to environmental education and has trained over 5,000 community leaders in sustainable resource management. She serves on the advisory boards of multiple environmental organizations and has received numerous awards including the Goldman Environmental Prize.',
    image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'advisory',
    linkedin: 'https://linkedin.com/in/wangari-maathai-jr'
  },
  {
    id: '2',
    name: 'Dr. Kofi Antwi',
    title: 'Education Technology Advisor',
    bio: 'Dr. Kofi Antwi is a leading expert in educational technology and digital innovation with a particular focus on leveraging technology to improve learning outcomes in underserved communities. As our Education Technology Advisor, he provides strategic guidance on integrating cutting-edge technology solutions into our STEM education and youth empowerment programs. Dr. Antwi earned his Ph.D. in Educational Technology from MIT and has over 15 years of experience developing and implementing technology-enhanced learning solutions across Africa. He previously served as Chief Technology Officer for the African Virtual University, where he led the development of online learning platforms that have reached over 100,000 students across 27 countries. His innovative work in mobile learning and artificial intelligence for education has been recognized globally, and he has consulted for UNESCO, the World Bank, and multiple African governments on digital education strategies. Dr. Antwi is also the founder of EduTech Africa, a nonprofit organization that provides technology training to teachers and students in rural communities. His research on culturally responsive educational technology has been published in leading academic journals.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'advisory',
    linkedin: 'https://linkedin.com/in/kofi-antwi'
  },
  {
    id: '3',
    name: 'Dr. Aisha Patel',
    title: 'Gender Equality Advisor',
    bio: 'Dr. Aisha Patel is a globally recognized expert in gender equality, women\'s empowerment, and social justice with extensive experience designing and implementing programs that advance women\'s rights across developing countries. As our Gender Equality Advisor, she provides strategic guidance on ensuring all our programs are gender-sensitive and contribute to breaking down barriers that limit opportunities for girls and women. Dr. Patel holds a Ph.D. in Gender Studies from Oxford University and has over 20 years of experience working with international development organizations including UN Women, where she served as Regional Director for Africa. Her groundbreaking research on women\'s economic empowerment has influenced policy at the highest levels and has been instrumental in designing programs that have benefited over 500,000 women across sub-Saharan Africa. Dr. Patel has authored three books on gender and development and has been a keynote speaker at major international conferences. She currently serves as Senior Fellow at the Brookings Institution and is a board member of several organizations focused on women\'s rights and empowerment.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'advisory',
    linkedin: 'https://linkedin.com/in/aisha-patel'
  },
  {
    id: '4',
    name: 'Prof. Chinua Okoro',
    title: 'Youth Development Advisor',
    bio: 'Prof. Chinua Okoro is a distinguished youth development specialist and social entrepreneur who brings innovative approaches to youth empowerment and leadership development. As our Youth Development Advisor, he provides strategic guidance on creating programs that effectively engage young people and prepare them for leadership roles in their communities. Prof. Okoro holds a Ph.D. in Social Psychology from Harvard University and has dedicated his career to understanding and addressing the unique challenges facing African youth. He has over 16 years of experience developing youth programs and has worked with organizations including UNICEF, where he led youth empowerment initiatives across West Africa. Prof. Okoro is the founder of the African Youth Leadership Institute, which has trained over 10,000 young leaders across 20 countries. His research on youth entrepreneurship and leadership development has been published extensively, and he has been recognized with multiple awards including the Ashoka Fellowship for social entrepreneurship. He currently serves as Professor of Social Innovation at the University of Cape Town and maintains active involvement in youth mentorship programs.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'advisory',
    linkedin: 'https://linkedin.com/in/chinua-okoro'
  },
  {
    id: '5',
    name: 'Dr. Fatou Sow',
    title: 'Public Health Advisor',
    bio: 'Dr. Fatou Sow is a leading public health expert and epidemiologist who brings extensive experience in community health systems strengthening and health program implementation across Africa. As our Public Health Advisor, she provides strategic guidance on integrating health components into our programs and ensuring our initiatives contribute to improved health outcomes in the communities we serve. Dr. Sow earned her medical degree from the University of Dakar and completed her Ph.D. in Epidemiology at Johns Hopkins University. With over 18 years of experience in public health, she has led major health initiatives across francophone Africa and has been instrumental in strengthening health systems in underserved regions. Dr. Sow previously served as Country Director for Partners in Health in Senegal and has worked extensively with the World Health Organization on maternal and child health programs. Her research on community health worker programs and health system strengthening has been published in leading medical journals, and she has been recognized for her contributions to global health. She currently serves as Professor of Global Health at the Institute of Tropical Medicine in Antwerp and continues to advise governments and international organizations on health policy.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'advisory',
    linkedin: 'https://linkedin.com/in/fatou-sow'
  },
  {
    id: '6',
    name: 'Mr. Olumide Adebayo',
    title: 'Innovation & Technology Advisor',
    bio: 'Mr. Olumide Adebayo is a visionary technology entrepreneur and innovation expert who brings cutting-edge insights on leveraging technology for social impact and sustainable development. As our Innovation & Technology Advisor, he provides strategic guidance on incorporating innovative technologies and approaches into our programs to maximize effectiveness and reach. Mr. Adebayo holds a Master\'s degree in Computer Science from Stanford University and has over 14 years of experience in technology entrepreneurship and innovation. He is the founder and CEO of TechHub Africa, a leading technology incubator that has supported over 200 African startups and has been instrumental in developing the African tech ecosystem. His work has been recognized globally, and he has been featured as one of Forbes\' "30 Under 30" and TIME Magazine\'s "Next Generation Leaders." Mr. Adebayo has extensive experience in fintech, edtech, and healthtech solutions designed specifically for African markets. He serves on the advisory boards of multiple technology organizations and has been a keynote speaker at major technology conferences worldwide. His passion for using technology to solve African challenges aligns perfectly with our mission to empower communities through innovation.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'advisory',
    linkedin: 'https://linkedin.com/in/olumide-adebayo'
  }
];

export const boardMembers: TeamMember[] = [
  {
    id: '1',
    name: 'Dr. Kwame Asante',
    title: 'Chairman',
    bio: 'Dr. Kwame Asante brings over 25 years of distinguished experience in international development, having led transformative initiatives across sub-Saharan Africa. As Chairman of MOLEX Foundation Africa, he provides strategic oversight and visionary leadership to our mission of empowering African communities. Dr. Asante holds a Ph.D. in Development Economics from the University of Cambridge and has served on the boards of numerous international development organizations. His expertise spans sustainable development, economic policy, and community-driven change. Prior to joining MOLEX Foundation Africa, he served as Regional Director for the African Development Bank, where he oversaw $2.3 billion in development projects across 15 countries. Dr. Asante is also a published author of three books on African economic development and frequently speaks at international conferences on sustainable development and poverty alleviation.',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'board',
    linkedin: 'https://linkedin.com/in/kwame-asante'
  },
  {
    id: '2',
    name: 'Prof. Amina Hassan',
    title: 'Vice Chairwoman',
    bio: 'Professor Amina Hassan is a globally recognized expert in sustainable development and gender equality, with particular focus on African economic growth and education policy. As Vice Chairwoman of MOLEX Foundation Africa, she brings deep academic rigor and field experience to our strategic direction. Prof. Hassan earned her doctorate in International Development from Oxford University and currently serves as Professor of Development Studies at the University of Ghana. Her groundbreaking research on women\'s economic empowerment in Africa has been published in over 50 peer-reviewed journals and has influenced policy at the highest levels of government and international organizations. She has consulted for the World Bank, UN Women, and multiple African governments on gender-inclusive development strategies. Prof. Hassan previously served as Director of the Centre for African Women\'s Studies and has received numerous awards including the UNESCO Prize for Girls\' and Women\'s Education.',
    image: 'https://images.unsplash.com/photo-1494790108755-2616b5e92e3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'board',
    linkedin: 'https://linkedin.com/in/amina-hassan'
  },
  {
    id: '3',
    name: 'Samuel Boateng',
    title: 'Secretary',
    bio: 'Samuel Boateng brings over 15 years of hands-on experience in nonprofit management and community development, with specialized expertise in youth empowerment and capacity building programs. As Secretary of the MOLEX Foundation Africa board, he ensures effective governance and operational excellence. Samuel holds a Master\'s degree in Public Administration from the University of Cape Town and has managed multi-million dollar development programs across Ghana, Nigeria, and Kenya. His innovative approach to youth development has resulted in the successful training and mentorship of over 10,000 young people across West Africa. Samuel previously served as Country Director for Youth for Development Africa and has been instrumental in establishing partnerships with government agencies, educational institutions, and private sector organizations. He is passionate about leveraging technology and innovation to create sustainable solutions for youth unemployment and skills development.',
    image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'board',
    linkedin: 'https://linkedin.com/in/samuel-boateng'
  },
  {
    id: '4',
    name: 'Grace Mwangi',
    title: 'Treasurer',
    bio: 'Grace Mwangi is a certified public accountant and financial management expert with deep expertise in overseeing financial operations for international development organizations. As Treasurer of MOLEX Foundation Africa, she ensures fiscal responsibility and transparency in all our financial activities. Grace holds a Bachelor\'s degree in Accounting and Finance from the University of Nairobi and is a Fellow of the Institute of Certified Public Accountants of Kenya. With over 12 years of experience in development finance, she has successfully managed budgets exceeding $50 million across multiple countries and complex program portfolios. Grace previously served as Finance Director for several prominent NGOs including Water for Life Africa and Education Without Borders. Her expertise includes donor compliance, financial risk management, and developing robust financial systems for grassroots organizations. She is known for her meticulous attention to detail and commitment to ensuring that every dollar donated achieves maximum impact for the communities we serve.',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'board',
    linkedin: 'https://linkedin.com/in/grace-mwangi'
  },
  {
    id: '5',
    name: 'Dr. James Owusu',
    title: 'Board Member',
    bio: 'Dr. James Owusu is a distinguished healthcare policy expert and public health physician with extensive experience implementing large-scale health programs across West Africa. His expertise in community health systems and policy development has been instrumental in improving healthcare access for underserved populations. Dr. Owusu earned his medical degree from the University of Ghana Medical School and completed his Master\'s in Public Health at Johns Hopkins University. He has over 18 years of experience working with international health organizations including the World Health Organization, where he served as Regional Health Advisor for West Africa. Dr. Owusu has led initiatives that have reached over 2 million people with essential health services and has been particularly successful in developing sustainable community health worker programs. His research on maternal and child health has been published in leading medical journals, and he frequently advises governments on health system strengthening strategies.',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'board',
    linkedin: 'https://linkedin.com/in/james-owusu'
  },
  {
    id: '6',
    name: 'Fatima Abdul',
    title: 'Board Member',
    bio: 'Fatima Abdul is a passionate advocate for gender equality and women\'s empowerment with over 14 years of experience designing and implementing programs that advance women\'s rights across the African continent. Her work focuses on economic empowerment, leadership development, and combating gender-based violence. Fatima holds a Master\'s degree in Gender and Development Studies from the Institute of Social Studies in The Netherlands and has worked extensively with grassroots women\'s organizations, government agencies, and international NGOs. She previously served as Regional Coordinator for the African Women\'s Leadership Network and has successfully facilitated the establishment of women\'s cooperatives that have empowered over 5,000 women entrepreneurs across Nigeria, Ghana, and Burkina Faso. Fatima is a skilled trainer and has developed curricula on women\'s leadership, financial literacy, and gender-sensitive program design. Her work has been recognized by the African Union Commission, and she serves as a consultant to various UN agencies on gender mainstreaming strategies.',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400',
    category: 'board',
    linkedin: 'https://linkedin.com/in/fatima-abdul'
  }
];

export const galleryItems: GalleryItem[] = [
  {
    id: '1',
    image: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Children learning in classroom',
    category: 'education'
  },
  {
    id: '2',
    image: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Healthcare service delivery',
    category: 'healthcare'
  },
  {
    id: '3',
    image: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Sustainable agriculture training',
    category: 'agriculture'
  },
  {
    id: '4',
    image: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Clean water access project',
    category: 'water'
  },
  {
    id: '5',
    image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Women\'s empowerment program',
    category: 'empowerment'
  },
  {
    id: '6',
    image: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Youth technology training',
    category: 'education'
  },
  {
    id: '7',
    image: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Community volunteer work',
    category: 'community'
  },
  {
    id: '8',
    image: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600',
    thumbnail: 'https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=300&h=300',
    alt: 'Children celebrating success',
    category: 'community'
  }
];
