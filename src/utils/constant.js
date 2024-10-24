import { AiOutlineCheckCircle } from "react-icons/ai";
import { RiFileTextLine } from "react-icons/ri";

import { FaBriefcase } from "react-icons/fa6";
import { AiOutlineGlobal } from "react-icons/ai";

import { BsLaptop } from "react-icons/bs";
import { IoMdSettings } from "react-icons/io";
import { IoShieldCheckmark } from "react-icons/io5";
import { BiSupport } from "react-icons/bi";
import { LiaSearchSolid } from "react-icons/lia";

export const eligiblityData = [
  {
    title: "Apply Online",
    description:
      "Complete Application Form + Aptitude Test. Check if you are ready for Global Companies.",
    Icon: RiFileTextLine,
    badge: "15 min test",
  },

  {
    title: "Secure Your Spot",
    description: "Start your journey with ISDA.",
    Icon: AiOutlineCheckCircle,
    badge: "100% Placement Guarantee",
  },
];

export const weeksCurriculumData = [
  {
    track: "Core Business Communication and Client Management",
    duration: {
      from: 1,
      to: 4,
    },
    factors: [
      "80 Hours of Live Sessions",
      "15 Real Business Case Studies",
      "Personalised 1:1 Feedback",
    ],
    trackData: [
      {
        week: 1,
        title: "Mastering Communication Fundamentals",
        skills: [
          "Professional self-introduction",
          "business email writing",
          "non-verbal communication",
          "active listening",
          "presentation skills",
        ],
        outcome:
          "Build confidence in introducing yourself, craft effective emails, and improve overall communication through practical application.",
      },

      {
        week: 2,
        title: "Client Handling Excellence",
        skills: [
          "Client communication",
          "problem-solving",
          "customer obsession",
          "Excel basics for business",
        ],
        outcome:
          "Enhance client satisfaction and manage challenging client scenarios with precision.",
      },

      {
        week: 3,
        title: "Advanced Negotiation Techniques",
        skills: [
          "Negotiation strategies",
          "bargaining tactics",
          "persuasive communication",
          "win-win solutions",
        ],
        outcome:
          "Develop the ability to negotiate effectively in business deals and present negotiation strategies.",
      },

      {
        week: 4,
        title: "Conflict Resolution",
        skills: [
          "Conflict mediation",
          "communication in conflict",
          "resolution techniques",
          "email drafting for conflict resolution",
        ],
        outcome:
          "Learn to identify and mediate workplace conflicts, and apply resolution strategies in real-world scenarios.",
      },
    ],
  },
  {
    track: "Leadership, Adaptability, and Portfolio Development",
    duration: {
      from: 5,
      to: 8,
    },
    factors: [
      "100 Hours of Live Sessions",
      "15 Excel Based Case Studies",
      "ATS Complaint Portfolio Development",
    ],
    trackData: [
      {
        week: 5,
        title: "Adaptability in Dynamic Environments",
        skills: [
          "Flexibility",
          "resilience",
          "continuous learning",
          "stress management",
          "adaptability",
        ],
        outcome:
          "Build the mindset and skills to thrive in changing environments and handle uncertainty confidently",
      },

      {
        week: 6,
        title: "Leadership and Initiative",
        skills: [
          "Leadership styles",
          "decision-making under pressure",
          "motivating teams",
          "initiative-taking",
        ],
        outcome:
          "Develop leadership capabilities, motivate others, and make sound decisions in high-pressure situations",
      },

      {
        week: 7,
        title: "Teamwork and Collaboration",
        skills: [
          "Team collaboration",
          "conflict resolution",
          "trust-building",
          "diversity awareness",
        ],
        outcome:
          "Master collaboration within diverse teams, resolve conflicts, and build trust to drive team success.",
      },

      {
        week: 8,
        title: "Portfolio Development & LinkedIn Optimization",
        skills: [
          "Resume writing",
          "LinkedIn profile optimization",
          "portfolio presentation",
          "personal branding",
        ],
        outcome:
          "Create a compelling professional portfolio and LinkedIn profile to effectively showcase your skills to employers.",
      },
    ],
  },
  {
    track: "Career Readiness and Interview Mastery",
    duration: {
      from: 9,
      to: 12,
    },
    factors: [
      "20+ Mock Interviews",
      "STAR Interview Techniques",
      "Generative AI for Business",
    ],
    trackData: [
      {
        week: 9,
        title: "Defending Your Resume",
        skills: [
          "Behavioural interview techniques (STAR method)",
          "resume defence",
          "pitching yourself",
        ],
        outcome:
          "Master how to structure and present your experiences confidently in interviews",
      },

      {
        week: 10,
        title: "Aptitude Mastery for Business",
        skills: [
          "Quantitative aptitude",
          "logical reasoning",
          "data interpretation",
          "verbal reasoning",
        ],
        outcome:
          "Build critical reasoning and analysis skills to solve business problems effectively.",
      },

      {
        week: 11,
        title: "Interview Readiness & Mock Sessions",
        skills: [
          "Interview strategies",
          "generative AI for business",
          "business aptitude",
          "professional presentation",
        ],
        outcome:
          "Gain hands-on experience in mock interviews, aptitude tests, and AI-driven business solutions to prepare for high-impact roles.",
      },
    ],
  },
];

