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

  const mainRef = useRef<HTMLElement>(null);
  const [mouse, setMouse] = useState({ x: -9999, y: -9999 });

  useEffect(() => {
    const onMove = (e: MouseEvent) => setMouse({ x: e.clientX, y: e.clientY });
    window.addEventListener('mousemove', onMove);
    return () => window.removeEventListener('mousemove', onMove);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (!el) return;
    const container = mainRef.current;
    if (container) {
      container.scrollTo({ top: el.offsetTop, behavior: 'smooth' });
    } else {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="relative min-h-screen lg:flex lg:gap-0">
      {/* Cursor spotlight overlay */}
      <div
        className="pointer-events-none fixed inset-0 z-30"
        style={{
          background: `radial-gradient(600px circle at ${mouse.x}px ${mouse.y}px, rgba(68,38,217,0.08), transparent 40%)`,
        }}
        aria-hidden="true"
      />

      {/* ── Left sticky panel ── */}
      <aside className="lg:sticky lg:top-0 lg:h-screen lg:w-[44%] xl:w-[42%] flex flex-col justify-between px-6 py-12 lg:px-10 lg:py-20 xl:px-14">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="space-y-8"
        >
          <div>
            <h1 className="text-5xl xl:text-6xl font-bold tracking-tight text-foreground">
              Gaurav Patel
            </h1>
            <p className="mt-3 text-xl font-medium text-primary">
              Full Stack Engineer
            </p>
            <p className="mt-4 text-base text-foreground/60 max-w-sm leading-relaxed">
              Building scalable, high-performance web products that feel crafted.
            </p>
          </div>

          <nav className="space-y-2" aria-label="On-page navigation">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => scrollTo(item.id)}
                  className="group flex items-center gap-4 w-full text-left py-1.5"
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

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="flex items-center gap-6"
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
        ref={mainRef}
        id="main-content"
        className="flex-1 lg:w-[56%] xl:w-[58%] lg:h-screen lg:overflow-y-auto"
      >
        {children}
      </main>
    </div>
  );
}
