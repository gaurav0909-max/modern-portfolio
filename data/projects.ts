import { Project } from '@/components/ui/ProjectCard';

export const projects: Project[] = [
  {
    id: 'storage-hub',
    title: 'Storage Hub',
    tagline: 'Secure Cloud File Management',
    description:
      'A secure cloud-based file management platform with drag-and-drop uploads, real-time previews, and shareable links. Built with modern web technologies for optimal performance and reliability.',
    image:
      'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=1600&q=80',
    tech: ['React.js', 'Next.js', 'Vercel', 'Tailwind CSS'],
    metrics: {
      performance: '1.7s response time',
      uptime: 'Active deployment',
    },
    links: {
      github: 'https://github.com/gaurav0909-max/storage-hub',
      live: 'https://storage-hub.vercel.app',
    },
    featured: true,
  },
  {
    id: 'github-repo-finder',
    title: 'GitHub Resource Finder',
    tagline: 'Developer Discovery Platform',
    description:
      'A developer discovery platform to search GitHub repositories with interactive dashboards. Utilizes GitHub API for real-time data fetching and Next.js for optimal performance with fast page loads.',
    image:
      'https://images.unsplash.com/photo-1618401471353-b98afee0b2eb?auto=format&fit=crop&w=1600&q=80',
    tech: ['Next.js', 'GitHub API', 'TypeScript', 'Tailwind CSS', 'Vercel'],
    metrics: {
      performance: '1.0s page loads',
      users: 'Real-time GitHub data',
    },
    links: {
      github: 'https://github.com/gaurav0909-max/github-repo-finder',
      live: 'https://github-resource-finder-001.vercel.app',
    },
    featured: true,
  },
  {
    id: 'care-connect',
    title: 'Care Connect',
    tagline: 'Healthcare Management Platform',
    description:
      'A comprehensive healthcare management platform connecting patients with healthcare providers. Features appointment scheduling, patient records, and real-time communication for seamless healthcare delivery.',
    image:
      'https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=1600&q=80',
    tech: ['React.js', 'Next.js', 'Vercel', 'Tailwind CSS'],
    metrics: {
      performance: 'Active deployment',
    },
    links: {
      github: 'https://github.com/gaurav0909-max/care-connect',
      live: 'https://care-connect-ashen.vercel.app',
    },
  },
  // {
  //   id: 'comfy-space',
  //   title: 'Comfy Space',
  //   tagline: 'Interior Design Platform',
  //   description:
  //     'A modern interior design and furniture showcase platform. Features responsive design, smooth animations, and an intuitive browsing experience for home decor enthusiasts to discover and explore.',
  //   image:
  //     'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?auto=format&fit=crop&w=1600&q=80',
  //   tech: ['React.js', 'Next.js', 'Vercel', 'Tailwind CSS'],
  //   metrics: {
  //     performance: '659ms response time',
  //   },
  //   links: {
  //     github: 'https://github.com/gaurav0909-max/comfy-space',
  //     live: 'https://comfy-space.vercel.app',
  //   },
  // },
  // {
  //   id: 'cloudinary-upload',
  //   title: 'Cloudinary Upload',
  //   tagline: 'File Upload & Management',
  //   description:
  //     'A streamlined file upload and management system powered by Cloudinary. Supports drag-and-drop uploads, automatic optimization, and shareable links for media assets with cloud integration.',
  //   image:
  //     'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=1600&q=80',
  //   tech: ['React.js', 'Cloudinary API', 'Next.js', 'Vercel'],
  //   metrics: {
  //     performance: '885ms response time',
  //   },
  //   links: {
  //     github: 'https://github.com/gaurav0909-max/cloudinary-upload',
  //     live: 'https://file-cloudinary-url-gaurav.vercel.app/',
  //   },
  // },
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
