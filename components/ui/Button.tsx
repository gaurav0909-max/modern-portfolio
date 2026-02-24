import { cn } from '@/lib/utils'
import { ButtonHTMLAttributes, ReactNode } from 'react'
import type { IconType } from 'react-icons'

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode
  variant?: 'primary' | 'secondary' | 'glass' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  className?: string
  icon?: ReactNode | IconType
}

export function Button({
  children,
  variant = 'primary',
  size = 'md',
  className,
  icon,
  ...props
}: ButtonProps) {
  const baseStyles = 'font-medium rounded-xl transition-all duration-300 inline-flex items-center justify-center gap-2'

  const variants = {
    primary: 'bg-primary hover:bg-primary-dark text-white shadow-md shadow-primary/30 hover:shadow-lg hover:shadow-primary/40 hover:scale-[1.02]',
    secondary: 'bg-secondary hover:bg-secondary-dark text-white shadow-md shadow-secondary/30 hover:shadow-lg hover:shadow-secondary/40 hover:scale-[1.02]',
    glass: 'bg-white hover:bg-background-elevated backdrop-blur-lg border border-border hover:border-border-accent text-text-primary shadow-card hover:shadow-card-hover ring-1 ring-border/60 hover:ring-border-accent',
    ghost: 'hover:bg-primary/5 text-text-primary',
  }

  const sizes = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  }

  const renderIcon = () => {
    if (!icon) return null

    if (typeof icon === 'function') {
      const IconComponent = icon as IconType
      return <IconComponent className="text-lg" />
    }

    return <span className="text-lg">{icon}</span>
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
      {renderIcon()}
      {children}
    </button>
  )
}
