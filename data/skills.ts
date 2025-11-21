export interface Skill {
  id: string;
  label: string;
  color?: 'default' | 'primary' | 'secondary' | 'accent';
  category: 'frontend' | 'backend' | 'tools' | 'design';
}

export const skills: Skill[] = [
  // Frontend
  { id: 'react', label: 'React', color: 'primary', category: 'frontend' },
  { id: 'nextjs', label: 'Next.js', color: 'primary', category: 'frontend' },
  { id: 'typescript', label: 'TypeScript', color: 'secondary', category: 'frontend' },
  { id: 'javascript', label: 'JavaScript', color: 'default', category: 'frontend' },
  { id: 'tailwind', label: 'Tailwind CSS', color: 'accent', category: 'frontend' },
  { id: 'framer', label: 'Framer Motion', color: 'default', category: 'frontend' },
  { id: 'html', label: 'HTML5', color: 'default', category: 'frontend' },
  { id: 'css', label: 'CSS3', color: 'default', category: 'frontend' },

  // Backend
  { id: 'nodejs', label: 'Node.js', color: 'secondary', category: 'backend' },
  { id: 'express', label: 'Express', color: 'default', category: 'backend' },
  { id: 'postgresql', label: 'PostgreSQL', color: 'primary', category: 'backend' },
  { id: 'mongodb', label: 'MongoDB', color: 'secondary', category: 'backend' },
  { id: 'prisma', label: 'Prisma', color: 'default', category: 'backend' },
  { id: 'graphql', label: 'GraphQL', color: 'accent', category: 'backend' },
  { id: 'rest', label: 'REST API', color: 'default', category: 'backend' },

  // Tools & DevOps
  { id: 'git', label: 'Git', color: 'default', category: 'tools' },
  { id: 'github', label: 'GitHub', color: 'default', category: 'tools' },
  { id: 'docker', label: 'Docker', color: 'primary', category: 'tools' },
  { id: 'vercel', label: 'Vercel', color: 'default', category: 'tools' },
  { id: 'aws', label: 'AWS', color: 'secondary', category: 'tools' },
  { id: 'vscode', label: 'VS Code', color: 'primary', category: 'tools' },
  { id: 'webpack', label: 'Webpack', color: 'default', category: 'tools' },
  { id: 'vite', label: 'Vite', color: 'accent', category: 'tools' },

  // Design
  { id: 'figma', label: 'Figma', color: 'accent', category: 'design' },
  { id: 'responsive', label: 'Responsive Design', color: 'primary', category: 'design' },
  { id: 'ui-ux', label: 'UI/UX', color: 'secondary', category: 'design' },
];

// Get skills by category
export const getSkillsByCategory = (category: Skill['category']) => {
  return skills.filter((skill) => skill.category === category);
};

// Get all skills for marquee (mixed order for visual interest)
export const getMarqueeSkills = () => {
  return skills;
};