export const jobStats = [
  {
    subject: "Hiring Partners",
    point: "400+",
    logoPath: null,
    Icon: FaBriefcase,
  },

  {
    subject: "Average Time to Job",
    point: "15 weeks",
    logoPath: "/images/logo/rush.svg",
    Icon: null,
  },

  {
    subject: "Successful transitions for Freshers",
    point: "3000+",
    logoPath: "/images/logo/leadership.svg",
    Icon: null,
  },

  {
    subject: "High Demand Business Roles across Global Companies",
    point: "50+",
    logoPath: null,
    Icon: AiOutlineGlobal,
  },
];

export const educatorsData = [
  {
    profile: "/images/educators/4.png",
    name: "Ravi Kumar Gupta",
    profession: "IIT Delhi | IIM Lucknow | Cognizant",
    description:
      "IIT and IIM alumnus, second-time founder with 10+ years of experience. Expert in Ed-Tech and business strategy. Empowering 5,000+ Indians annually with job-ready skills to secure jobs at global companies.",
    quote: "Your Success, Our Mission!",
    profileUrl: "https://www.linkedin.com/in/ravi-kumar-gupta/",
  },
  {
    profile: "/images/educators/1.png",
    name: "Alok Anand",
    profession: "IIIT Kharagpur | BlackBuck | American Express",
    description:
      "IIT alumnus and second-time founder with 10+ years of experience. Leader in Tech and GenAI innovation. Architect-in-Chief of high-scale ed-tech operations, delivering top learning experiences to 50k+ learners.",
    quote: "Your Growth, Our Purpose!",
    profileUrl: "https://www.linkedin.com/in/alokanand9/",
  },
  {
    profile: "/images/educators/2.png",
    name: "Lalita Choudhary",
    profession: "Mithibai College | AlmaBetter",
    description:
      "A master communicator and top partnership builder, has built strong relationships with 700+ global companies and successfully placed 3,000+ young Indians in top jobs. A business leader, obsessed with student success.",
    quote: "Your Career, Our Obsession!",
    profileUrl: "https://www.linkedin.com/in/lalita-choudhary-a9ab911b3/",
  },
  {
    profile: null,
    name: "Gautam Rawat",
    profession: "IIM Lucknow | SPA, Delhi | JLL | Quickr",
    description:
      "IIM alumnus with 10+ years of experience excellence across Ed-Tech, and Real Estate. His creative skills in designing student learning products make learners' lives easier. Passionate about simplifying learning experiences for the best outcomes.",
    quote: "Creative Solutions, Seamless Learning!",
    profileUrl: "https://www.linkedin.com/in/grawat2/",
  },
  {
    profile: "/images/educators/5.png",
    name: "Monica Balakrishna",
    profession: "Empowering Talent, Transforming Futures!",
    description:
      "A powerhouse in international business, forges impactful recruiter partnerships, connecting global companies with right talent. Has a relentless pursuit towards operational excellence, has propelled careers of 2000+ learners.",
    quote: "Your Success, Our Mission!",
    profileUrl: "https://www.linkedin.com/in/monica-balakrishna-41837b1b8/",
  },

  {
    profile: "/images/educators/3.png",
    name: "Sai Araveti",
    profession: "IIT Delhi | UC Berkeley | SIG",
    description:
      "Forbes 30 Under 30, venture investor, and entrepreneur with 10+ years of experience. Obsessed with driving tech innovation, student success, and sustainable impact through creative solutions in Ed-Tech and venture capital.",
    quote: "Innovative Solutions, Effective Learning!",
    profileUrl: "https://www.linkedin.com/in/saiaraveti/",
  },
];

