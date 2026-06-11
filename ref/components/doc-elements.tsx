import { cn } from '@/lib/utils'
import type { ReactNode } from 'react'

export function Stamp({
  children,
  className,
  skew = true,
  variant = 'red',
}: {
  children: ReactNode
  className?: string
  skew?: boolean
  variant?: 'red' | 'ink'
}) {
  return (
    <span
      className={cn(
        'stamp px-2 py-1 text-[0.65rem] sm:text-xs',
        variant === 'ink' && 'stamp-ink',
        skew && 'stamp-skew',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function OverlayStamp({
  children,
  className,
}: {
  children: ReactNode
  className?: string
}) {
  return (
    <span
      aria-hidden="true"
      className={cn(
        'stamp-overlay pointer-events-none select-none px-4 py-2 font-heading text-2xl sm:text-4xl',
        className,
      )}
    >
      {children}
    </span>
  )
}

export function Redacted({ children }: { children: ReactNode }) {
  return <span className="redacted px-1">{children}</span>
}

export function FieldRow({
  label,
  children,
}: {
  label: string
  children: ReactNode
}) {
  return (
    <div className="grid grid-cols-1 gap-1 border-b border-dashed border-border py-3 sm:grid-cols-[200px_1fr] sm:gap-4">
      <dt className="font-heading text-xs font-600 uppercase tracking-wider text-muted-foreground">
        {label}
      </dt>
      <dd className="text-sm leading-relaxed text-foreground">{children}</dd>
    </div>
  )
}

export function SectionTitle({
  index,
  children,
}: {
  index: string
  children: ReactNode
}) {
  return (
    <h2 className="mb-4 flex items-baseline gap-3 font-heading text-lg font-700 uppercase tracking-wide">
      <span className="flex h-7 min-w-7 items-center justify-center bg-primary px-1.5 text-sm text-primary-foreground">
        {index}
      </span>
      <span className="flex-1 border-b border-foreground/30 pb-1">
        {children}
      </span>
    </h2>
  )
}

export function Perforation({ className }: { className?: string }) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        'flex h-4 w-full items-center justify-between overflow-hidden px-2 opacity-60',
        className,
      )}
    >
      {Array.from({ length: 60 }).map((_, i) => (
        <span
          key={i}
          className="h-1.5 w-1.5 shrink-0 rounded-full bg-background shadow-[inset_0_1px_2px_rgba(0,0,0,0.35)]"
        />
      ))}
    </div>
  )
}
