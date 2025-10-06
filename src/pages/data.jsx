// data.js
import { FiHeart, FiActivity, FiZap } from "react-icons/fi";
import { Rocket, DollarSign, Map, Star, Shield, Heart, Trophy,Briefcase , Sliders, CheckCircle,Zap } from 'lucide-react'; 
import images from '../assets/images'
import { image } from "framer-motion/client";



export const cardData = [
  {
    id: 1,
    title: "Our Mission",
    description:
      "We empower pharmaceutical, biotech, and healthcare organizations to achieve sustainable growth, unlock market access, and capture long-term value.",
    icon: FiHeart,                    
    bgColor: "bg-gradient-to-br from-[#FDE2F3] via-[#FFF] to-[#F9E0E9]",
  },
  {
    id: 2,
    title: "Our Expertise",
    description:
      "Strategic Consulting | Transaction Advisory | Pricing & Market Access | Localization & Manufacturing.",
    icon: FiActivity,
    bgColor: "bg-gradient-to-br from-[#DFB3E5] via-[#FFF] to-[#DFB3E5]",
  },
  {
    id: 3,
    title: "Our Partnership",
    description:
      "At Averon, we combine deep life sciences expertise with a strong local presence to help global and regional players succeed in the Middle East.",
    icon: FiZap,
    bgColor: "bg-gradient-to-br from-[#CFFAF2] via-[#FFF] to-[#CFFAF2]",
  },
  {
    id: 4,
    title: "Strategic Collaborations",
    description:
      "We build strong alliances by blending industry expertise with local insights, enabling businesses to thrive across diverse markets.",
    icon: FiZap,
    bgColor: "bg-gradient-to-br from-[#B4D9FB] via-[#FFF] to-[#B4D9FB]",
  },
];


// why us data //
export const features = [
    {
      id: 1,
      text: 'Proven Expertise – 100+ commercial, clinical, regulatory & IP due diligences',
    },
    {
      id: 2,
      text: 'Global Reach, Local Insights – Deep networks in APAC, ME & Africa',
    },
    {
      id: 3,
      text: 'Healthcare & Life Sciences Focus – Pharma, MedTech, Consumer Health & Digital Health',
    },
    {
      id: 4,
      text: 'Performance-Based Engagements – Flexible models aligned to your success',
    },
  ];



export const whyUsData = [
  {
    title: "Expense Efficiency",
    text: "This service leverages analytics to enhance care quality and pinpoint opportunities for cost reduction, catering to healthcare providers seeking.",
    image: images.healthImage1,
    bgColor: "bg-pink-100",
  },
  {
    title: "",
    text: "",
    image: images.healthImage1,
    bgColor: "",
  },
  {
    title: "Data Insights & Risk Assessment",
    text: "Utilizing data to forecast potential health issues and classify patients according to their risk profiles, promoting proactive healthcare and efficient resource allocation.",
    image: images.healthImage1,
    bgColor: "bg-purple-200",
  },
  {
    title: "",
    text: "",
    image: images.healthImage1,
    bgColor: "",
  },
];


const ICON_BASE_CLASSES = "text-emerald-600 w-8 h-8 md:w-10 md:h-10";
export const servicesData = [
  {
    id: 1,
    iconKey: 'rocket',
    title: 'Launch Excellence',
    description: [
      'End-to-end planning of launch objectives, milestones, and execution pathways.',
      'Assessment of launch preparedness, KPI frameworks, and stakeholder engagement.',
      'Tracking outcomes, identifying gaps, and driving corrective actions for sustained success.',
    ],
    tag: 'Execution',
  },
  {
    id: 2,
    iconKey: 'dollar',
    title: 'Pricing & Market Access',
    description: [
      'Pricing strategy development & value-based pricing models.',
      'Market access pathway design & reimbursement submissions.',
      'Competitive pricing intelligence & scenario modeling.',
    ],
    tag: 'Strategy',
  },
  {
    id: 3,
    iconKey: 'map',
    title: 'Localization Strategy',
    description: [
      'Distributor benchmarking (Commercial terms structuring, Benchmarking of commercial terms).',
      'Local Manufacturing (CMO selection, Commercial terms benchmarking).',
      'Feasibility Studies.',
    ],
    tag: 'Operations',
  },
  {
    id: 4,
    iconKey: 'strategy',
    title: 'Strategy Consulting',
    description: [
      'Market entry, geographic expansion, and commercial strategy development.',
      'Portfolio optimization, asset prioritization, and investment feasibility assessments.',
      'Cross-functional alignment, organizational design, and operational excellence.',
    ],
    tag: 'Strategy',
  },
];

