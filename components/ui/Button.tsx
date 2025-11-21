import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: ReactNode
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-lg transition-all duration-300 inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-lg shadow-primary/50 hover:shadow-primary/70 hover:scale-105',
    secondary: 'bg-secondary hover:bg-secondary-dark text-background-dark shadow-lg shadow-secondary/50 hover:shadow-secondary/70 hover:scale-105',
    glass: 'bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 hover:border-white/20 text-text-primary',
    ghost: 'hover:bg-white/5 text-text-primary',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  return (
    <button
      className={cn(
        baseStyles,
        variants[variant],
        sizes[size],
        className
      )}
      {...props}
    >
      {icon && <span className="text-lg">{icon}</span>}
      {children}
    </button>
  )
}
