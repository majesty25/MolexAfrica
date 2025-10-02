import {
  Event,
  Program,
  NewsArticle,
  Project,
  TeamMember,
  GalleryItem,
  HeroSlide,
  SuccessStory,
} from "./types";

export const heroSlides: HeroSlide[] = [
  {
    id: "1",
    title: "Empowering Girls & Women",
    subtitle: "Rising Above Limitations",
    description:
      "We empower girls, women, and youth to rise above cultural, gender, and societal limitations through education, mentorship, and opportunities.",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    ctaPrimary: {
      text: "Join Our Mission",
      href: "/join-us",
    },
    ctaSecondary: {
      text: "Learn More",
      href: "/about",
    },
  },
  {
    id: "2",
    title: "STEM Education",
    subtitle: "Igniting Innovation",
    description:
      "We promote STEM education, especially among girls, to ignite curiosity and innovation for the future of technology and science.",
    image:
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    ctaPrimary: {
      text: "Support STEM",
      href: "/programs",
    },
    ctaSecondary: {
      text: "View Programs",
      href: "/programs",
    },
  },
  {
    id: "3",
    title: "Combat SGBV",
    subtitle: "Creating Safe Spaces",
    description:
      "We combat Sexual and Gender-Based Violence through education, advocacy, and support systems that protect and empower communities.",
    image:
      "https://images.unsplash.com/photo-1544197150-b99a580bb7a8?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    ctaPrimary: {
      text: "Support Our Work",
      href: "/programs",
    },
    ctaSecondary: {
      text: "Get Involved",
      href: "/join-us",
    },
  },
  {
    id: "4",
    title: "Climate Resilience",
    subtitle: "Sustainable Communities",
    description:
      "We strengthen community resilience to climate change by promoting education, adaptation, and sustainable practices for a better future.",
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1920&h=1080",
    ctaPrimary: {
      text: "Climate Action",
      href: "/programs",
    },
    ctaSecondary: {
      text: "Our Projects",
      href: "/projects",
    },
  },
];

export const successStories: SuccessStory[] = [
  {
    id: "1",
    name: "Akosua Mensah",
    age: 17,
    location: "Nyanfeku Ekroful, Ghana",
    story:
      "Akosua was struggling with mathematics when she joined our SHEROES in STEM program. Through dedicated mentorship and hands-on learning experiences, she discovered her passion for engineering.",
    program: "SHEROES in STEM",
    achievement:
      "Won Regional Science Fair and secured scholarship to study Engineering",
    image:
      "https://images.unsplash.com/photo-1594736797933-d0d3e341b921?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    quote:
      "MOLEX Foundation showed me that being a girl in STEM is not a limitation, but a superpower. I now mentor other girls in my community.",
  },
  {
    id: "2",
    name: "Fatima Ibrahim",
    age: 16,
    location: "Tamale, Ghana",
    story:
      "Coming from a family where girls were not encouraged to pursue higher education, Fatima joined our Girls Education Advocacy program. She learned about her rights and gained confidence to pursue her dreams.",
    program: "Girls Education Advocacy",
    achievement:
      "First in her family to complete secondary school and pursuing computer science",
    image:
      "https://images.unsplash.com/photo-1546019865-9d4f4e4e66a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    quote:
      "Education is the key that unlocked my potential. Now I am determined to help other girls in my community break the cycle of limitation.",
  },
  {
    id: "3",
    name: "Ama Osei",
    age: 19,
    location: "Cape Coast, Ghana",
    story:
      "After experiencing gender-based violence, Ama found refuge and healing through our SGBV Prevention and Support program. She received counseling, legal support, and skills training.",
    program: "SGBV Prevention & Support",
    achievement:
      "Started her own tailoring business and became a community advocate",
    image:
      "https://images.unsplash.com/photo-1580618672591-eb180b1a973f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    quote:
      "MOLEX Foundation helped me transform my pain into purpose. I now use my story to help other survivors heal and thrive.",
  },
];