export const IconMap = {
    'rocket': <Rocket className={ICON_BASE_CLASSES} />,
    'dollar': <DollarSign className={ICON_BASE_CLASSES} />,
    'map': <Map className={ICON_BASE_CLASSES} />,
    'strategy': <Zap className={ICON_BASE_CLASSES} />, 
};



// services //
 
const CARD_ICON_CLASSES = "w-6 h-6 text-white";

export const serviceData = [
  {
    id: 1,
    icon: <Star className={CARD_ICON_CLASSES} />,
    title: '5 Star Rating',
    subtitle: 'Highest reviews from customers.',
    bgColor: 'bg-indigo-500',
  },
  {
    id: 2,
    icon: <Shield className={CARD_ICON_CLASSES} />,
    title: 'Certified Professionals',
    subtitle: 'All staff are fully vetted and certified.',
    bgColor: 'bg-sky-500',
  },
  {
    id: 3,
    icon: <Zap className={CARD_ICON_CLASSES} />,
    title: 'Fast Service Delivery',
    subtitle: 'Quick and efficient project timelines.',
    bgColor: 'bg-fuchsia-500',
  },
  {
    id: 4,
    icon: <Heart className={CARD_ICON_CLASSES} />,
    title: 'Customer Satisfaction',
    subtitle: '100% money-back guarantee policy.',
    bgColor: 'bg-teal-500',
  },
  {
    id: 5,
    icon: <Trophy className={CARD_ICON_CLASSES} />,
    title: 'Award Winning Support',
    subtitle: 'Recognized globally for excellence.',
    bgColor: 'bg-rose-500',
  },
];


// professionals //
export const SPECIALISTS_DATA = [
  {
    id: 1,
    name: "Madava Hegde",
    specialty: "Founding Partner & CEO",
    imageUrl: images.professional1, 
  },
  {
    id: 2,
    name: "Aman Preet",
    specialty: "Healthcare & Pharma Specialist",
    imageUrl: images.professional2,
  },
]


// professionals popup //
export const MODAL_DATA_MAPPING = {
  1: {
    name: "Madava Hegde",
    specialty: "Founding Partner & CEO",
    experience: "12+ years in strategy consulting & commercial due diligence across Pharma & Lifesciences",
    bio: `
Advised on 100+ transactions across US, Europe, India, SE Asia, Middle East & Africa.

Worked with some of the world’s leading investors — including a major sovereign wealth fund from the Middle East, top global private equity firms from the US, Europe, and Asia, as well as prominent India-focused and family investment groups.

Advised generic players on portfolio strategy, market expansion & operational improvement.

Former roles: IQVIA, PwC (Deal Strategy), EY-Parthenon (Commercial Diligence).
    `,
    education: [
      "MBA (Gold Medalist) – IIM Indore",
      "BE (Mechanical) – NITK Surathkal"
    ],
    expertise: [
      "Portfolio Development – Dossier sourcing, contract negotiation",
      "Growth Strategy – Product & geography expansion",
      "Commercial Diligence – Investment evaluation"
    ],
    keyEngagements: [
      "Feasibility & diligence of insulin plants (India & Saudi Arabia)",
      "Portfolio selection for greenfield oral solid plant (KSA)",
      "Diligence of leading generic player in KSA for PE investment",
      "100+ diligences across formulation, API & packaging sectors in emerging markets",
      "15+ API sector diligences in India"
    ],
    profileUrl: "#",
    imageUrl: images.professional1
  },
  2: {
    name: "Aman Preet",
    specialty: "Healthcare & Pharma Specialist",
    experience: "10+ years in healthcare & pharma consulting across US, UK, Middle East & SE Asia",
    bio: `
6+ years in strategy consulting, feasibility studies & due diligence for payors, providers & pharma firms.

Expertise in: market entry, portfolio strategy, digital transformation, and enterprise effectiveness.

Former roles: IQVIA (FIC), Cognizant (Healthcare), Accenture (Life Sciences).
    `,
    education: [
      "MBA – XLRI Jamshedpur",
      "B.Tech (Computer Science) – Amity University, Noida"
    ],
    expertise: [
      "Commercial due diligence",
      "Market entry & go-to-market strategies",
      "Strategic planning",
      "Geo-expansion",
      "Operational excellence & cost optimization"
    ],
    keyEngagements: [
      "Led due diligence for US pharma firm evaluating acquisitions in Sub-Saharan Africa",
      "Assessed investment feasibility for insulin & greenfield pharma operations in Saudi Arabia",
      "Market sizing & opportunity analysis for rare diseases & specialty generics (US & MENA)",
      "Developed US entry & product strategy for global pharmacy retail player"
    ],
    profileUrl: "#",
    imageUrl: images.professional2
  }
};


