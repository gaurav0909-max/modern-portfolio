import dynamic from 'next/dynamic';
import SidebarLayout from '@/components/navigation/SidebarLayout';
import About from '@/components/sections/About';
import Experience from '@/components/sections/Experience';
import Projects from '@/components/sections/Projects';
import Contact from '@/components/sections/Contact';

// Cmd+K command palette — additive, not a nav replacement
const CommandPalette = dynamic(() =>
  import('@/components/navigation/CommandPalette').then((mod) => ({ default: mod.CommandPalette }))
);

export default function Home() {
  return (
    <>
      <SidebarLayout>
        <About />
        <Experience />
        <Projects />
        <Contact />
      </SidebarLayout>

      <CommandPalette />
    </>
  );
}
