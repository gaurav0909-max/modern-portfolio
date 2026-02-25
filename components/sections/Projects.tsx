'use client';

import { motion } from 'framer-motion';
import ProjectCard from '@/components/ui/ProjectCard';
import { projects } from '@/data/projects';

const fadeInUp = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

export default function Projects() {
  return (
    <section id="projects" className="pt-16 pb-12 sm:pt-20 sm:pb-14 lg:pt-20 lg:pb-14 px-6 sm:px-10 lg:px-12">
      <div className="max-w-2xl lg:max-w-3xl">
        {/* Section header */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          variants={fadeInUp}
          className="mb-12 space-y-3"
        >
          <p className="text-xs uppercase tracking-widest text-text-tertiary">Projects</p>
          <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-text-primary">Selected Work</h2>
          <p className="text-base text-text-secondary leading-relaxed">Things I built when I probably should've been sleeping.</p>
        </motion.div>

        {/* Unified projects grid — first card spans full width as hero */}
        <div className="project-card-container grid grid-cols-1 sm:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div key={project.id} className={index === 0 ? 'sm:col-span-2' : ''}>
              <ProjectCard project={project} hero={index === 0} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