// zyme refrence //
export const testimonials = [
  {
    text: "Dr. John Smith is outstanding. His professionalism, compassion, and true dedication to his patients shine through in every visit. I always feel valued and well-cared for. Highly recommended.",
    name: "Michael Johnson",
    role: "Slack Inc, New York team",
  },
  {
    text: "Amazing care and attention. Truly grateful for the exceptional service.",
    name: "Sarah Williams",
    role: "Google, California team",
  },
];



// service Page //
export const serviceBlocks = [
    {
      image: images.service1,
      tag: "LAUNCH",
      date: "April 18, 2024",
      title: "Launch Excellence",
      points: [
        "End-to-end planning of launch objectives, milestones, and execution pathways.",
        "Assessment of launch preparedness, KPI frameworks, and stakeholder engagement.",
        "Tracking outcomes, identifying gaps, and driving corrective actions for sustained success."
      ]
    },
    {
      image: images.service2,
      tag: "PRICING",
      date: "April 18, 2024",
      title: "Pricing & Market Access",
      points: [
        "Pricing strategy development & value-based pricing models.",
        "Market access pathway design & reimbursement submissions.",
        "Competitive pricing intelligence & scenario modeling."
      ]
    },
    {
      image: images.service3,
      tag: "LOCALIZATION",
      date: "June 18, 2024",
      title: "Localization Strategy",
      points: [
        "Distributor benchmarking (Commercial terms structuring, benchmarking of commercial terms).",
        "Local manufacturing (CMO selection, commercial terms benchmarking).",
        "Feasibility studies."
      ]
    }
  ];

  export const extraBlocks = [
    {
      image: images.service4,
      tag: "STRATEGY",
      date: "July 25, 2024",
      title: "Strategy Consulting",
      points: [
        "Market entry, geographic expansion, and commercial strategy development.",
        "Portfolio optimization, asset prioritization, and investment feasibility assessments.",
        "Cross-functional alignment, organizational design, and operational excellence."
      ]
    },
    {
      image: images.service5,
      tag: "TRANSACTIONS",
      date: "August 2, 2024",
      title: "Transactions",
      points: [
        "Commercial, technical, and regulatory due diligence with valuation and deal structuring.",
        "Strategic partnerships, licensing, and negotiation support.",
        "Post-deal integration planning, execution, and value capture."
      ]
    }
  ];

  export const companyTieupLeftData = [
  {
    title: "Main Slide Title",
    description:
      "Partnering with life science organizations in the Middle East to drive value creation and sustainable growth",
  },
  {
    title: "Strategic specialisation in Life science sector",
    description: "(API, CMO, CDMO, Biotech, Formulation)",
  },
 
];

export const companyTieupRightData = [
  {
    title: "Trusted stakeholder relationships in the local markets",
    description:
      "across procurement agencies, payors, regulators, distributors",
  },
  {
    title: "Proven track record in transactions",
    description:
      "100+ transactions - Commercial, Clinical, Technical, Regulatory and IP Diligences",
  },
  
];


