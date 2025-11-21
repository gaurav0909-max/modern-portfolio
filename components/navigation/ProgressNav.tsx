'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { cn } from '@/lib/utils';

const sections = [
  { id: 'home', label: 'Home' },
  { id: 'projects', label: 'Projects' },
  { id: 'about', label: 'About' },
  { id: 'contact', label: 'Contact' },
];

/**
 * Sticky progress navigation dots
 * Shows current section with smooth transitions
 * Based on REDESIGN_ADDENDUM.md specifications
 */
export function ProgressNav() {
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const observerOptions = {
      root: null,
      rootMargin: '-50% 0px -50% 0px',
      threshold: 0,
    };

    const observerCallback = (entries: IntersectionObserverEntry[]) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveSection(entry.target.id);
        }
      });
    };

    const observer = new IntersectionObserver(observerCallback, observerOptions);

    sections.forEach((section) => {
      const element = document.getElementById(section.id);
      if (element) observer.observe(element);
    });

    return () => observer.disconnect();
  }, []);

  const handleClick = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <nav className="fixed right-8 top-1/2 -translate-y-1/2 z-40 hidden lg:block">
      <div className="flex flex-col gap-6">
        {sections.map((section) => {
          const isActive = activeSection === section.id;

          return (
            <button
              key={section.id}
              onClick={() => handleClick(section.id)}
              className="group relative flex items-center gap-4"
              aria-label={`Go to ${section.label}`}
            >
              {/* Dot */}
              <div className="relative">
                <div
                  className={cn(
                    'w-3 h-3 rounded-full border-2 transition-all duration-300',
                    isActive
                      ? 'border-primary bg-primary scale-125'
                      : 'border-text-tertiary bg-transparent hover:border-text-secondary'
                  )}
                />

                {/* Active indicator */}
                {isActive && (
                  <motion.div
                    layoutId="activeSection"
                    className="absolute inset-0 w-3 h-3 rounded-full border-2 border-primary"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </div>

              {/* Label - shows on hover */}
              <span
                className={cn(
                  'absolute right-full mr-4 px-3 py-1.5 rounded-lg',
                  'bg-background-elevated border border-border',
                  'text-sm text-text-primary font-medium whitespace-nowrap',
                  'opacity-0 group-hover:opacity-100',
                  'transition-opacity duration-200',
                  'pointer-events-none'
                )}
              >
                {section.label}
              </span>
            </button>
          );
        })}
      </div>
    </nav>
  );
}
