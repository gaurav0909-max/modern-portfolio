import HeroNew from '@/components/sections/HeroNew';
import Projects from '@/components/sections/Projects';
import About from '@/components/sections/About';
import Contact from '@/components/sections/Contact';
import MarqueeScroll from '@/components/ui/MarqueeScroll';
import DockNavigation from '@/components/navigation/DockNavigation';
import { CommandPalette } from '@/components/navigation/CommandPalette';
import { ProgressNav } from '@/components/navigation/ProgressNav';
import { getMarqueeSkills } from '@/data/skills';

export default function Home() {
  const skills = getMarqueeSkills();

  return (
    <main className="min-h-screen">
      {/* Hero Section */}
      <HeroNew />

      {/* Tech Stack Marquee */}
      <section className="py-12 border-y border-white/5">
        <div className="max-w-7xl mx-auto px-6 mb-6">
          <h3 className="text-center text-text-secondary text-sm uppercase tracking-wider">
            Technologies I Work With
          </h3>
        </div>
        <MarqueeScroll
          items={skills.map((skill) => ({
            id: skill.id,
            label: skill.label,
            color: skill.color,
          }))}
          speed={100}
          pauseOnHover
        />
      </section>

      {/* Projects Section */}
      <Projects />

      {/* About Section */}
      <About />

      {/* Contact Section */}
      <Contact />

      {/* Dock Navigation */}
      <DockNavigation />

      {/* Command Palette (Cmd+K) */}
      <CommandPalette />

      {/* Progress Navigation */}
      <ProgressNav />
    </main>
  );
}