// strategy to mexecution //
 export const FEATURES_DATA = [
    {
      category: "Life Sciences Focus",
      title: "100% dedicated to the pharma, biotech, and healthcare ecosystem",
      details: "we speak your language and understand your challenges.",
      iconColor: 'text-pink-600',
      badgeColor: 'bg-pink-100/70',
      borderColor: 'border-pink-300',
      shadowColor: 'rgba(236, 72, 153, 0.3)', // Pink-500 shadow
      backImageUrl: images.pattern
    },
    {
      category: "Local Expertise, Global Reach",
      title: "Established presence in the Middle East",
      details: "with 150+ affiliated consultants in Europe via Zyme Biotech, ensuring every solution blends local insight with global best practices.",
      iconColor: 'text-indigo-600',
      badgeColor: 'bg-indigo-100/70',
      borderColor: 'border-indigo-300',
      shadowColor: 'rgba(99, 102, 241, 0.3)', // Indigo-500 shadow
      backImageUrl: 'https://placehold.co/400x400/c7d2fe/4338ca?text=World', // Back Image URL added
    },
    {
      category: "Proven Track Record",
      title: "Over 100 engagements and transactions delivered",
      details: "across commercial, regulatory, clinical, and technical domains.",
      iconColor: 'text-green-600',
      badgeColor: 'bg-green-100/70',
      borderColor: 'border-green-300',
      shadowColor: 'rgba(16, 185, 129, 0.3)', // Green-500 shadow
      backImageUrl: 'https://placehold.co/400x400/a7f3d0/059669?text=Target', // Back Image URL added
    },
    {
      category: "Trusted Relationships",
      title: "Strong networks with regulators, procurement agencies, payors, and distributors",
      details: "enabling faster access and smoother execution.",
      iconColor: 'text-yellow-600',
      badgeColor: 'bg-yellow-100/70',
      borderColor: 'border-yellow-300',
      shadowColor: 'rgba(245, 158, 11, 0.3)', // Yellow-500 shadow
      backImageUrl: 'https://placehold.co/400x400/fde68a/d97706?text=Trust', // Back Image URL added
    },
    {
      category: "End-to-End Capability",
      title: "From feasibility studies to post-deal integration",
      details: "we provide solutions that are both strategic and execution-ready.",
      iconColor: 'text-purple-600',
      badgeColor: 'bg-purple-100/70',
      borderColor: 'border-purple-300',
      shadowColor: 'rgba(168, 85, 247, 0.3)', // Purple-500 shadow
      backImageUrl: 'https://placehold.co/400x400/d8b4fe/7c3aed?text=Flow', // Back Image URL added
    },
  ];



  // about us //
  export const contentData = [
    {
      number: 1,
      title: "Our Mission",
      content: "To unlock sustainable growth in healthcare and life sciences by bridging global expertise with local market realities.",
      gradient: 'from-blue-200/50 to-indigo-200/50',
    },
    {
      number: 2,
      title: "What Sets Us Apart",
      content: 
        `Deep Sector Focus – Strategic specialization in pharmaceuticals, biotech, API, CMO/CDMO, and formulations.\n\n` +
        `Local Credibility – Long-standing relationships with regulators, procurement agencies, payors, and distributors.\n\n` +
        `Proven Experience – 100+ transactions and strategic projects delivered across commercial, technical, regulatory, and IP domains.\n\n` +
        `Value Creation Mindset – Supporting portfolio companies through licensing, diversification, and cost optimization initiatives.`,
      gradient: 'from-purple-200/50 to-pink-200/50',
    },
    {
      number: 3,
      title: "Capabilities",
      content: [
        {
          header: "Launch Excellence",
          description: "We design and execute launch strategies that maximize impact. From defining objectives and milestones to measuring outcomes and correcting course, our approach ensures successful and sustainable product introductions.",
        },
        {
          header: "Pricing & Market Access",
          description: "Our pricing and market access experts design value-based models and reimbursement strategies that improve affordability while protecting margins. We provide competitive pricing intelligence, scenario modeling, and submission support for long-term success.",
        },
        {
          header: "Localization Strategy",
          description: "We help organizations establish a strong local footprint by evaluating distributors, benchmarking commercial terms, and enabling local manufacturing partnerships. Our feasibility studies and strategic frameworks empower clients to make confident localization decisions.",
        },
        {
          header: "Strategy Consulting",
          description: "From market entry and geographic expansion to portfolio optimization and operational excellence, we deliver actionable strategies that align organizations for growth and resilience.",
        },
        {
          header: "Transactions",
          description: "Our transaction advisory team supports investors and companies across commercial, technical, and regulatory due diligence. We provide valuation and deal structuring support, negotiate partnerships, and guide post-deal integration to capture synergies and maximize value.",
        },
      ],
      gradient: 'from-sky-200/50 to-cyan-200/50',
    },
  ];
