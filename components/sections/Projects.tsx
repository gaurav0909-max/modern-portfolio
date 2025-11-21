'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects, getFeaturedProjects, getRegularProjects } from '@/data/projects';

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
    <section id="projects" className="py-20 px-6">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            <span className="gradient-text">Featured Projects</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            A collection of projects that showcase my skills in building scalable,
            user-friendly applications with modern technologies.
          </p>
        </motion.div>

        {/* Featured project */}
        {featuredProjects.length > 0 && (
          <div className="mb-12">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.id} project={project} featured />
            ))}
          </div>
        )}

        {/* Projects grid */}
        {regularProjects.length > 0 && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularProjects.map((project) => (
              <ProjectCard key={project.id} project={project} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
