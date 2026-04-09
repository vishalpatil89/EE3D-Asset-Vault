import * as React from 'react'

import { cn } from '@/lib/utils'

function Input({ className, type, ...props }: React.ComponentProps<'input'>) {
  return (
    <input
      type={type}
      data-slot="input"
      className={cn(
        'file:text-foreground placeholder:text-muted-foreground selection:bg-primary selection:text-primary-foreground bg-input/40 border-input h-10 w-full min-w-0 rounded-lg border border-primary/30 px-3 py-2 text-base shadow-xs transition-all outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 md:text-sm',
        'focus-visible:border-primary/60 focus-visible:ring-primary/40 focus-visible:ring-[3px] focus-visible:shadow-lg focus-visible:shadow-primary/30',
        'aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 aria-invalid:border-destructive hover:border-primary/50 hover:bg-input/50',
        className,
      )}
      {...props}
    />
  )
}

export { Input }
