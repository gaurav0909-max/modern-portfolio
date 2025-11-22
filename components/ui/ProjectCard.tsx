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
        className={`relative h-full overflow-hidden rounded-3xl border border-black/10 bg-surface-1/40 p-6 transition-all duration-500
          ${featured ? 'lg:flex lg:gap-10 lg:p-8' : ''}
          group-hover:border-black/40 group-hover:shadow-glow-sm`}
      >
        {/* Gradient accent inspired by adaptive.ai */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'linear-gradient(110deg, rgba(15,23,42,0.88) 0%, rgba(36,58,102,0.8) 55%, rgba(68,38,217,0.65) 100%)',
          }}
        />

        {/* Image/Video container */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-background-elevated shadow-inner-glow ${featured ? 'lg:w-1/2' : 'aspect-video mb-6'}`}
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
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-tertiary transition-colors group-hover:text-white/70">
            <span className="h-[1px] w-8 bg-border" />
            {project.tagline}
          </div>

          <div className="mb-4 space-y-3">
            <h3 className="text-2xl font-semibold text-text-primary transition-colors group-hover:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed transition-colors group-hover:text-white/80">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="mb-5 grid gap-2 text-sm text-text-secondary transition-colors group-hover:text-white/80 sm:grid-cols-2">
              {project.metrics.users && (
                <div className="rounded-2xl border border-border/60 bg-surface-1/60 px-4 py-3">
                  <p className="text-xs text-text-tertiary transition-colors group-hover:text-white/60">Users</p>
                  <p className="text-base font-semibold text-primary">{project.metrics.users}</p>
                </div>
              )}
              {project.metrics.performance && (
                <div className="rounded-2xl border border-border/60 bg-surface-1/60 px-4 py-3">
                  <p className="text-xs text-text-tertiary transition-colors group-hover:text-white/60">Performance</p>
                  <p className="text-base font-semibold text-secondary">
                    {project.metrics.performance}
                  </p>
                </div>
              )}
              {project.metrics.uptime && (
                <div className="rounded-2xl border border-border/60 bg-surface-1/60 px-4 py-3">
                  <p className="text-xs text-text-tertiary transition-colors group-hover:text-white/60">Uptime</p>
                  <p className="text-base font-semibold text-secondary">{project.metrics.uptime}</p>
                </div>
              )}
            </div>
          )}

          {/* Tech stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-xs font-semibold">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="mt-auto flex flex-wrap gap-3">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`View ${project.title} source code on GitHub`}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm text-text-primary transition hover:border-primary/50"
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full border border-border px-5 py-2 text-sm text-text-primary transition hover:border-secondary/50"
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
