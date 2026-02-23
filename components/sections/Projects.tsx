'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { getFeaturedProjects, getRegularProjects } from '@/data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Projects() {
  const featuredProjects = getFeaturedProjects();
  const regularProjects = getRegularProjects();

  return (
    <section id="projects" className="pt-32 pb-32 px-6 sm:px-10 lg:px-12">
      <div className="max-w-2xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12 space-y-2"
        >
          <p className="text-xs uppercase tracking-widest text-foreground/40">Projects</p>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-foreground">Selected Work</h2>
        </motion.div>

        {/* Featured project */}
        {featuredProjects.length > 0 && (
          <div className="mb-16 space-y-10">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        )}

        {/* Projects grid */}
        {regularProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        ) : (
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
            className="text-center py-12"
          >
            <p className="text-text-secondary dark:text-text-dark-secondary text-lg">No projects to display at the moment.</p>
          </motion.div>
        )}
      </div>
    </section>
  );
}
