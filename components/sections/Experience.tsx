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
      className="pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 px-6 sm:px-8 lg:px-12"
    >
      <div className="max-w-2xl">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-14"
        >
          {/* Header */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-text-tertiary">Experience</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">Work History</h2>
          </motion.div>

          {/* Timeline */}
          <motion.div variants={fadeInUp} className="relative pl-6 sm:pl-8">
            <div className="absolute left-2 sm:left-2.5 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-secondary/30 to-transparent" />
            <div className="space-y-8">
              {experiences.map((exp) => (
                <RevealCard
                  key={exp.role}
                  className="p-6 sm:p-7 md:p-8 border border-border bg-background-card shadow-card"
                >
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                    <div>
                      <p className="text-xs uppercase tracking-widest text-text-tertiary mb-1">{exp.company}</p>
                      <h4 className="text-xl font-semibold text-text-primary">{exp.role}</h4>
                    </div>
                    <div className="text-text-tertiary text-sm md:text-right shrink-0 leading-relaxed">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-5 leading-relaxed">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight) => (
                      <span
                        key={highlight}
                        className="px-3 py-1 rounded-full border border-border text-xs font-medium text-text-tertiary bg-background-elevated"
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
