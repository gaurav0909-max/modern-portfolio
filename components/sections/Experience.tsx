'use client';

import { motion } from 'framer-motion';
import { RevealCard } from '@/components/ui/RevealCard';

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.15, delayChildren: 0.1 } },
};

const experiences = [
  {
    company: 'Nova (Startup)',
    role: 'Software Developer II',
    period: 'Sep 2025 - Present',
    location: 'Mumbai, India',
    description:
      'Leading frontend and platform initiatives for collaborative analytics products with React, Nest.js, and PostgreSQL.',
    highlights: ['25% faster feature rollouts', '10K+ active users', 'Design system adoption'],
  },
  {
    company: 'Spaceo Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: 'May 2025 - Aug 2025',
    location: 'Ahmedabad, India',
    description:
      'Delivered production-grade SaaS experiences using React, Node.js, and MongoDB with an obsession for Core Web Vitals.',
    highlights: ['99% uptime', '20% performance boost', '18% lower bounce rate'],
  },
  {
    company: 'IT Path Solutions Pvt. Ltd.',
    role: 'Associate Technology Architect',
    period: 'Aug 2023 - Apr 2025',
    location: 'Ahmedabad, India',
    description:
      'Architected and shipped 15+ full-stack builds with Firebase, Next.js, Docker, and real-time features.',
    highlights: ['WebRTC for 5K+ users', '35% faster deployments', 'Mentored 8+ developers'],
  },
];

export default function Experience() {
  return (
    <section
      id="experience"
      className="py-20 px-6 bg-background dark:bg-gradient-to-b dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark"
    >
      <div className="max-w-3xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-12"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-3">
            <span className="inline-flex items-center gap-2 rounded-full border border-gray-400 dark:border-slate-500 bg-surface-1/50 px-4 py-1 text-xs uppercase tracking-[0.35em] text-foreground/70">
              Journey
            </span>
            <h2 className="text-4xl md:text-5xl font-bold">
              <span className="bg-gradient-to-r from-primary via-secondary to-foreground bg-clip-text text-transparent">
                Experience & Impact
              </span>
            </h2>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeInUp} className="relative pl-4 sm:pl-8">
            <div className="absolute left-1 sm:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />
            <div className="space-y-6">
              {experiences.map((exp) => (
                <RevealCard
                  key={exp.role}
                  className="p-6 md:p-7 border border-gray-400 dark:border-slate-500 bg-surface-1/40"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                    <div>
                      <p className="text-sm uppercase tracking-widest text-foreground/60">{exp.company}</p>
                      <h4 className="text-xl font-semibold text-foreground">{exp.role}</h4>
                    </div>
                    <div className="text-foreground/60 text-sm md:text-right shrink-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-foreground/70 mt-3 mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full border border-gray-400 dark:border-slate-500 text-xs text-foreground/70"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </RevealCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
