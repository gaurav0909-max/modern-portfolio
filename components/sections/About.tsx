'use client';

import { motion } from 'framer-motion';
import { FiBriefcase, FiAward, FiCode, FiTrendingUp } from 'react-icons/fi';
import { GlassCard } from '@/components/ui/GlassCard';

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
    value: '2+',
    label: 'Years Experience',
    color: 'text-primary',
  },
  {
    icon: FiCode,
    value: '15+',
    label: 'Projects Delivered',
    color: 'text-secondary',
  },
  {
    icon: FiTrendingUp,
    value: '10K+',
    label: 'Active Users',
    color: 'text-accent',
  },
  {
    icon: FiAward,
    value: '99%',
    label: 'Uptime Maintained',
    color: 'text-primary',
  },
];

const experiences = [
  {
    company: 'Nova (Startup)',
    role: 'Product Engineer II',
    period: 'Sep 2025 - Present',
    location: 'Mumbai, India',
    description: 'Leading frontend and full-stack development for core product modules using React.js, Nest.js, and PostgreSQL.',
    highlights: ['25% performance improvement', '40% faster deployments', '10K+ active users'],
  },
  {
    company: 'Spaceo Technologies Pvt. Ltd.',
    role: 'Full Stack Developer',
    period: 'May 2025 - Aug 2025',
    location: 'Ahmedabad, India',
    description: 'Delivered production-grade web applications with React.js, Node.js, and MongoDB.',
    highlights: ['99% uptime', '20% performance boost', '18% reduced bounce rates'],
  },
  {
    company: 'IT Path Solutions Pvt. Ltd.',
    role: 'Associate Technology Architect',
    period: 'Aug 2023 - Apr 2025',
    location: 'Ahmedabad, India',
    description: 'Architected and delivered 15+ full-stack projects using Firebase, Next.js, Docker, and Node.js.',
    highlights: ['WebRTC for 5K+ users', '35% faster deployment', 'Mentored 8+ developers'],
  },
];

export default function About() {
  return (
    <section id="about" className="py-20 px-6">
      <div className="max-w-6xl mx-auto">
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: '-100px' }}
        >
          {/* Section Header */}
          <motion.div variants={fadeInUp} className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">
              <span className="gradient-text">About Me</span>
            </h2>
            <p className="text-text-secondary text-lg max-w-2xl mx-auto">
              Passionate about building scalable applications and solving complex technical challenges
            </p>
          </motion.div>

          {/* Bio */}
          <motion.div variants={fadeInUp} className="mb-16">
            <GlassCard className="p-8">
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                I'm a <span className="text-text-primary font-semibold">Full Stack Engineer</span> with{' '}
                <span className="text-primary font-semibold">2+ years of experience</span> specializing in the{' '}
                <span className="text-secondary font-semibold">MERN stack</span>. Currently working as a{' '}
                <span className="text-text-primary font-semibold">Product Engineer II at Nova</span> in Mumbai,
                where I lead frontend and full-stack development for core product modules.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed mb-4">
                My expertise lies in building <span className="text-primary font-semibold">high-performance web applications</span>{' '}
                using React.js, Next.js, Node.js, and TypeScript. I've successfully delivered projects that serve{' '}
                <span className="text-secondary font-semibold">10,000+ active users</span> while maintaining{' '}
                <span className="text-accent font-semibold">99%+ uptime</span>.
              </p>
              <p className="text-text-secondary text-lg leading-relaxed">
                I'm passionate about <span className="text-text-primary font-semibold">performance optimization</span>,{' '}
                <span className="text-text-primary font-semibold">scalable architecture</span>, and creating exceptional user experiences.
                When I'm not coding, I mentor junior developers and contribute to the tech community.
              </p>
            </GlassCard>
          </motion.div>

          {/* Stats Grid */}
          <motion.div
            variants={fadeInUp}
            className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6 mb-16"
          >
            {stats.map((stat, index) => (
              <GlassCard
                key={index}
                className="p-6 text-center hover:scale-105 transition-transform duration-300"
              >
                <stat.icon className={`w-8 h-8 ${stat.color} mx-auto mb-3`} />
                <div className={`text-3xl md:text-4xl font-bold mb-1 ${stat.color}`}>
                  {stat.value}
                </div>
                <div className="text-text-secondary text-sm">{stat.label}</div>
              </GlassCard>
            ))}
          </motion.div>

          {/* Experience Timeline */}
          <motion.div variants={fadeInUp}>
            <h3 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              <span className="gradient-text">Experience</span>
            </h3>
            <div className="space-y-6">
              {experiences.map((exp, index) => (
                <GlassCard key={index} className="p-6 md:p-8">
                  <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold text-text-primary mb-1">{exp.role}</h4>
                      <p className="text-primary font-semibold">{exp.company}</p>
                    </div>
                    <div className="text-text-secondary text-sm md:text-right mt-2 md:mt-0">
                      <p>{exp.period}</p>
                      <p>{exp.location}</p>
                    </div>
                  </div>
                  <p className="text-text-secondary mb-4">{exp.description}</p>
                  <div className="flex flex-wrap gap-2">
                    {exp.highlights.map((highlight, idx) => (
                      <span
                        key={idx}
                        className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full border border-primary/20"
                      >
                        {highlight}
                      </span>
                    ))}
                  </div>
                </GlassCard>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
