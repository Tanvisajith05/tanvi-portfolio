// ─── Portfolio Data ───────────────────────────────────────
// Central data file — update here to reflect changes site-wide

export const personalInfo = {
  name: 'Tanvi S Ajith',
  role: 'Aspiring Software Engineer',
  tagline: 'Full Stack Developer & Cybersecurity Enthusiast',
  about: `I am a fourth-year Information Science Engineering student graduating in 2027. I enjoy building scalable web applications and continuously learning cybersecurity, artificial intelligence, and machine learning. I enjoy solving real-world problems through technology and building secure, user-friendly software.`,
  email: 'tanvisajith@email.com',
  linkedin: 'https://www.linkedin.com/in/tanvisajith/',
  github: 'https://github.com/Tanvisajith05',
  location: 'India',
  available: true,
} as const

export const navLinks = [
  { label: 'Home',           href: '#home' },
  { label: 'About',          href: '#about' },
  { label: 'Projects',       href: '#projects' },
  { label: 'Skills',         href: '#skills' },
  { label: 'Experience',     href: '#experience' },
  { label: 'Certifications', href: '#certifications' },
  { label: 'Contact',        href: '#contact' },
] as const

export interface Project {
  id: number
  title: string
  description: string
  tags: string[]
  category: string
  featured?: boolean
  link?: string
}

export const projects: Project[] = [
  {
    id: 1,
    title: 'Microplastic Detection & Health Risk Analysis',
    description:
      'Developed an AI-powered system using YOLO to detect and classify microplastics from microscopic images. Integrated a health risk analysis module to map detected microplastics to potential health impacts and built an intuitive interface for visualization.',
    tags: ['Python', 'YOLO', 'Computer Vision', 'Deep Learning'],
    category: 'AI/ML',
    featured: true,
  },
  {
    id: 2,
    title: 'HostelOps',
    description:
      'Developed a hostel complaint management system with complaint tracking, dashboards, and role-based authentication — streamlining communication between students and administrators.',
    tags: ['React.js', 'TypeScript', 'Node.js'],
    category: 'Full Stack',
    featured: true,
  },
  {
    id: 3,
    title: 'Customer Churn Prediction',
    description:
      'Built a machine learning model to predict customer churn using data preprocessing, feature engineering, and model evaluation. Helped businesses identify at-risk customers proactively.',
    tags: ['Python', 'Machine Learning', 'Data Science'],
    category: 'AI/ML',
  },
  {
    id: 4,
    title: 'BookMyShow 2.0',
    description:
      'Developed a responsive movie and event booking website inspired by BookMyShow, featuring dynamic seat selection, filters, and a seamless booking experience.',
    tags: ['React.js', 'HTML', 'CSS', 'Bootstrap'],
    category: 'Frontend',
  },
  {
    id: 5,
    title: 'Event Planner',
    description:
      'Developed a responsive event management website with scheduling and event organization features, allowing users to create, manage, and track events intuitively.',
    tags: ['HTML', 'CSS', 'JavaScript'],
    category: 'Frontend',
  },
]

export interface SkillCategory {
  label: string
  icon: string
  skills: string[]
}

export const skillCategories: SkillCategory[] = [
  {
    label: 'Programming',
    icon: '💻',
    skills: ['Java', 'Python', 'C', 'C++', 'JavaScript', 'TypeScript'],
  },
  {
    label: 'Frontend',
    icon: '🎨',
    skills: ['React', 'HTML', 'CSS', 'Bootstrap', 'Tailwind CSS'],
  },
  {
    label: 'Backend',
    icon: '⚙️',
    skills: ['Node.js', 'Express.js'],
  },
  {
    label: 'Database',
    icon: '🗄️',
    skills: ['MongoDB', 'MySQL'],
  },
  {
    label: 'Tools',
    icon: '🛠️',
    skills: ['Git', 'GitHub', 'VS Code', 'Android Studio'],
  },
  {
    label: 'Cybersecurity',
    icon: '🔐',
    skills: ['Linux', 'OWASP Top 10', 'Network Security', 'Ethical Hacking Basics', 'Secure Coding'],
  },
]

export interface Experience {
  id: number
  role: string
  company: string
  duration: string
  type: string
  description: string
  skills: string[]
}

export const experiences: Experience[] = [
  {
    id: 1,
    role: 'Web Development Intern',
    company: 'Cognifyz Technologies',
    duration: '2024',
    type: 'Internship',
    description:
      'Developed responsive web applications using React.js, HTML, CSS, JavaScript, and Bootstrap. Collaborated with the team to build scalable and maintainable frontend solutions.',
    skills: ['React.js', 'HTML', 'CSS', 'JavaScript', 'Bootstrap'],
  },
]

export interface Certification {
  id: number
  title: string
  issuer: string
  icon: string
  color: string
}

export const certifications: Certification[] = [
  {
    id: 1,
    title: 'Cyber Security Foundation Certification',
    issuer: 'Infosys Springboard',
    icon: '🛡️',
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 2,
    title: 'Programming for Data Science',
    issuer: 'University of Leeds',
    icon: '📊',
    color: 'from-purple-500 to-pink-500',
  },
  {
    id: 3,
    title: 'Data Analytics Job Simulation',
    issuer: 'Deloitte Australia · Forage',
    icon: '📈',
    color: 'from-green-500 to-teal-500',
  },
  {
    id: 4,
    title: 'Linux for Cloud & DevOps Engineers',
    issuer: 'Coursera',
    icon: '🐧',
    color: 'from-orange-500 to-yellow-500',
  },
  {
    id: 5,
    title: 'Python for Everybody',
    issuer: 'Coursera',
    icon: '🐍',
    color: 'from-yellow-500 to-orange-500',
  },
]
