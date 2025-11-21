'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiExternalLink, FiPlay } from 'react-icons/fi';
import Image from 'next/image';
import { Badge } from './Badge';
import BorderBeam from './BorderBeam';
import { GlassCard } from './GlassCard';

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
  const [isHovered, setIsHovered] = useState(false);
  const [showVideo, setShowVideo] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{ duration: 0.5 }}
      onMouseEnter={() => {
        setIsHovered(true);
        if (project.video) {
          setTimeout(() => setShowVideo(true), 300);
        }
      }}
      onMouseLeave={() => {
        setIsHovered(false);
        setShowVideo(false);
      }}
      className="group relative h-full"
    >
      <GlassCard
        blur="md"
        hover
        className={`h-full overflow-hidden ${featured ? 'lg:flex lg:gap-6' : ''}`}
      >
        {/* Border beam animation on hover */}
        {isHovered && <BorderBeam duration={12} />}

        {/* Image/Video container */}
        <div className={`relative overflow-hidden rounded-lg bg-background-dark ${featured ? 'lg:w-1/2' : 'aspect-video mb-4'}`}>
          {showVideo && project.video ? (
            <video
              src={project.video}
              autoPlay
              loop
              muted
              className="w-full h-full object-cover"
            />
          ) : (
            <Image
              src={project.image}
              alt={project.title}
              fill
              className="object-cover transition-transform duration-500 group-hover:scale-110"
            />
          )}

          {/* Play icon overlay */}
          {!showVideo && project.video && (
            <div className="absolute inset-0 flex items-center justify-center bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity">
              <div className="w-16 h-16 rounded-full bg-primary/80 flex items-center justify-center">
                <FiPlay className="w-8 h-8 text-white ml-1" />
              </div>
            </div>
          )}
        </div>

        {/* Content */}
        <div className={featured ? 'lg:w-1/2 flex flex-col' : ''}>
          <div className="mb-4">
            <h3 className="text-2xl font-bold text-text-primary mb-2 group-hover:text-primary transition-colors">
              {project.title}
            </h3>
            <p className="text-text-secondary text-sm mb-3">{project.tagline}</p>
            <p className="text-text-secondary">{project.description}</p>
          </div>

          {/* Metrics */}
          {project.metrics && (
            <div className="flex flex-wrap gap-3 mb-4">
              {project.metrics.users && (
                <div className="text-sm">
                  <span className="text-text-secondary">Users: </span>
                  <span className="text-primary font-semibold">{project.metrics.users}</span>
                </div>
              )}
              {project.metrics.performance && (
                <div className="text-sm">
                  <span className="text-text-secondary">Performance: </span>
                  <span className="text-secondary font-semibold">{project.metrics.performance}</span>
                </div>
              )}
              {project.metrics.uptime && (
                <div className="text-sm">
                  <span className="text-text-secondary">Uptime: </span>
                  <span className="text-accent font-semibold">{project.metrics.uptime}</span>
                </div>
              )}
            </div>
          )}

          {/* Tech stack */}
          <div className="flex flex-wrap gap-2 mb-4">
            {project.tech.map((tech) => (
              <Badge key={tech} variant="primary">
                {tech}
              </Badge>
            ))}
          </div>

          {/* Links */}
          <div className="flex gap-3 mt-auto">
            {project.links.github && (
              <motion.a
                href={project.links.github}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-white/5 hover:bg-white/10 border border-white/10 hover:border-primary/50 text-text-primary transition-colors"
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
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 border border-primary/50 text-primary transition-colors"
              >
                <FiExternalLink className="w-4 h-4" />
                <span className="text-sm">Live Demo</span>
              </motion.a>
            )}
          </div>
        </div>
      </GlassCard>
    </motion.div>
  );
}
