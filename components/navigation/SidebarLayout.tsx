'use client';

import { useRef, useEffect, useState } from 'react';
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

  const containerRef = useRef<HTMLDivElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div
      ref={containerRef}
      className="relative min-h-screen lg:flex lg:gap-0"
    >
      {/* Cursor spotlight overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(68,38,217,0.08), transparent 40%)`,
        }}
        aria-hidden="true"
      />
      {/* ── Left sticky panel ── */}
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[42%] xl:w-[40%] flex flex-col justify-between px-8 py-16 lg:py-20">
        {/* Top: identity */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-6"
        >
          <div>
            <h1 className="text-4xl xl:text-5xl font-bold tracking-tight text-foreground">
              Gaurav Patel
            </h1>
            <p className="mt-2 text-lg font-medium text-primary">
              Full Stack Engineer
            </p>
            <p className="mt-3 text-base text-foreground/60 max-w-xs leading-relaxed">
              Building scalable, high-performance web products that feel crafted.
            </p>
          </div>

          {/* Section nav */}
          <nav className="mt-8 space-y-1" aria-label="On-page navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="group flex items-center gap-4 w-full text-left py-1"
                  aria-current={isActive ? 'location' : undefined}
                >
                  <span
                    className={`block h-px transition-all duration-300 ${
                      isActive
                        ? 'w-12 bg-foreground'
                        : 'w-6 bg-foreground/30 group-hover:w-10 group-hover:bg-foreground/60'
                    }`}
                  />
                  <span
                    className={`text-xs uppercase tracking-widest transition-colors duration-200 ${
                      isActive
                        ? 'text-foreground font-semibold'
                        : 'text-foreground/40 group-hover:text-foreground/70'
                    }`}
                  >
                    {item.label}
                  </span>
                </button>
              );
            })}
          </nav>
        </motion.div>

        {/* Bottom: socials */}
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
              className="text-foreground/40 hover:text-foreground transition-colors duration-200"
            >
              <Icon className="w-5 h-5" />
            </a>
          ))}
        </motion.div>
      </aside>

      {/* ── Right scrollable panel ── */}
      <main
        id="main-content"
        className="flex-1 lg:w-[58%] xl:w-[60%]"
      >
        {children}
      </main>
    </div>
  );
}
