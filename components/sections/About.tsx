'use client';

import { motion } from 'framer-motion'
import { FiBriefcase, FiAward, FiCode, FiTrendingUp, FiZap, FiCpu, FiUsers } from 'react-icons/fi'
import { RevealCard } from '@/components/ui/RevealCard'
import { AnimatedStat } from '@/components/ui/AnimatedStat'

const fadeInUp = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: 'easeOut' },
  },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const stats = [
  {
    icon: FiBriefcase,
    value: 3,
    suffix: '+',
    label: 'Years Experience',
    color: 'text-primary',
  },
  {
    icon: FiCode,
    value: 15,
    suffix: '+',
    label: 'Projects Delivered',
    color: 'text-secondary',
  },
  {
    icon: FiTrendingUp,
    value: 10000,
    suffix: '+',
    label: 'Active Users',
    color: 'text-primary',
  },
  {
    icon: FiAward,
    value: 99,
    suffix: '%',
    label: 'Uptime Maintained',
    color: 'text-secondary',
  },
]

const quickHighlights = [
  { label: 'Current Role', value: 'Software Developer II · Nova' },
  { label: 'Stack', value: 'Next.js · Node.js · PostgreSQL' },
  { label: 'Location', value: 'Mumbai, India' },
  { label: 'Focus', value: 'MERN · Platform Engineering' },
]

const focusAreas = [
  {
    icon: FiCode,
    title: 'Software Development',
    description: 'Owning feature lifecycles end-to-end — from UX flows and APIs to observability and rollout.',
    tags: ['Next.js', 'Node.js', 'Design Systems'],
  },
  {
    icon: FiZap,
    title: 'Performance & Reliability',
    description: 'Profiling apps, reducing payloads, building resilient CI/CD and alerting pipelines.',
    tags: ['Core Web Vitals', '99% uptime', 'Edge APIs'],
  },
  {
    icon: FiCpu,
    title: 'Scalable Architecture',
    description: 'Designing modular services, event-driven workflows, and data models for long-term velocity.',
    tags: ['Microservices', 'Prisma', 'Caching'],
  },
  {
    icon: FiUsers,
    title: 'Team Enablement',
    description: 'Mentoring engineers, codifying standards, and improving DevEx through docs & tooling.',
    tags: ['Mentorship', 'DevEx', 'Knowledge sharing'],
  },
]

export default function About() {
  return (
    <section id="about" className="pt-16 pb-16 sm:pt-24 sm:pb-24 lg:pt-32 lg:pb-32 px-6 sm:px-8 lg:px-12">
      <div className="max-w-2xl space-y-12">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="space-y-2">
            <p className="text-xs uppercase tracking-widest text-text-tertiary">About</p>
            <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-text-primary">About Me</h2>
          </motion.div>

          {/* Bio + Focus Areas */}
          <motion.div variants={fadeInUp} className="flex flex-col gap-8">
            <div className="relative overflow-hidden rounded-xl border border-border bg-background-card p-6 sm:p-8 lg:p-10 shadow-card">
              <div className="absolute inset-0 opacity-40" style={{
                background:
                  'radial-gradient(circle at 20% 20%, rgba(77,178,179,0.10), transparent 45%), radial-gradient(circle at 80% 0%, rgba(156,99,156,0.07), transparent 50%)',
              }} />
              <div className="relative z-10 space-y-6">
                <p className="text-lg text-text-secondary leading-relaxed">
                  I'm a <span className="text-text-primary font-semibold">Full Stack Engineer</span> crafting scalable experiences across the
                  <span className="text-secondary font-semibold"> MERN stack</span>. At Nova, I steer end-to-end delivery—from discovery workshops to instrumented releases—while collaborating with product, design, and ops.
                </p>
                <p className="text-lg text-text-secondary leading-relaxed">
                  Recent work spans <span className="text-primary font-semibold">real-time collaboration tooling</span>, data-heavy analytics, and platform modernisation. I obsess over performance budgets, DX, and measurable impact.
                </p>
                <div className="grid gap-3 sm:gap-4 sm:grid-cols-2">
                  {quickHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-xl border border-border bg-background-elevated p-4 sm:p-5"
                    >
                      <p className="text-xs uppercase tracking-wide text-text-tertiary mb-1">{item.label}</p>
                      <p className="text-base font-semibold text-text-primary">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-xs uppercase tracking-widest text-text-tertiary">Focus Areas</p>
              {focusAreas.map((area) => (
                <RevealCard key={area.title} className="p-6 border border-border bg-background-card shadow-card">
                  <div className="flex items-start gap-4 mb-4">
                    <div className="mt-0.5 shrink-0">
                      <area.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <p className="text-text-primary font-semibold mb-1">{area.title}</p>
                      <p className="text-text-secondary text-sm leading-relaxed">{area.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-lg border border-border text-text-tertiary bg-background-elevated">
                        {tag}
                      </span>
                    ))}
                  </div>
                </RevealCard>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid — premium hierarchy with micro top-accent */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4"
          >
            {stats.map((stat) => (
              <RevealCard
                key={stat.label}
                className="relative overflow-hidden pt-6 pb-5 px-5 text-center border border-border bg-background-card shadow-card"
              >
                {/* Micro top-accent line */}
                <div className="absolute top-0 inset-x-0 h-0.5 bg-gradient-to-r from-transparent via-primary/40 to-transparent" />
                {/* Icon — top-right, muted */}
                <stat.icon className="absolute top-3 right-3 w-4 h-4 text-text-muted" />
                <AnimatedStat value={stat.value} suffix={stat.suffix} className={`text-3xl md:text-4xl font-bold ${stat.color}`} />
                <p className="text-xs uppercase tracking-widest text-text-tertiary mt-2">{stat.label}</p>
              </RevealCard>
            ))}
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
}
