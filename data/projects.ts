import { Project } from '@/components/ui/ProjectCard';

export const projects: Project[] = [
  {
    id: 'storage-hub',
    title: 'Storage Hub',
    tagline: 'Secure Cloud File Management',
    description:
      'Developed a secure cloud-based file management platform with drag-and-drop uploads, real-time previews, and shareable links, achieving sub-200ms API response times and 99.8% uptime.',
    image:
      'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&w=1600&q=80',
    video: '/videos/storage-hub.mp4',
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'Tailwind CSS', 'JWT'],
    metrics: {
      performance: 'Sub-200ms API',
      uptime: '99.8%',
    },
    links: {
      github: 'https://github.com/gaurav0909-max',
      live: '#',
    },
    featured: true,
  },
  {
    id: 'github-resource-finder',
    title: 'GitHub Resource Finder',
    tagline: 'Developer Discovery Platform',
    description:
      'Built a developer discovery platform to search GitHub profiles, repositories, and organizations with interactive dashboards, utilizing GraphQL API to reduce overhead by 60% and SSR for <1s page loads.',
    image:
      'https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?auto=format&fit=crop&w=1600&q=80',
    video: '/videos/github-finder.mp4',
    tech: ['Next.js 14', 'GitHub API', 'GraphQL', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    metrics: {
      performance: '<1s page loads',
      users: '60% less API calls',
    },
    links: {
      github: 'https://github.com/gaurav0909-max',
      live: '#',
    },
    featured: true,
  },
  {
    id: 'analytics-dashboard',
    title: 'Analytics Dashboard',
    tagline: 'Real-time Data Visualization',
    description:
      'Architected a plug-and-play analytics dashboard enabling real-time data visualization for internal teams. Built with React.js, Nest.js, and PostgreSQL, serving 10,000+ active users with 25% performance improvement.',
    image:
      'https://images.unsplash.com/photo-1553877522-43269d4ea984?auto=format&fit=crop&w=1600&q=80',
    tech: ['React.js', 'Nest.js', 'PostgreSQL', 'TypeScript', 'Chart.js'],
    metrics: {
      users: '10K+ active',
      performance: '25% faster',
    },
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 'webrtc-communication',
    title: 'WebRTC Communication System',
    tagline: 'Audio/Video Conferencing',
    description:
      'Engineered a real-time communication system with WebRTC for audio/video chat, supporting 5,000+ concurrent users. Features include screen sharing, chat, and recording capabilities.',
    image:
      'https://images.unsplash.com/photo-1523475472560-d2df97ec485c?auto=format&fit=crop&w=1600&q=80',
    tech: ['React.js', 'WebRTC', 'Node.js', 'Socket.io', 'MongoDB'],
    metrics: {
      users: '5K+ concurrent',
    },
    links: {
      github: '#',
      live: '#',
    },
  },
  {
    id: 'ecommerce-platform',
    title: 'E-Commerce Platform',
    tagline: 'Medusa.js Integration',
    description:
      'Integrated Medusa.js e-commerce framework for client solutions, reducing setup complexity by 50% and accelerating deployment by 35%. Built with MERN stack achieving 30% faster load times.',
    image:
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&w=1600&q=80',
    tech: ['React.js', 'Medusa.js', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    metrics: {
      performance: '30% faster loads',
      users: '50% less setup time',
    },
    links: {
      github: '#',
      live: '#',
    },
  },
];

// Get featured projects
export const getFeaturedProjects = () => {
  return projects.filter((project) => project.featured);
};

// Get regular projects (non-featured)
export const getRegularProjects = () => {
  return projects.filter((project) => !project.featured);
};

// Get project by ID
export const getProjectById = (id: string) => {
  return projects.find((project) => project.id === id);
};
