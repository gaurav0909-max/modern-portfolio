import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BadgeProps {
  children: ReactNode
  variant?: 'default' | 'primary' | 'secondary' | 'accent'
  className?: string
  icon?: ReactNode
}

export function Badge({
  children,
  variant = 'default',
  className,
  icon
}: BadgeProps) {
  const variants = {
    default: 'bg-white/10 text-text-primary border-white/20',
    primary: 'bg-primary/20 text-primary border-primary/30',
    secondary: 'bg-secondary/20 text-secondary border-secondary/30',
    accent: 'bg-accent/20 text-accent border-accent/30',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm',
        variants[variant],
        className
      )}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </span>
  )
}
