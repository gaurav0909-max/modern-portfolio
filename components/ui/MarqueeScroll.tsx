'use client';

import { motion } from 'framer-motion';
import { Badge } from './Badge';

interface MarqueeItem {
  id: string;
  label: string;
  color?: 'default' | 'primary' | 'secondary' | 'accent';
}

interface MarqueeScrollProps {
  items: MarqueeItem[];
  speed?: number;
  direction?: 'left' | 'right';
  pauseOnHover?: boolean;
  className?: string;
}

export default function MarqueeScroll({
  items,
  speed = 50,
  direction = 'left',
  pauseOnHover = true,
  className = '',
}: MarqueeScrollProps) {
  // Duplicate items for seamless loop
  const duplicatedItems = [...items, ...items];

  const animationDuration = items.length * (100 / speed);

  return (
    <div className={`relative overflow-hidden ${className}`}>
      {/* Gradient overlays for fade effect */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-background-dark to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-background-dark to-transparent z-10 pointer-events-none" />

      <motion.div
        className="flex gap-4"
        animate={{
          x: direction === 'left' ? ['0%', '-50%'] : ['-50%', '0%'],
        }}
        transition={{
          duration: animationDuration,
          repeat: Infinity,
          ease: 'linear',
        }}
        whileHover={pauseOnHover ? { animationPlayState: 'paused' } : {}}
      >
        {duplicatedItems.map((item, index) => (
          <div key={`${item.id}-${index}`} className="flex-shrink-0">
            <Badge variant={item.color || 'default'}>{item.label}</Badge>
          </div>
        ))}
      </motion.div>
    </div>
  );
}
