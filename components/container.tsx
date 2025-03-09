import { cn } from '@/lib/utils'
import React from 'react'

export function Container({
  children,
  className,
}: {
  children: React.ReactNode
  className?: string
}) {
  return (
    <div
      className={cn(
        'flex items-center justify-center flex-col h-screen w-full',
        className
      )}
    >
      {children}
    </div>
  )
}
