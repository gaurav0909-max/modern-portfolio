'use client';

import { useEffect, useRef } from 'react';
import { FiDownload } from 'react-icons/fi';
import { Button } from '@/components/ui/Button';
import gsap from 'gsap';
import { useReducedMotion } from '@/hooks/animations/useReducedMotion';

const roles = [
  'Software Developer',
  'MERN Stack Developer',
  'React Specialist',
  'Full-Stack Engineer',
];

/**
 * Modern Hero Section - Split Layout
 * Based on REDESIGN_ADDENDUM.md specifications
 * 55% narrative stack / 45% animated canvas
 */
export default function HeroNew() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const prefersReducedMotion = useReducedMotion();

  useEffect(() => {
    if (prefersReducedMotion || !nameRef.current) return;

    // Character-by-character name reveal animation
    const name = nameRef.current;
    const text = name.textContent || '';
    name.textContent = '';

    // Split text into characters
    text.split('').forEach((char) => {
      const span = document.createElement('span');
      span.textContent = char === ' ' ? '\u00A0' : char;
      span.style.opacity = '0';
      name.appendChild(span);
    });

    // Animate characters
    const chars = name.querySelectorAll('span');
    gsap.to(chars, {
      opacity: 1,
      duration: 0.03,
      stagger: 0.03,
      ease: 'power2.out',
    });
  }, [prefersReducedMotion]);

  const scrollToProjects = () => {
    document.getElementById('projects')?.scrollIntoView({ behavior: 'smooth' });
  };

  const downloadResume = () => {
    window.open('https://drive.google.com/file/d/1uyl3ln8eifxrHdoMOzt5YfBOC_MKp_02/view?usp=sharing', '_blank');
  };

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center px-6 py-20 lg:py-32 overflow-hidden"
    >
      {/* Aurora background */}
      <div className="aurora-background" />

      {/* Grid pattern overlay */}
      <div className="absolute inset-0 -z-10 opacity-20">
        <div
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(139, 92, 246, 0.15) 1px, transparent 1px)`,
            backgroundSize: '40px 40px',
            maskImage:
              'radial-gradient(ellipse at center, black 40%, transparent 80%)',
            WebkitMaskImage:
              'radial-gradient(ellipse at center, black 40%, transparent 80%)',
          }}
        />
      </div>

      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left: Narrative Stack (55% on desktop, full width on mobile) */}
          <div className="lg:col-span-7 space-y-6 lg:space-y-8">
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-surface-2 border border-border" role="status" aria-label="Available for new opportunities">
              <div className="w-2 h-2 rounded-full bg-success animate-pulse" aria-hidden="true" />
              <span className="text-sm text-text-secondary dark:text-text-dark-secondary font-mono">
                Available for new opportunities
              </span>
            </div>

            {/* Name - Character reveal */}
            <h1
              ref={nameRef}
              className="font-display text-display-xl lg:text-display-2xl font-bold text-text-primary dark:text-white"
              style={{ willChange: 'opacity' }}
            >
              Gaurav Patel
            </h1>

            {/* Role - Typed subtitle */}
            <div className="space-y-2">
              <p className="text-xl lg:text-2xl text-text-secondary dark:text-text-dark-secondary">
                Software Developer crafting{' '}
                <span className="gradient-text font-semibold">
                  resilient full-stack platforms
                </span>
              </p>
              <p className="text-lg text-text-tertiary dark:text-text-dark-tertiary max-w-xl">
                Building high-performance applications with React, Next.js, and Node.js.
                2+ years transforming ideas into scalable products serving 10K+ users.
              </p>
            </div>

            {/* CTAs */}
            <div className="flex flex-wrap gap-4">
              <Button
                variant="glass"
                size="lg"
                icon={FiDownload}
                onClick={downloadResume}
                aria-label="Download resume PDF"
              >
                Download Resume
              </Button>
            </div>

            {/* Trust signals */}
            <div className="flex flex-wrap gap-8 pt-4">
              <div>
                <div className="text-display-md font-bold gradient-text">2+</div>
                <div className="text-sm text-text-secondary dark:text-text-dark-secondary">Years Experience</div>
              </div>
              <div>
                <div className="text-display-md font-bold gradient-text">15+</div>
                <div className="text-sm text-text-secondary dark:text-text-dark-secondary">Projects Shipped</div>
              </div>
              <div>
                <div className="text-display-md font-bold gradient-text">10K+</div>
                <div className="text-sm text-text-secondary dark:text-text-dark-secondary">Active Users</div>
              </div>
              <div>
                <div className="text-display-md font-bold gradient-text">99%</div>
                <div className="text-sm text-text-secondary dark:text-text-dark-secondary">Uptime</div>
              </div>
            </div>
          </div>

          {/* Right: Animated Canvas (45% on desktop, smaller on mobile/tablet) */}
          <div className="lg:col-span-5 relative">
            <div className="relative aspect-square w-64 sm:w-80 md:max-w-sm lg:max-w-md mx-auto">
              {/* Floating tech glyphs */}
              <div className="absolute inset-0 flex items-center justify-center">
                {/* Center glow - responsive sizing */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="w-48 h-48 sm:w-56 sm:h-56 lg:w-64 lg:h-64 bg-primary/20 rounded-full blur-3xl animate-glow-pulse" style={{ willChange: 'transform, opacity' }} />
                </div>

                {/* Orbiting elements */}
                <div className="relative w-full h-full">
                  {[
                    { icon: '⚛️', delay: '0s', x: '80%', y: '20%' },
                    { icon: '⚡', delay: '1s', x: '20%', y: '80%' },
                    { icon: '🚀', delay: '2s', x: '70%', y: '70%' },
                    { icon: '💡', delay: '3s', x: '30%', y: '30%' },
                  ].map((item, i) => (
                    <div
                      key={i}
                      className="absolute w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center text-2xl sm:text-3xl animate-float"
                      style={{
                        left: item.x,
                        top: item.y,
                        animationDelay: item.delay,
                        willChange: 'transform',
                      }}
                    >
                      <div className="relative">
                        <div className="absolute inset-0 bg-primary/20 rounded-full blur-xl" />
                        <div className="relative surface-card p-2 sm:p-3">
                          {item.icon}
                        </div>
                      </div>
                    </div>
                  ))}
                </div>

                {/* Center badge - responsive sizing */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="surface-card p-4 sm:p-6 lg:p-8 text-center space-y-2">
                    <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 mx-auto rounded-full bg-gradient-hero flex items-center justify-center text-lg sm:text-xl lg:text-2xl font-bold">
                      GP
                    </div>
                    <div className="text-xs sm:text-sm font-mono text-text-secondary dark:text-text-dark-secondary">
                      Full Stack Engineer
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll indicator - visible on all screens */}
      <div className="absolute bottom-6 sm:bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2">
        <span className="text-xs text-text-tertiary dark:text-text-dark-tertiary font-mono hidden sm:block">SCROLL TO EXPLORE</span>
        <div className="w-px h-8 sm:h-12 bg-gradient-to-b from-border to-transparent" />
      </div>
    </section>
  );
}
