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
    value: 2,
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

const experiences = [
  {
    company: 'Nova (Startup)',
    role: 'Product Engineer II',
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
    description: 'Architected and shipped 15+ full-stack builds with Firebase, Next.js, Docker, and real-time features.',
    highlights: ['WebRTC for 5K+ users', '35% faster deployments', 'Mentored 8+ developers'],
  },
]

const quickHighlights = [
  { label: 'Current Role', value: 'Product Engineer II · Nova' },
  { label: 'Stack', value: 'Next.js · Node.js · PostgreSQL' },
  { label: 'Location', value: 'Mumbai, India' },
  { label: 'Focus', value: 'MERN · Platform Engineering' },
]

const focusAreas = [
  {
    icon: FiCode,
    title: 'Product Engineering',
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
    <section id="about" className="py-20 px-6 bg-background dark:bg-gradient-to-b dark:from-background-dark dark:via-background-dark/95 dark:to-background-dark">
      <div className="max-w-6xl mx-auto space-y-16">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
          className="space-y-16"
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center space-y-5">
            <span className="inline-flex items-center gap-2 rounded-full border border-border/20 bg-surface-1/50 px-4 py-1 text-xs uppercase tracking-[0.35em] text-foreground/70">
              ABOUT
            </span>
            <div className="space-y-4">
              <h2 className="text-4xl md:text-5xl font-bold">
                <span className="bg-gradient-to-r from-primary via-secondary to-foreground bg-clip-text text-transparent">
                  Purpose-driven builder of modern web products
                </span>
              </h2>
              <p className="text-text-secondary text-lg md:text-xl max-w-3xl mx-auto">
                I connect product thinking with engineering execution—shipping resilient platforms that scale, load fast, and feel crafted.
              </p>
            </div>
          </motion.div>

          {/* Bio + Focus Areas */}
          <motion.div
            variants={fadeInUp}
            className="grid gap-8 lg:grid-cols-[1.25fr_0.75fr] items-start"
          >
            <div className="relative overflow-hidden rounded-3xl border border-border/10 bg-surface-1/40 p-8 backdrop-blur-xl">
              <div className="absolute inset-0 opacity-60" style={{
                background:
                  'radial-gradient(circle at 20% 20%, rgba(68,38,217,0.25), transparent 45%), radial-gradient(circle at 80% 0%, rgba(61,132,194,0.15), transparent 50%)',
              }} />
              <div className="relative z-10 space-y-6">
                <p className="text-lg text-foreground/80 leading-relaxed">
                  I'm a <span className="text-foreground font-semibold">Full Stack Engineer</span> crafting scalable experiences across the
                  <span className="text-secondary font-semibold"> MERN stack</span>. At Nova, I steer end-to-end delivery—from discovery workshops to instrumented releases—while collaborating with product, design, and ops.
                </p>
                <p className="text-lg text-foreground/80 leading-relaxed">
                  Recent work spans <span className="text-primary font-semibold">real-time collaboration tooling</span>, data-heavy analytics, and platform modernisation. I obsess over performance budgets, DX, and measurable impact.
                </p>
                <div className="grid gap-4 sm:grid-cols-2">
                  {quickHighlights.map((item) => (
                    <div
                      key={item.label}
                      className="rounded-2xl border border-border/15 bg-surface-2/50 p-4"
                    >
                      <p className="text-xs uppercase tracking-wide text-foreground/60">{item.label}</p>
                      <p className="text-base font-semibold text-foreground">{item.value}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="space-y-4">
              <p className="text-sm uppercase tracking-[0.2em] text-foreground/60">Focus Areas</p>
              {focusAreas.map((area) => (
                <RevealCard key={area.title} className="p-5 border-border/10 bg-surface-1/50">
                  <div className="flex items-center gap-3 mb-3">
                    <area.icon className="w-6 h-6 text-secondary" />
                    <div>
                      <p className="text-foreground font-semibold">{area.title}</p>
                      <p className="text-foreground/60 text-sm">{area.description}</p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {area.tags.map((tag) => (
                      <span key={tag} className="px-3 py-1 text-xs rounded-full border border-border/20 text-foreground/70">
                        {tag}
                      </span>
                    ))}
                  </div>
                </RevealCard>
              ))}
            </div>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6"
          >
            {stats.map((stat) => (
              <RevealCard
                key={stat.label}
                className="p-6 text-center border-border/10 bg-surface-1/50"
              >
                <stat.icon className={`w-7 h-7 mx-auto mb-3 ${stat.color}`} />
                <AnimatedStat value={stat.value} suffix={stat.suffix} className={`text-3xl md:text-4xl ${stat.color}`} />
                <p className="text-foreground/70 text-sm mt-1">{stat.label}</p>
              </RevealCard>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp} className="space-y-8">
            <div className="text-center space-y-2">
              <p className="text-xs uppercase tracking-[0.3em] text-foreground/60">Journey</p>
              <h3 className="text-3xl font-bold text-foreground">Experience & Impact</h3>
            </div>
            <div className="relative pl-4 sm:pl-8">
              <div className="absolute left-1 sm:left-2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/60 via-secondary/40 to-transparent" />
              <div className="space-y-6">
                {experiences.map((exp) => (
                  <RevealCard key={exp.role} className="p-6 md:p-7 border-border/10 bg-surface-1/40 relative">
                    <span className="absolute -left-3 top-6 h-3 w-3 rounded-full bg-primary shadow-[0_0_15px_rgba(68,38,217,0.6)]" />
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <p className="text-sm uppercase tracking-widest text-foreground/60">{exp.company}</p>
                        <h4 className="text-xl font-semibold text-foreground">{exp.role}</h4>
                      </div>
                      <div className="text-foreground/60 text-sm md:text-right">
                        <p>{exp.period}</p>
                        <p>{exp.location}</p>
                      </div>
                    </div>
                    <p className="text-foreground/70 mt-3 mb-4">{exp.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {exp.highlights.map((highlight) => (
                        <span
                          key={highlight}
                          className="px-3 py-1 rounded-full border border-border/20 text-xs text-foreground/70"
                        >
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </RevealCard>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