export const programs: Program[] = [
  {
    id: "sheroes",
    title: "SHEROES in STEM",
    description:
      "Welcome to SHEROES in STEM, a transformative initiative by MOLEX FOUNDATION AFRICA, aimed at bridging the gender gap in Science, Technology, Engineering, and Mathematics (STEM). Our mission is to empower and inspire girls to pursue careers in these critical fields, providing them with the skills, confidence, and opportunities to thrive.",
    objectives: [
      "Increase the representation of girls in STEM education and careers.",
      "Provide a robust foundation in STEM subjects through a variety of engaging and interactive activities.",
      "Address and reduce the gender disparity in STEM fields.",
      "Foster diversity and gender equality within the ICT sector.Combat against Sexual and Gender Based Violence.",
      // "Measure and evaluate program effectiveness"
    ],
    activities: [
      "Robotics and Artificial Intelligence workshops and training sessions",
      "Mentorship and coaching programs",
      // "Resource distribution and support",
      "Capacity building initiatives",
      "Impact assessment and evaluation",
    ],
    category: "STEM for Girls",
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-21.jpg?alt=media&token=5057f237-8a7c-42cd-96d9-e80e0058a5e8",
    icon: "GraduationCap",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2F2A1A1383.jpg?alt=media&token=3372509c-27d7-497d-b35e-aa64cc5d0c2c",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-16.jpg?alt=media&token=ee9a68c6-d4a4-4da1-81b7-a37d384a3828",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-40-19.jpg?alt=media&token=0e405835-f16f-4b4d-8af5-1880f6421963",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-20.jpg?alt=media&token=10d2d010-931d-439d-b25c-a4d122fd7ee9",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-34.jpg?alt=media&token=b763a65c-4a42-4f6c-aa59-8a7001e39b87",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-38.jpg?alt=media&token=d9ec383d-56cb-4c8f-a316-d2422e67a6e1",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-40.jpg?alt=media&token=fd3372f8-9d84-4993-afce-504e1bf0f52c",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-47.jpg?alt=media&token=b2673a14-c76e-4921-afd9-8a89134295d8",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-41-52.jpg?alt=media&token=ea2b5f18-4ca7-41fb-8257-e4db36aa0b5e",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-42-09.jpg?alt=media&token=f8394307-19db-4c56-b91d-b623bc28b962",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-42-20.jpg?alt=media&token=b569baf7-da1f-49b8-92f9-788193b81ff0",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fsheroes%2Fphoto_2024-09-23_15-42-12.jpg?alt=media&token=6d159b76-3413-4f0c-b560-312fb716edd6",
    ],
  },
  {
    id: "kiddie-stem",
    title: "Kiddie STEM",
    description:
      "KIDDIE STEM, by Molex Foundation Africa, promotes hands-on STEM (Science, Technology, Engineering, and Mathematics) education for children in Ghana and Africa. Through interactive activities in Robotics, Programming, and Electronics, it inspires early interest in STEM, builds foundational skills, and fosters future innovators.",
    category: "STEM",
    objectives: [
      "Introduce Children to STEM at an Early Age",
      "Instil a Lasting Interest in STEM Careers",
      "Provide Resources and Support to Underserved Communities",
      "Foster diversity and gender equality within the ICT sector",
      "Combat against Sexual and Gender Based Violence",
    ],
    activities: [
      "Mentorship Sessions: Provides ongoing guidance and support to help children develop foundational skills in robotics and programming. Fosters a culture of mentorship to inspire young learners and provide role models in STEM.",
      "Mobile Seminars in Rural Communities: Delivers hands-on STEM education directly to children in rural and underserved areas. Equips students with practical experience in robotics and programming through interactive workshops.",
      "Weekend Seminars at the MOLEX Robotic Lab: Deepens students' understanding and skills in a resource-rich environment with access to advanced STEM equipment. Promotes collaborative learning and innovation through team-based projects.",
      "Robotic and Programming Hackathon: Creates a platform for students to showcase their skills and creativity in robotics and programming. Encourages innovation, teamwork, and real-world problem-solving through a competitive yet supportive environment.",
    ],
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A3780%20(1).jpg?alt=media&token=f049135c-1af3-4996-991d-f64cda6006f7",
    icon: "Users",
    gallery: [
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A3780%20(1).jpg?alt=media&token=f049135c-1af3-4996-991d-f64cda6006f7",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A0603.jpg?alt=media&token=306d55fc-6edd-4383-aa62-59e599865bf3",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A0618.jpg?alt=media&token=d295bcf4-49b0-4fb4-be3f-dcaa7cfe9a80",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A3762.jpg?alt=media&token=49eaa75d-3645-4a0b-bda9-7c73fa6315b6",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A3763.jpg?alt=media&token=65193860-02a7-454a-aa1b-6a236150c842",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A3768.jpg?alt=media&token=868d8369-9f30-4976-bb43-c4b445972802",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A3780.jpg?alt=media&token=d00b436d-b614-413b-a874-9f47f6f7bf26",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A9275.jpg?alt=media&token=5bef9ae0-0140-4116-8d4d-69b5190e77b8",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A9281.jpg?alt=media&token=3a33d486-0249-4bce-91a6-1d3d12487c9a",
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2FKIDDIE%20STEM%2F3M3A9292.jpg?alt=media&token=e697cd75-4940-499e-9455-f0b277c5766e",
    ],
  },

  {
    id: "robotics-ai-clubs-shs",
    title: "Robotics & AI Clubs in SHS",
    description:
      "The Robotics & AI Clubs in Senior High Schools (SHS) are an initiative by the MOLEX Foundation Africa aimed at introducing students to the world of robotics and artificial intelligence through hands-on learning and innovation. These clubs serve as platforms where students explore technology in an engaging and practical way—learning how to build robotic systems, understand AI concepts, and apply them to real-world problems.",
    category: "STEM",
    objectives: [
      "To introduce students to the core concepts of robotics and artificial intelligence.",
      "To develop practical skills in building and programming robotic systems.",
      "To foster creativity, teamwork, and problem-solving through hands-on projects.",
      "To inspire interest in STEM careers, particularly in engineering, technology, and AI.",
    ],
    activities: [
      "Structured training sessions on robotics and AI concepts",
      "Hands-on workshops for building and programming robotic systems",
      "Mentorship programs connecting students with STEM professionals",
      "Team-based projects and innovation challenges",
      "Competitions and exhibitions to showcase student work",
    ],
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    icon: "Bot",
    gallery: [
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1517077304055-6e89abbf09b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1555949963-aa79dcee981c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1535223289827-42f1e9919769?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
  },
  {
    id: "pinnacle-journey",
    title: "The Pinnacle Journey: Revealing Diverse Life Stories",
    description:
      "An innovative project developed by the MOLEX Foundation Africa, aimed at empowering individuals by sharing inspiring personal narratives and life experiences. This project focuses on celebrating the diversity of life stories, showcasing how different careers, aspirations, and challenges shape individuals.",
    category: "development",
    objectives: [
      "Empowerment: Inspire and empower individuals by sharing real-life success stories and providing mentorship to help them navigate their own journeys.",
      "Enhancement of Skills: Provide valuable resources to improve both personal and professional skill sets through mentorship, life coaching, and practical learning experiences.",
      "Networking: Create an environment that encourages networking, allowing participants to connect with others, share experiences, and develop meaningful relationships.",
      "Self-Discovery: Help participants discover their passions, strengths, and areas for growth, leading to a deeper understanding of themselves.",
      "Holistic Development: Foster the overall growth of individuals by addressing their personal, professional, and emotional needs through a comprehensive program.",
    ],
    activities: [
      "Content Production: The show will feature inspiring stories, mentorship sessions, and interactive life coaching segments, recorded in first week of every Saturday of the month. These episodes will be posted on the MOLEX Foundation Africa YouTube channel every in the last Wednesday of the month.",
      "Ongoing Evaluation: Pre- and post-program assessments will measure participants' skill development and growth, with regular feedback from volunteers, participants, and the public. Career advancements will be tracked to gauge long-term success.",
      "Community Building: Efforts will be made to create an engaged online community through comment sections, live interactions, and periodic feedback from participants and viewers.",
    ],
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    icon: "HandHeart",
    gallery: [
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1531384441138-2736e62e0919?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1546019865-9d4f4e4e66a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1594736797933-d0d3e341b921?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
  },
  {
    id: "guiding-stars",
    title: "Guiding Stars",
    description:
      "Strengthening community resilience to climate change by promoting education, adaptation, and sustainable practices.",
    category: "development",
    objectives: [
      "Provide comprehensive training and development opportunities",
      "Create sustainable impact in target communities",
      "Build local capacity and leadership skills",
      "Establish long-term partnerships with community stakeholders",
      "Measure and evaluate program effectiveness",
    ],
    image:
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    icon: "Sprout",
    gallery: [
      "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1611273426858-450d8e3c9fce?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1518531933037-91b2f5f229cc?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1593113598332-cd288d649433?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1556075798-4825dfaaf498?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
      "https://images.unsplash.com/photo-1580477667995-2b94f01c9516?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    ],
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
    id: "1",
    title: "Annual Fundraising Gala",
    date: "2024-03-15",
    location: "Nairobi, Kenya",
    description:
      "Join us for an evening of celebration, networking, and fundraising to support our educational initiatives across Africa.",
    image:
      "https://images.unsplash.com/photo-1515187029135-18ee286d815b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "fundraising",
  },
  {
    id: "2",
    title: "Volunteer Workshop",
    date: "2024-04-08",
    location: "Online Event",
    description:
      "Learn how to get involved with our programs and make a direct impact in African communities through volunteer work.",
    image:
      "https://images.unsplash.com/photo-1559027615-cd4628902d4a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "training",
  },
  {
    id: "3",
    title: "Youth Empowerment Summit",
    date: "2024-05-20",
    location: "Lagos, Nigeria",
    description:
      "A three-day summit focusing on leadership development and entrepreneurship skills for young African leaders.",
    image:
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    category: "summit",
  },
];

export const newsArticles: NewsArticle[] = [
  {
    id: "1",
    title: "New Schools Open in Rural Kenya",
    excerpt:
      "Three new primary schools have opened their doors to over 600 children in remote villages, providing access to quality education for the first time.",
    content:
      'In a groundbreaking initiative, MOLEX Foundation Africa has successfully opened three new primary schools in the remote villages of Kisumu County, Kenya. These state-of-the-art facilities now provide quality education to over 600 children who previously had to walk hours to reach the nearest school.\n\nThe schools feature modern classrooms, libraries, computer labs, and clean water facilities. Each school has been designed with sustainability in mind, incorporating solar panels for electricity and rainwater harvesting systems.\n\n"This is a dream come true for our community," said Mary Otieno, a local parent. "Now my children can get the education they deserve without the long, dangerous journey to the district school."\n\nThe project, which took 18 months to complete, was funded through a combination of international donations and local government support. MOLEX Foundation worked closely with community leaders to ensure the schools meet the specific needs of each village.\n\nThe foundation plans to open five more schools across East Africa by the end of 2024.',
    date: "2024-02-28",
    category: "Education",
    image:
      "https://images.unsplash.com/photo-1504159506876-f8338247a14a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Sarah Kimani",
    gallery: [
      "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1509062522246-3755977927d7?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1580582932707-520aed937b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1544717297-fa95b6ee9643?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    ],
  },
  {
    id: "2",
    title: "Clean Water Reaches 10,000 People",
    excerpt:
      "Our latest water infrastructure project now provides clean, safe drinking water to 10,000 people across 15 communities in Ghana.",
    content:
      'MOLEX Foundation Africa has achieved a major milestone in its clean water initiative, bringing safe drinking water to 10,000 people across 15 communities in Ghana\'s Northern Region.\n\nThe comprehensive project included the construction of 12 boreholes, 8 hand pumps, and a solar-powered water treatment facility. The foundation also established water management committees in each community to ensure long-term sustainability.\n\n"Access to clean water has transformed our daily lives," explained Fatima Abdul, chairwoman of the Tamale Community Water Committee. "Children no longer miss school to fetch water, and waterborne diseases have decreased dramatically."\n\nThe project incorporated innovative technology, including solar-powered pumps and water quality monitoring systems that can be accessed remotely. Local technicians were trained to maintain the equipment, ensuring the systems remain operational for years to come.\n\nSince the project\'s completion, there has been a 70% reduction in waterborne illnesses in the target communities, and school attendance has increased by 40%.',
    date: "2024-02-25",
    category: "Water & Sanitation",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Kwame Asante",
    gallery: [
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1541976590-713941681591?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1515263487990-61b07816b924?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1586985564150-0e2ad9174949?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1581833971358-2c8b550f87b3?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    ],
  },
  {
    id: "3",
    title: "500 Women Launch New Businesses",
    excerpt:
      "Through our microfinance and training programs, 500 women have successfully launched their own businesses, creating economic opportunities for their families.",
    content:
      'In a remarkable achievement for women\'s empowerment, MOLEX Foundation Africa\'s microfinance and entrepreneurship program has helped 500 women across five countries launch successful businesses.\n\nThe comprehensive 12-month program combines business skills training, mentorship, and access to microloans ranging from $100 to $2,000. Participants learn accounting, marketing, customer service, and product development while receiving ongoing support from successful female entrepreneurs.\n\n"I never imagined I could run my own business," said Grace Mwangi, who started a successful tailoring business in Nairobi. "The training gave me confidence, and the microloan helped me buy equipment. Now I employ three other women."\n\nThe program has achieved an impressive 94% loan repayment rate and has created over 1,200 jobs in local communities. Business sectors range from agriculture and food processing to retail and technology services.\n\nAisha Okafor, the program director, notes: "When we empower women economically, the benefits ripple through entire communities. These women are not just supporting their families – they\'re becoming community leaders and role models."\n\nThe foundation plans to expand the program to reach 1,000 women by 2025.',
    date: "2024-02-20",
    category: "Women's Empowerment",
    image:
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    author: "Amina Hassan",
    gallery: [
      "https://images.unsplash.com/photo-1584464491033-06628f3a6b7b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1552581234-26160f608093?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      "https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
    ],
  },
];

export const projects: Project[] = [
  {
    id: "1",
    title: "Kisumu Education Center",
    description:
      "A comprehensive education facility serving 800 students with modern classrooms, library, and computer lab.",
    image:
      "https://images.unsplash.com/photo-1497486751825-1233686d5d80?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Kisumu, Kenya",
    status: "completed",
    beneficiaries: 800,
    startDate: "2022-06-01",
    endDate: "2023-12-15",
  },
  {
    id: "2",
    title: "Ghana Water Initiative",
    description:
      "Installing solar-powered water systems across 15 rural communities in Northern Ghana.",
    image:
      "https://images.unsplash.com/photo-1578662996442-48f60103fc96?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Northern Ghana",
    status: "completed",
    beneficiaries: 10000,
    startDate: "2023-01-15",
    endDate: "2024-02-20",
  },
  {
    id: "3",
    title: "Mobile Health Network",
    description:
      "Deploying mobile health clinics to provide healthcare access in remote areas of Tanzania.",
    image:
      "https://images.unsplash.com/photo-1582750433449-648ed127bb54?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600",
    location: "Rural Tanzania",
    status: "ongoing",
    beneficiaries: 5000,
    startDate: "2024-01-01",
  },
];

export const executiveTeam: TeamMember[] = [
  {
    id: "1",
    name: "Mis. Ivy Amartey",
    title: "Executive Director",
    bio: `
    The Executive Director of MOLEX Foundation Africa. Ms. Amartey is the acting Central Regional 
    Director of Department of Children. From Nyanfeku Ekroful in the Abura-Asebu-Kwamankese District
     in the central region of Ghana She is a professional social worker who is passionate about 
     the vulnerable/ marginalized/ excluded expecially children.
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2F2A1A1327.jpg?alt=media&token=e5509038-367e-4722-83f2-86a8820dfdb9",
    category: "executive",
    // linkedin: "https://linkedin.com/in/amara-kone",
    // twitter: "https://twitter.com/amarakone",
  },
  {
    id: "2",
    name: "Emmanuel Kuta Essien",
    title: "Finance Officer",
    bio: `
    Mr Emmanuel kuta Essien is a graduate from the university of Education, Winneba in the Central Region of Ghana. 
    He holds Degree in Bachelor of Business Administration in Accounting and currently he is a teller at Mon-Tran 
    Limited Ghana. He is also a shareholder at Mfantseman Cassava Processing Factory at Anomabo in the central region of 
    Ghana. He is also the CEO for EKE Perfect services and also the operations director and financial advisor to Ebenkate Training Institute.
     Mr Emmanuel Kuta Essien a social activist and willing to give back to the society through Molex Foundation Africa.`,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2FUntitled-8.png?alt=media&token=e6b617ae-c149-4cef-8de4-99fd90f569d2",
    category: "executive",
    linkedin: "https://linkedin.com/in/kwame-nkrumah",
    twitter: "https://twitter.com/kwamenk",
  },
  {
    id: "3",
    name: "Stephen Nyankson",
    title: "IT Lead",
    bio: `
    Stephen Nyankson is a dedicated IT professional with a Bachelor's Degree in Computer Science from the University of Cape Coast. He currently works at RevGen Technologies, a software development company, as a Software Engineer, and also serves as the STEM Projects Lead and Chief STEM Facilitator for MOLEX Foundation Africa.

Stephen joined the Foundation in November 2023 and has since played a key role in driving impactful STEM initiatives. With a passion for technology and a strong commitment to giving back to society, he continues to merge his expertise in software engineering with youth empowerment programs.

Before joining RevGen Technologies, Stephen worked at the University of Cape Coast as an IT Support Specialist, where he provided critical technical solutions for staff and students, and at Copianto AI as a Backend Developer, where he contributed to building and scaling AI-driven applications.

He is not only committed to advancing his career in Software Engineering but also to creating opportunities for others through innovative projects and community engagement. Guided by his vision of making the world more connected, Stephen is eager to contribute his skills to achieve organizational goals while continually improving himself.`,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2Fsteve.png?alt=media&token=46fc0cdc-25ca-49c3-bc58-944e008ceb7a",
    category: "executive",
    linkedin: "https://linkedin.com/in/fatima-diallo",
    twitter: "https://twitter.com/fatimadiallo",
  },
  {
    id: "4",
    name: "Ato-Turkson Daniel",
    title: "Operations",
    bio: `
    Born and raised in Nyanfeku Ekroful, in the Abura-Asebu-kwamankese District of Central Ghana, Mr. Ato-Turkson Daniel's journey embodies a commitment to education and community service. Beginning his schooling in Nyanfeku Ekroful, he later pursued his secondary education at Academy of Christ the King and later moverd to Sammo Otoo to better the result where is studiedBusinessas a course, both located in Cape Coast, Central Region.

In 2017, he embarked on a career path, starting as a Sales Executive Officer at AFB Finance (now LetSheGo Savings and Loans), before transitioning to TF Finance Service as a Loan Master.

In 2019, he furthered his education at the Premier and largest University in Ghana, University of Ghana- Legon to pursue B.A Accounting and Sociology.

Deeply passionate about service, Mr. Ato-Turkson has been actively involved in numerous community organizations, including the Future Leaders Advocacy Group (FLAG), Abura Asebu Kwamankese Tertiary Student and Associates (AAKTSA), Nature Matters Foundation, EmmCom Foundation, ENACTUS UG. He has led various initiatives focusing on youth empowerment, environmental sustainability, and societal responsibility. His guiding principle, "No one owns us a responsibility but we own the society a responsibility," underscores his dedication to effecting positive change.

Currently, Mr. Ato-Turkson serves as a Service Personnel at the University of Cape Coast Directorate of Academic Affairs, working within the Admissions Section.
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2FIMG_4130.jpg?alt=media&token=fe096dea-4c54-440d-a099-b578a5d1ed46",
    category: "executive",
    linkedin: "https://linkedin.com/in/fatima-diallo",
    twitter: "https://twitter.com/fatimadiallo",
  },

   {
    id: "4",
    name: "Prince Nana Tsiwah",
    title: "IT Director",
    bio: `
   N/A
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2FUntitled-4.png?alt=media&token=19025916-dadf-4616-b300-60e046b4fbbf",
    category: "executive",
    linkedin: "https://linkedin.com/in/fatima-diallo",
    twitter: "https://twitter.com/fatimadiallo",
  },

   {
    id: "6",
    name: "Dominic Ebo Arhin",
    title: "Communications",
    bio: `
    N/A
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2FUntitled-2.png?alt=media&token=a90c0439-11e5-49bd-95dd-1d689325de64",
    category: "executive",
    linkedin: "https://linkedin.com/in/fatima-diallo",
    twitter: "https://twitter.com/fatimadiallo",
  },

  {
    id: "7",
    name: "Richmond Stephens",
    title: "Production",
    bio: `
    N/A
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fexecutives%2FMIN.%20RICH.jpg?alt=media&token=778a29ad-b4da-4366-830e-5af751e8ca79",
    category: "executive",
    linkedin: "https://linkedin.com/in/fatima-diallo",
    twitter: "https://twitter.com/fatimadiallo",
  },
];

export const advisoryCouncil: TeamMember[] = [
  {
    id: "1",
    name: "Prof. Wangari Maathai Jr.",
    title: "Environmental Policy Advisor",
    bio: "Prof. Wangari Maathai Jr. is a distinguished environmental scientist and policy expert who brings deep expertise in sustainable development and climate resilience to our Advisory Council. Following in the footsteps of her renowned mother, she has dedicated her career to advancing environmental conservation and community empowerment across Africa. Prof. Maathai Jr. holds a Ph.D. in Environmental Science from Stanford University and currently serves as Professor of Environmental Policy at the University of Nairobi. She has over 18 years of experience working with international environmental organizations including the United Nations Environment Programme, where she led climate adaptation initiatives across 12 African countries. Her research on community-based conservation has been published in over 40 peer-reviewed journals and has influenced environmental policy at national and regional levels. Prof. Maathai Jr. has been instrumental in developing innovative approaches to environmental education and has trained over 5,000 community leaders in sustainable resource management. She serves on the advisory boards of multiple environmental organizations and has received numerous awards including the Goldman Environmental Prize.",
    image:
      "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "advisory",
    linkedin: "https://linkedin.com/in/wangari-maathai-jr",
  },
  {
    id: "2",
    name: "Dr. Kofi Antwi",
    title: "Education Technology Advisor",
    bio: "Dr. Kofi Antwi is a leading expert in educational technology and digital innovation with a particular focus on leveraging technology to improve learning outcomes in underserved communities. As our Education Technology Advisor, he provides strategic guidance on integrating cutting-edge technology solutions into our STEM education and youth empowerment programs. Dr. Antwi earned his Ph.D. in Educational Technology from MIT and has over 15 years of experience developing and implementing technology-enhanced learning solutions across Africa. He previously served as Chief Technology Officer for the African Virtual University, where he led the development of online learning platforms that have reached over 100,000 students across 27 countries. His innovative work in mobile learning and artificial intelligence for education has been recognized globally, and he has consulted for UNESCO, the World Bank, and multiple African governments on digital education strategies. Dr. Antwi is also the founder of EduTech Africa, a nonprofit organization that provides technology training to teachers and students in rural communities. His research on culturally responsive educational technology has been published in leading academic journals.",
    image:
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "advisory",
    linkedin: "https://linkedin.com/in/kofi-antwi",
  },
  {
    id: "3",
    name: "Dr. Aisha Patel",
    title: "Gender Equality Advisor",
    bio: "Dr. Aisha Patel is a globally recognized expert in gender equality, women's empowerment, and social justice with extensive experience designing and implementing programs that advance women's rights across developing countries. As our Gender Equality Advisor, she provides strategic guidance on ensuring all our programs are gender-sensitive and contribute to breaking down barriers that limit opportunities for girls and women. Dr. Patel holds a Ph.D. in Gender Studies from Oxford University and has over 20 years of experience working with international development organizations including UN Women, where she served as Regional Director for Africa. Her groundbreaking research on women's economic empowerment has influenced policy at the highest levels and has been instrumental in designing programs that have benefited over 500,000 women across sub-Saharan Africa. Dr. Patel has authored three books on gender and development and has been a keynote speaker at major international conferences. She currently serves as Senior Fellow at the Brookings Institution and is a board member of several organizations focused on women's rights and empowerment.",
    image:
      "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "advisory",
    linkedin: "https://linkedin.com/in/aisha-patel",
  },
  {
    id: "4",
    name: "Prof. Chinua Okoro",
    title: "Youth Development Advisor",
    bio: "Prof. Chinua Okoro is a distinguished youth development specialist and social entrepreneur who brings innovative approaches to youth empowerment and leadership development. As our Youth Development Advisor, he provides strategic guidance on creating programs that effectively engage young people and prepare them for leadership roles in their communities. Prof. Okoro holds a Ph.D. in Social Psychology from Harvard University and has dedicated his career to understanding and addressing the unique challenges facing African youth. He has over 16 years of experience developing youth programs and has worked with organizations including UNICEF, where he led youth empowerment initiatives across West Africa. Prof. Okoro is the founder of the African Youth Leadership Institute, which has trained over 10,000 young leaders across 20 countries. His research on youth entrepreneurship and leadership development has been published extensively, and he has been recognized with multiple awards including the Ashoka Fellowship for social entrepreneurship. He currently serves as Professor of Social Innovation at the University of Cape Town and maintains active involvement in youth mentorship programs.",
    image:
      "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "advisory",
    linkedin: "https://linkedin.com/in/chinua-okoro",
  },
  {
    id: "5",
    name: "Dr. Fatou Sow",
    title: "Public Health Advisor",
    bio: "Dr. Fatou Sow is a leading public health expert and epidemiologist who brings extensive experience in community health systems strengthening and health program implementation across Africa. As our Public Health Advisor, she provides strategic guidance on integrating health components into our programs and ensuring our initiatives contribute to improved health outcomes in the communities we serve. Dr. Sow earned her medical degree from the University of Dakar and completed her Ph.D. in Epidemiology at Johns Hopkins University. With over 18 years of experience in public health, she has led major health initiatives across francophone Africa and has been instrumental in strengthening health systems in underserved regions. Dr. Sow previously served as Country Director for Partners in Health in Senegal and has worked extensively with the World Health Organization on maternal and child health programs. Her research on community health worker programs and health system strengthening has been published in leading medical journals, and she has been recognized for her contributions to global health. She currently serves as Professor of Global Health at the Institute of Tropical Medicine in Antwerp and continues to advise governments and international organizations on health policy.",
    image:
      "https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "advisory",
    linkedin: "https://linkedin.com/in/fatou-sow",
  },
  {
    id: "6",
    name: "Mr. Olumide Adebayo",
    title: "Innovation & Technology Advisor",
    bio: 'Mr. Olumide Adebayo is a visionary technology entrepreneur and innovation expert who brings cutting-edge insights on leveraging technology for social impact and sustainable development. As our Innovation & Technology Advisor, he provides strategic guidance on incorporating innovative technologies and approaches into our programs to maximize effectiveness and reach. Mr. Adebayo holds a Master\'s degree in Computer Science from Stanford University and has over 14 years of experience in technology entrepreneurship and innovation. He is the founder and CEO of TechHub Africa, a leading technology incubator that has supported over 200 African startups and has been instrumental in developing the African tech ecosystem. His work has been recognized globally, and he has been featured as one of Forbes\' "30 Under 30" and TIME Magazine\'s "Next Generation Leaders." Mr. Adebayo has extensive experience in fintech, edtech, and healthtech solutions designed specifically for African markets. He serves on the advisory boards of multiple technology organizations and has been a keynote speaker at major technology conferences worldwide. His passion for using technology to solve African challenges aligns perfectly with our mission to empower communities through innovation.',
    image:
      "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=400",
    category: "advisory",
    linkedin: "https://linkedin.com/in/olumide-adebayo",
  },
];

export const boardMembers: TeamMember[] = [
  {
    id: "1",
    name: "Capt. Tabitha Simons-Dadzie",
    title: "Chair",
    bio: `
    Captain Tabitha Simons-Dadzie's life journey is a testament to perseverance and dedication to healthcare. Born in Nyanfeku Ekroful, Ghana, she began her education locally before pursuing nursing at Cape Coast Nursing and Midwifery Training School, driven by her passion for quality healthcare.

Tabitha's career flourished as she contributed significantly to healthcare institutions, including Cape Coast Teaching Hospital, Cape Coast Metropolitan Hospital, Adisadel, and Ewim Polyclinic, earning respect for her unwavering dedication and professionalism.

She further specialized in Ears, Nose, and Throat (E.N.T) medicine at Komfo Anokye Teaching Hospital, enhancing her ability to provide specialized care. Her journey then took her to the Ghana Armed Forces, where she excelled as an E.N.T Specialist, achieving the rank of Captain and serving at the 37 Military Hospital in Accra.

Beyond her medical career, Tabitha chairs the Molex Foundation Africa, advocating for the girl- child in STEM fields and gender equality. My commitment to the well-being of others, especially the girl-child has propelled me to give back to society. I am passionate about helping the girl- child to bridge gender disparity and ensuring that the girl-child is mentored and coached to be able to learn, decide, and thrive in STEM fields.
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2Fcaptain.jpg?alt=media&token=88412fcb-1b7c-436c-8e7f-ce93923e63e1",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

  
   {
    id: "2",
    name: "Dr. Francis Nkrumah",
    title: "Member",
    bio: `
   N/A
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2F2A1A1078.jpg?alt=media&token=eaac1bf4-3970-41c5-885f-3842a44810c2",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

   {
    id: "3",
    name: "Dr. Nathaniel Bimpong",
    title: "Member",
    bio: `
N/A Tutor at Mfantsipim School and a PhD candidate specializing in geography and climatology. His passion is to care for the environment and its scarce resources for the sole benefit of venerable children and woman, both now and in the future.
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2F3M3A0149.jpg?alt=media&token=ec5f9dc1-193b-4751-b4ef-f416b4ad35f3",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

   {
    id: "4",
    name: "Dr. Regina Esi Turkson",
    title: "Member",
    bio: `
Researcher in Neural Networks, Intelligence System, Deep Learning, Intelligence Computation, Optimization, Spiking Neural Networks and Computer Networks and Security. Seeking to work on any computer related research projects and also to work in an academic institution.
    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2F2A1A1342.jpg?alt=media&token=1a34b64f-b0f8-4523-8a1f-c28940062961",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

   {
    id: "5",
    name: "Mr. Frank Abeku Adams",
    title: "Member",
    bio: `
Entrepreneur  
 `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2FPicture1.png?alt=media&token=cd17d6e5-560b-4597-908e-7073bc971253",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },


   {
    id: "6",
    name: "Flt. Lt. Phyllis Otchere-Djan",
    title: "Member",
    bio: `
N/A    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2FPicture2.png?alt=media&token=efcb12de-fda3-4527-83cb-f4ed91d6c0a8",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

   {
    id: "7",
    name: "Miss Appiah Nana Ama",
    title: "Member",
    bio: `
N/A    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2FPicture4.png?alt=media&token=fb7c2547-7090-4c3c-b2dc-aefedad632e8",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

   {
    id: "8",
    name: "Dr. Mrs. Joana Akorfa Amuzu",
    title: "Member",
    bio: `
N/A    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2FPicture5.png?alt=media&token=ca0e77e0-1486-4c7f-b454-18151b42455a",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

  {
    id: "9",
    name: "Mr. Raphealus Guido Coleman",
    title: "Member",
    bio: `
N/A    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2FPicture6.png?alt=media&token=3de0cd81-1ce0-4427-85ee-534f7e54de7b",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

  {
    id: "10",
    name: "Miss Mariam Abubekar",
    title: "Member",
    bio: `
N/A    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2F2A1A1329.jpg?alt=media&token=9cbbbcfd-8a55-4aba-aad4-e8f74ecef098",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

  {
    id: "11",
    name: "Theresa Nkrumah",
    title: "Secretary",
    bio: `
N/A    `,
    image:
      "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2FPicture8.png?alt=media&token=5adc7e8e-7c91-4a03-a6e4-df3a7c34c285",
    category: "board",
    linkedin: "https://linkedin.com/in/kwame-asante",
  },

//   {
//     id: "12",
//     name: "Capt. Tabitha Simons-Dadzie",
//     title: "Chair",
//     bio: `
//     Captain Tabitha Simons-Dadzie's life journey is a testament to perseverance and dedication to healthcare. Born in Nyanfeku Ekroful, Ghana, she began her education locally before pursuing nursing at Cape Coast Nursing and Midwifery Training School, driven by her passion for quality healthcare.

// Tabitha's career flourished as she contributed significantly to healthcare institutions, including Cape Coast Teaching Hospital, Cape Coast Metropolitan Hospital, Adisadel, and Ewim Polyclinic, earning respect for her unwavering dedication and professionalism.

// She further specialized in Ears, Nose, and Throat (E.N.T) medicine at Komfo Anokye Teaching Hospital, enhancing her ability to provide specialized care. Her journey then took her to the Ghana Armed Forces, where she excelled as an E.N.T Specialist, achieving the rank of Captain and serving at the 37 Military Hospital in Accra.

// Beyond her medical career, Tabitha chairs the Molex Foundation Africa, advocating for the girl- child in STEM fields and gender equality. My commitment to the well-being of others, especially the girl-child has propelled me to give back to society. I am passionate about helping the girl- child to bridge gender disparity and ensuring that the girl-child is mentored and coached to be able to learn, decide, and thrive in STEM fields.
//     `,
//     image:
//       "https://firebasestorage.googleapis.com/v0/b/auction-c5969.appspot.com/o/MOLEX%20FOUNDATION%2Fboard%2Fcaptain.jpg?alt=media&token=88412fcb-1b7c-436c-8e7f-ce93923e63e1",
//     category: "board",
//     linkedin: "https://linkedin.com/in/kwame-asante",
//   },
  
];

// Function to generate gallery items from program galleries
export const generateGalleryItemsFromPrograms = (): GalleryItem[] => {
  const galleryItems: GalleryItem[] = [];
  let idCounter = 1;

  programs.forEach((program) => {
    if (program.gallery && program.gallery.length > 0) {
      program.gallery.forEach((imageUrl, index) => {
        galleryItems.push({
          id: `${program.id}-${idCounter}`,
          image: imageUrl,
          thumbnail: imageUrl, // Using same URL for thumbnail, could be optimized later
          alt: `${program.title} - Image ${index + 1}`,
          category: program.id,
        });
        idCounter++;
      });
    }
  });

  return galleryItems;
};

// Generate gallery items from programs
export const galleryItems: GalleryItem[] = generateGalleryItemsFromPrograms();
