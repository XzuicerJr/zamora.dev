import type { iExperience } from '@/types/experience.type';

import CieserLogo from '@/icons/companies/cieser.svelte';
import ReverssoLogo from '@/icons/companies/reversso.svelte';

export const experienceData: iExperience[] = [
  {
    role: 'Front-End Developer',
    aboutRole:
      "In my role, I led a comprehensive update of the company's portal used (at the time) by 350+ brands and 15,000 monthly users—improving speed, security, and accessibility. I also directed the development of a new landing page aligned with updated brand standards, and collaborated with the design team to build a reusable design system and internal component library now used across all products.",
    company: 'Reversso',
    companyUrl: 'https://reversso.com/',
    companyLogo: ReverssoLogo,
    startDate: 'May 2021',
    endDate: 'Sep 2024',
    freelance: false,
    location: 'Santiago, Chile 🇨🇱',
    technologies: [
      'React',
      'Next.js',
      'Ant Design',
      'SCSS/SASS',
      'Styled-Components',
      'Storybook',
      'JavaScript',
      'TypeScript',
      'GraphQL',
      'Figma',
      'Github'
    ],
    latest: true
  },
  {
    role: 'Web Developer',
    aboutRole:
      'Designed and developed a modern landing page for a Chilean company offering diverse services, combining creativity and functionality to showcase services and strengths while ensuring a smooth and intuitive user experience.',
    company: 'CIESER',
    companyUrl: 'https://cieser.cl',
    companyLogo: CieserLogo,
    startDate: 'Aug 2020',
    endDate: 'Oct 2020',
    freelance: true,
    location: 'Valparaiso, Chile 🇨🇱',
    technologies: [
      'Next.js',
      'Tailwind CSS',
      'Radix UI',
      'TypeScript',
      'Figma',
      'Github',
      'Vercel'
    ],
    latest: false
  }
];
