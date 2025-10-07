import type { iProjects } from '@/types/featuredProjects.types';
import { featuredProjects } from './featuredProjects';

export const projects: iProjects[] = featuredProjects.concat([
  {
    title: 'Github Profile - XzuicerJr',
    description: 'Github Profile README Generator using Python and Github Actions',
    tags: ['Python', 'Github'],
    url: 'https://github.com/XzuicerJr',
    githubUrl: 'https://github.com/XzuicerJr/XzuicerJr',
    status: 'live'
  },
  {
    title: 'Zamora',
    description: '🪄 My personal website.',
    tags: ['Svelte', 'Shadcn', 'Tailwind CSS', 'TypeScript', 'Github', 'Vercel'],
    url: 'https://zmra.dev',
    githubUrl: 'https://github.com/XzuicerJr/zamora.dev',
    icon: 'https://raw.githubusercontent.com/XzuicerJr/zamora.dev/master/static/images/logo_svg.svg',
    status: 'live'
  }
]);
