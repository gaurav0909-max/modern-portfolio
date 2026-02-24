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
    default: 'bg-background-elevated text-text-secondary border-border hover:bg-background-elevated-hover hover:border-border-hover',
    primary: 'bg-primary/10 text-primary border-primary/20 hover:bg-primary/20 hover:border-primary/40',
    secondary: 'bg-secondary/10 text-secondary border-secondary/20 hover:bg-secondary/20 hover:border-secondary/40',
    accent: 'bg-accent/10 text-accent border-accent/20 hover:bg-accent/20 hover:border-accent/40',
  }

  return (
    <span
      className={cn(
        'inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-sm font-medium border backdrop-blur-sm select-none transition-all duration-300 hover:scale-[1.03] hover:-translate-y-0.5 ring-0 hover:ring-2 ring-current',
        variants[variant],
        className
      )}
    >
      {icon && <span className="text-base">{icon}</span>}
      {children}
    </span>
  )
}
