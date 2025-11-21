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
        className={`relative h-full overflow-hidden rounded-3xl border border-border bg-surface-1/40 p-6 transition-all duration-500
          ${featured ? 'lg:flex lg:gap-10 lg:p-8' : ''}
          group-hover:border-border-hover group-hover:shadow-glow-sm`}
      >
        {/* Gradient accent inspired by adaptive.ai */}
        <div
          className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
          style={{
            background:
              'radial-gradient(120% 120% at 80% 0%, rgba(139,92,246,0.25), transparent), radial-gradient(80% 80% at 0% 100%, rgba(6,182,212,0.25), transparent)',
          }}
        />

        {/* Image/Video container */}
        <div
          className={`relative overflow-hidden rounded-2xl bg-background-elevated shadow-inner-glow ${featured ? 'lg:w-1/2' : 'aspect-video mb-6'}`}
        >
          <Image
            src={project.image}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
          />
        </div>

        {/* Content */}
        <div className={`relative flex flex-col ${featured ? 'lg:w-1/2' : ''}`}>
          <div className="mb-4 flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-text-tertiary">
            <span className="h-[1px] w-8 bg-border" />
            {project.tagline}
          </div>

          <div className="mb-4 space-y-3">
            <h3 className="text-2xl font-semibold text-text-primary transition-colors group-hover:text-white">
              {project.title}
            </h3>
            <p className="text-sm text-text-secondary leading-relaxed">
              {project.description}
            </p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="mb-5 grid gap-2 text-sm text-text-secondary sm:grid-cols-2">
              {project.metrics.users && (
                <div className="rounded-2xl border border-border/60 bg-surface-1/60 px-4 py-3">
                  <p className="text-xs text-text-tertiary">Users</p>
                  <p className="text-base font-semibold text-primary">{project.metrics.users}</p>
                </div>
              )}
              {project.metrics.performance && (
                <div className="rounded-2xl border border-border/60 bg-surface-1/60 px-4 py-3">
                  <p className="text-xs text-text-tertiary">Performance</p>
                  <p className="text-base font-semibold text-secondary">
                    {project.metrics.performance}
                  </p>
                </div>
              )}
              {project.metrics.uptime && (
                <div className="rounded-2xl border border-border/60 bg-surface-1/60 px-4 py-3">
                  <p className="text-xs text-text-tertiary">Uptime</p>
                  <p className="text-base font-semibold text-accent">{project.metrics.uptime}</p>
                </div>
              )}
            </div>
          )}

          {/* Tech stack */}
          <div className="mb-6 flex flex-wrap gap-2">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="accent" className="text-xs font-semibold">
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
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 rounded-full bg-gradient-hero/20 px-5 py-2 text-sm font-semibold text-white transition hover:bg-gradient-hero"
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
