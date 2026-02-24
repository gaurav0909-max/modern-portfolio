'use client';

import { motion } from 'framer-motion'
import { FiGithub, FiExternalLink } from 'react-icons/fi'
import Image from 'next/image'
import { Badge } from './Badge'

export interface Project {
  id: string;
  title: string;
  tagline: string;
  description: string;
  image: string;
  video?: string;
  tech: string[];
  metrics?: {
    users?: string;
    performance?: string;
    uptime?: string;
  };
  links: {
    github?: string;
    live?: string;
  };
  featured?: boolean;
}

interface ProjectCardProps {
  project: Project;
  featured?: boolean;
}

export default function ProjectCard({ project, featured = false }: ProjectCardProps) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      className="group relative h-full"
    >
      <div
        className={`relative h-full overflow-hidden rounded-xl border border-border bg-white p-7 shadow-card transition-all duration-500
          ${featured ? 'lg:flex lg:gap-10 lg:p-10' : ''}
          group-hover:border-border-accent group-hover:bg-background-elevated group-hover:shadow-card-hover group-hover:-translate-y-0.5`}
      >
        {/* Subtle primary overlay on hover */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background: 'rgba(77, 178, 179, 0.04)',
          }}
        />

        {/* Image/Video container */}
        <div
          className={`relative overflow-hidden rounded-xl bg-background-elevated ${featured ? 'lg:w-1/2' : 'aspect-[16/9] mb-6'}`}
        >
          <Image
            src={project.image}
            alt={`${project.title} - ${project.tagline}`}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
            loading={featured ? "eager" : "lazy"}
            priority={featured}
          />
        </div>

        {/* Content */}
        <div className={`relative flex flex-col ${featured ? 'lg:w-1/2' : ''}`}>
          {/* Tagline - Fixed height */}
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-tertiary h-4">
            <span className="h-[1px] w-8 bg-primary/40" />
            <span className="truncate">{project.tagline}</span>
          </div>

          {/* Title and Description - Fixed height */}
          <div className="mb-5 space-y-3">
            <h3 className="text-2xl font-semibold text-text-primary line-clamp-1">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed line-clamp-3 h-[4.5rem]">
              {project.description}
            </p>
          </div>

          {/* Metrics - Fixed height */}
          <div className="mb-5 h-20">
            {project.metrics && (
              <div className="grid gap-2 text-sm sm:grid-cols-2 h-full">
                {project.metrics.users && (
                  <div className="rounded-xl border border-border border-l-2 border-l-primary/30 bg-background-elevated px-4 py-2 flex flex-col justify-center">
                    <p className="text-xs text-text-tertiary">Users</p>
                    <p className="text-base font-semibold text-primary truncate">{project.metrics.users}</p>
                  </div>
                )}
                {project.metrics.performance && (
                  <div className="rounded-xl border border-border border-l-2 border-l-primary/30 bg-background-elevated px-4 py-2 flex flex-col justify-center">
                    <p className="text-xs text-text-tertiary">Performance</p>
                    <p className="text-base font-semibold text-secondary truncate">
                      {project.metrics.performance}
                    </p>
                  </div>
                )}
                {project.metrics.uptime && (
                  <div className="rounded-xl border border-border border-l-2 border-l-primary/30 bg-background-elevated px-4 py-2 flex flex-col justify-center">
                    <p className="text-xs text-text-tertiary">Uptime</p>
                    <p className="text-base font-semibold text-accent truncate">{project.metrics.uptime}</p>
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Tech stack - Fixed height with scroll */}
          <div className="mb-6 h-20 overflow-y-auto">
            <div className="flex flex-wrap gap-2">
              {project.tech.map((tech) => (
                <Badge key={tech} variant="secondary" className="text-xs font-medium">
                  {tech}
                </Badge>
              ))}
            </div>
          </div>

          {/* Links - Fixed at bottom */}
          <div className="mt-auto flex flex-wrap gap-3">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl border border-border px-5 py-2 text-sm text-text-secondary transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              >
                <FiGithub className="w-4 h-4" />
                <span className="text-sm">Code</span>
              </motion.a>
            )}
            {project.links.live && (
              <motion.a
                href={project.links.live}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} live demo`}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="flex items-center gap-2 rounded-xl border border-border px-5 py-2 text-sm text-text-secondary transition-all duration-200 hover:border-primary/50 hover:text-primary hover:bg-primary/5"
              >
                <FiExternalLink className="w-4 h-4" />
                <span className="text-sm">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </div>
    </motion.div>
  );
}
