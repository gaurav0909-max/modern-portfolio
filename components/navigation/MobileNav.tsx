'use client';

import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaProjectDiagram, FaUser, FaEnvelope, FaBriefcase, FaTimes, FaBars } from 'react-icons/fa';
import { cn } from '@/lib/utils';
import { useIntersectionObserver } from '@/hooks/useIntersectionObserver';
import { useReducedMotion } from '@/hooks/animations/useReducedMotion';

const navigationItems = [
  { id: 'about', label: 'About', icon: FaUser, href: '#about' },
  { id: 'experience', label: 'Experience', icon: FaBriefcase, href: '#experience' },
  { id: 'projects', label: 'Projects', icon: FaProjectDiagram, href: '#projects' },
  { id: 'contact', label: 'Contact', icon: FaEnvelope, href: '#contact' },
];

export default function MobileNav() {
  const [isOpen, setIsOpen] = useState(false);
  const sectionIds = navigationItems.map(item => item.id);
  const activeSection = useIntersectionObserver(sectionIds);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    document.body.style.overflow = isOpen ? 'hidden' : 'unset';
    return () => { document.body.style.overflow = 'unset'; };
  }, [isOpen]);

  const handleNavigate = (href: string) => {
    setIsOpen(false);
    const element = document.getElementById(href.replace('#', ''));
    if (element) element.scrollIntoView({ behavior: prefersReducedMotion ? 'instant' : 'smooth' });
  };

  const duration = prefersReducedMotion ? 0 : 0.25;

  return (
    <>
      {/* Hamburger Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={cn(
          'fixed top-6 right-6 z-[60] lg:hidden',
          'p-3 rounded-xl',
          'bg-white border border-border shadow-card backdrop-blur-xl',
          'text-text-primary hover:text-primary',
          'transition-colors duration-200',
          'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-white'
        )}
        aria-label={isOpen ? 'Close menu' : 'Open menu'}
        aria-expanded={isOpen}
      >
        <AnimatePresence mode="wait" initial={false}>
          {isOpen ? (
            <motion.span
              key="close"
              initial={{ rotate: -90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: 90, opacity: 0 }}
              transition={{ duration }}
              className="block"
            >
              <FaTimes className="w-5 h-5" />
            </motion.span>
          ) : (
            <motion.span
              key="open"
              initial={{ rotate: 90, opacity: 0 }}
              animate={{ rotate: 0, opacity: 1 }}
              exit={{ rotate: -90, opacity: 0 }}
              transition={{ duration }}
              className="block"
            >
              <FaBars className="w-5 h-5" />
            </motion.span>
          )}
        </AnimatePresence>
      </button>

      {/* Overlay and Menu */}
      <AnimatePresence>
        {isOpen && (
          <>
            {/* Backdrop */}
            <motion.div
              key="backdrop"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration }}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[55] lg:hidden"
              aria-hidden="true"
            />

            {/* Slide-out menu */}
            <motion.nav
              key="menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'tween', duration, ease: 'easeInOut' }}
              className="fixed top-0 right-0 bottom-0 w-[280px] bg-background border-l border-border z-[56] lg:hidden overflow-y-auto"
              aria-label="Mobile navigation menu"
            >
              <div className="flex flex-col px-6 py-20 gap-2">
                {navigationItems.map((item, index) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;

                  return (
                    <motion.button
                      key={item.id}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: prefersReducedMotion ? 0 : index * 0.06, duration }}
                      onClick={() => handleNavigate(item.href)}
                      className={cn(
                        'flex items-center gap-4 px-5 py-4 rounded-xl',
                        'text-left transition-all duration-200',
                        'focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2 focus-visible:ring-offset-background',
                        isActive
                          ? 'bg-primary/10 text-primary border border-primary/20'
                          : 'text-text-secondary hover:text-text-primary hover:bg-background-elevated'
                      )}
                      aria-label={`Navigate to ${item.label}`}
                      aria-current={isActive ? 'true' : 'false'}
                    >
                      <Icon className="w-5 h-5 flex-shrink-0" />
                      <span className="text-lg font-medium">{item.label}</span>
                    </motion.button>
                  );
                })}
              </div>
            </motion.nav>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
