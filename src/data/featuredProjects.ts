import type { iProjects } from '@/types/featuredProjects.types';

import CieserLogo from '@/icons/companies/cieser.svelte';
import InsightedLogo from '@/icons/projects/insighted.svelte';

export const featuredProjects: iProjects[] = [
  {
    title: 'InsightED',
    description:
      '🔍 A platform that helps teachers track and manage students, classes, and academic progress.',
    tags: [
      'Next.js',
      'Tailwind CSS',
      // 'Shadcn',
      'TypeScript',
      'Vercel',
      'NestJS',
      'PostgreSQL',
      'Prisma',
      'Railway'
    ],
    // url: 'https://insighted.zamora.dev',
    icon: InsightedLogo,
    status: 'wip'
  },
  {
    title: 'Gen UUID',
    description: '✍️ An open-source UUID generator for the terminal.',
    tags: ['Python', 'CLI'],
    githubUrl: 'https://github.com/XzuicerJr/gen-uuid',
    icon: 'https://raw.githubusercontent.com/XzuicerJr/gen-uuid/main/public/images/logo.svg',
    status: null,
    color: '#52b4a5',
    blurColor: 'rgba(82, 180, 165, 0.1)'
  },
  {
    title: 'CIESER',
    description: '🏠 A modern landing page for a Chilean company',
    tags: ['Next.js', 'Tailwind CSS', 'TypeScript', 'Figma', 'Github', 'Vercel'],
    url: 'https://cieser.cl',
    icon: CieserLogo,
    status: 'live',
    color: '#333399',
    blurColor: 'rgba(51, 51, 153, 0.1)'
  }
];
