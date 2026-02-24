'use client';

import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FiGithub, FiLinkedin, FiMail } from 'react-icons/fi';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';

const NAV_ITEMS = [
  { id: 'about', label: 'About' },
  { id: 'experience', label: 'Experience' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
];

const SOCIAL_LINKS = [
  { icon: FiGithub, href: 'https://github.com/gaurav0909-max', label: 'GitHub' },
  { icon: FiLinkedin, href: 'https://linkedin.com/in/gaurav-patel-webdev', label: 'LinkedIn' },
  { icon: FiMail, href: 'mailto:gp627853@gmail.com', label: 'Email' },
];

export default function SidebarLayout({ children }: { children: React.ReactNode }) {
  const activeSection = useIntersectionObserver(
    NAV_ITEMS.map((n) => n.id),
    { rootMargin: '-40% 0px -55% 0px' }
  );

  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <div className="max-w-[1400px] mx-auto relative min-h-screen lg:flex lg:gap-0">
      {/* Cursor spotlight overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(500px circle at ${mouse.x}px ${mouse.y}px, rgba(77,178,179,0.06), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      {/* ── Left sticky panel — fluid clamp width ── */}
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[clamp(280px,38vw,480px)] lg:shrink-0 flex flex-col justify-between px-6 py-10 sm:px-8 sm:py-12 lg:px-10 lg:py-20 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-10"
        >
          <div className="space-y-2">
            <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-text-primary">
              Gaurav Patel
            </h1>
            <p className="text-xl font-semibold text-primary">
              Full Stack Engineer
            </p>
            <p className="pt-2 text-base text-text-secondary max-w-sm leading-relaxed">
              Building scalable, high-performance web products that feel crafted.
            </p>
          </div>

          <nav className="space-y-1" aria-label="On-page navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="group flex items-center gap-4 w-full text-left py-2"
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      isActive
                        ? 'w-12 bg-primary'
                        : 'w-6 bg-text-tertiary/50 group-hover:w-10 group-hover:bg-text-tertiary/80'
                    }`}
                  />
                  <span
                    className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                      isActive
                        ? 'text-primary font-semibold'
                        : 'text-text-tertiary group-hover:text-text-secondary'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-5"
        >
          {SOCIAL_LINKS.map(({ icon: Icon, href, label }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={label}
              className="text-text-muted hover:text-primary transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </aside>

      {/* ── Right content panel ── */}
      <main
        id="main-content"
        className="flex-1 min-w-0"
      >
        {children}
      </main>
    </div>
  );
}