export const jobCurriculumData = [
  {
    Icon: IoMdSettings,
    track: "Logistics & Operations Roles",
    trackData: [
      {
        thumbnail: null,
        title: "Logistics Coordinator",
        industries: ["Manufacturing", "Retail", "Logistics"],
        stats: [
          {
            subject: "3000+",
            point: "hired this year",
          },
          {
            subject: "4.0 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "2", "7"],
      },
      {
        thumbnail: "/images/job-roles/1.png",
        title: "Operations Support Executive",
        industries: ["Corporate Offices", "Logistics", "Service Companies"],
        stats: [
          {
            subject: "1800+",
            point: "hired this year",
          },
          {
            subject: "3.8 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "2", "5"],
      },
    ],
  },

  {
    Icon: BsLaptop,
    track: "Business Executive Roles",
    trackData: [
      {
        thumbnail: "/images/job-roles/8.png",
        title: "Business Process Associate",
        industries: ["Large Corporations", "Growing Startups"],
        stats: [
          {
            subject: "2500+",
            point: "hired this year",
          },
          {
            subject: "4.5 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "2", "11"],
      },
      {
        thumbnail: "/images/job-roles/4.png",
        title: "Transaction Processing Officer",
        industries: ["Banking, Insurance", "Payment Gateways"],
        stats: [
          {
            subject: "1300+",
            point: "hired this year",
          },
          {
            subject: "4.0 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["16", "13", "14"],
      },
    ],
  },

  {
    Icon: IoShieldCheckmark,
    track: "Data & Risk Management Roles",
    trackData: [
      {
        thumbnail: "/images/job-roles/2.png",
        title: "Data Associate",
        industries: ["Retail, Logistics", "Corporate Services"],
        stats: [
          {
            subject: "2000+",
            point: "hired this year",
          },
          {
            subject: "4.2 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "2", "4"],
      },
      {
        thumbnail: "/images/job-roles/5.png",
        title: "Transaction Risk Investigator",
        industries: ["E-commerce, Fintech", "Financial Services"],
        stats: [
          {
            subject: "1500+",
            point: "hired this year",
          },
          {
            subject: "4.6 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "20", "11"],
      },
    ],
  },

  {
    Icon: BiSupport,
    track: "Customer Management",
    trackData: [
      {
        thumbnail: "/images/job-roles/3.png",
        title: "Customer Support Executive",
        industries: ["E-commerce", "Tech Support", "Telecom"],
        stats: [
          {
            subject: "2000+",
            point: "hired this year",
          },
          {
            subject: "3.5 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "2", "12"],
      },
    ],
  },

  {
    Icon: LiaSearchSolid,
    track: "Compliance & Product Roles",
    trackData: [
      {
        thumbnail: "/images/job-roles/7.png",
        title: "Compliance Specialist",
        industries: ["Finance, Healthcare", "Corporate Services"],
        stats: [
          {
            subject: "1200+",
            point: "hired this year",
          },
          {
            subject: "4.8 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "2", "17"],
      },

      {
        thumbnail: "/images/job-roles/6.png",
        title: "Product Compliance Associate",
        industries: ["E-commerce", "Manufacturing", "Tech"],
        stats: [
          {
            subject: "1500+",
            point: "hired this year",
          },
          {
            subject: "5.0 LPA",
            point: "Average Salary",
          },
        ],
        companies: ["1", "2", "11"],
      },
    ],
  },
];

export const faqsData = [
  {
    category: "Admission & Eligibility",
    faqs: [
      {
        question: "Who is eligible to apply for the program?",
        answer:
          "The program is open to recent graduates and early-career professionals who are eager to upskill and secure a position in global companies. It’s ideal for individuals looking to enter dynamic roles in areas like business operations, customer engagement, logistics, and compliance.",
      },

      {
        question: "Is there an entrance test or aptitude test for admission?",
        answer:
          "The test assesses your English skills and aptitude to determine your eligibility for the program and highlights areas for improvement ",
      },

      {
        question: "How do I apply for the program?",
        answer:
          "You can apply by taking the aptitude test on our website. Once you qualify, you can secure your spot by paying the enrollment fee.",
      },

      {
        question: "Is there a fee for the program?",
        answer:
          "Yes, we have a Hybrid Pay After Placement (PAP) model. You pay INR 20k upfront to secure your spot, and the rest is paid after you secure a job.",
      },
    ],
  },

  {
    category: "Program Structure & Curriculum",
    faqs: [
      {
        question: "What is the duration of the program?",
        answer:
          "The ISDA program is 12 weeks long, designed to provide you with job-ready skills quickly and effectively.",
      },

      {
        question: "What skills will I learn during the program?",
        answer:
          "You will master Excel, business communication, AI tools (GenAI), and solve real-world business problems through case studies.",
      },

      {
        question: "How is the curriculum structured?",
        answer: `The curriculum is divided into 3 main phases:
Weeks 1-4: Excel Mastery & Business Communication
Weeks 5-8: GenAI Skills & Case Study Learning
Weeks 9-12: Job-Readiness, Resume Building, Mock Interviews
`,
      },

      {
        question: "Is the curriculum theoretical or practical?",
        answer:
          "Our curriculum is hands-on and practical, focusing on real-world case studies and problem-solving to prepare you for actual job roles.",
      },

      {
        question: "How is GenAI integrated into the program?",
        answer:
          "We teach you how to use AI tools for business applications, such as process automation and data analysis, to ensure you stay ahead of the curve in the modern job market.",
      },
    ],
  },

  {
    category: "Career Support & Job Placement",
    faqs: [
      {
        question: "How does ISDA support job placements?",
        answer:
          "We provide extensive career support through resume building, mock interviews, and career coaching. By the end of the 12 weeks, we line up interviews with leading companies like Amazon and Flipkart etc.",
      },

      {
        question: "Do you guarantee job placements?",
        answer:
          "Yes, we offer a job placement guarantee. Our team works with you closely until you secure a role at a top company.",
      },

      {
        question:
          "What kind of roles will I be eligible for after completing the program?",
        answer:
          "You’ll be qualified for roles such as Logistics Coordinator, Business Process Associate, Operations Support Executive, Data Associate, Transaction Risk Investigator, and more, in industries like manufacturing, retail, e-commerce, and corporate services.",
      },

      {
        question: "Which companies hire from ISDA?",
        answer:
          "Our hiring partners include global companies like Amazon, Flipkart, Capgemini, Wipro, and many others across industries.",
      },

      {
        question: "When do job interviews start?",
        answer:
          "Job interviews begin by the end of the 12-week program. We prepare you throughout the course with mock interviews, career coaching, and resume reviews to ensure you’re ready to succeed.",
      },

      {
        question:
          "How long does it typically take to get hired after completing the program?",
        answer:
          "Most of our graduates secure jobs within 1-3 months after completing the program, depending on the job market and individual preferences.",
      },
    ],
  },

  {
    category: "Learning Experience",
    faqs: [
      {
        question: "Is the program fully online?",
        answer:
          "Yes, the ISDA program is 100% online. You can access all course materials, case studies, and live sessions from anywhere in the world.",
      },

      {
        question: "How are the classes conducted?",
        answer:
          "We use a mix of live interactive sessions, recorded lectures, and self-paced projects to provide a flexible yet structured learning experience.",
      },

      {
        question: "Will I have access to instructors for help?",
        answer:
          "Yes, our instructors and mentors are available throughout the program to answer your questions, provide feedback, and help you succeed.",
      },

      {
        question: "How much time do I need to dedicate each week?",
        answer:
          "We recommend dedicating 20-25 hours per week to complete the lessons, case studies, and projects. This ensures you stay on track to master the skills in 12 weeks.",
      },
    ],
  },

  {
    category: "Financial & Payment Information",
    faqs: [
      {
        question: "How does the Hybrid Pay After Placement model work?",
        answer:
          "You pay INR 20k upfront to secure your spot, and the remaining fee is paid after you get placed in a job. This reduces the financial burden upfront and ensures you only pay the full amount when you have secured a position.",
      },

      {
        question: "Are there any scholarships or financial aid options?",
        answer:
          "We occasionally offer scholarships based on merit or need. Please check with our admissions team for the latest updates on financial aid options.",
      },

      {
        question: "Can I pay the fee in installments?",
        answer:
          "Yes, we offer flexible payment plans to make the program more accessible. Reach out to our support team for more information on installment options.",
      },

      {
        question: "How much time do I need to dedicate each week?",
        answer:
          "We recommend dedicating 20-25 hours per week to complete the lessons, case studies, and projects. This ensures you stay on track to master the skills in 12 weeks.",
      },
    ],
  },
];
