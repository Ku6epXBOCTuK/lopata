import Link from 'next/link'
import type { Dossier } from '@/lib/dossiers'
import { Stamp } from '@/components/doc-elements'

const classColor: Record<string, string> = {
  'СОВ. СЕКРЕТНО': 'text-primary',
  'СЕКРЕТНО': 'stamp-ink',
  'ДСП': 'stamp-ink',
  'РАССЕКРЕЧЕНО': 'stamp-ink opacity-60',
}

export function DossierCard({ d, rotate }: { d: Dossier; rotate?: string }) {
  return (
    <Link
      href={`/dossier/${d.slug}`}
      style={{ rotate }}
      className="paper group relative flex flex-col gap-3 p-5 transition-all duration-200 hover:-translate-y-1 hover:rotate-0 hover:shadow-[0_26px_50px_-22px_rgba(40,25,15,0.7)]"
    >
      {/* tape pin */}
      <span className="tape -top-3 left-1/2 -translate-x-1/2 -rotate-2" aria-hidden="true" />

      <div className="flex items-start justify-between gap-2">
        <div>
          <p className="font-mono text-[0.65rem] uppercase tracking-widest text-muted-foreground">
            Дело № {d.code}
          </p>
          <p className="mt-0.5 font-heading text-[0.7rem] uppercase tracking-wider text-primary">
            {d.category}
          </p>
        </div>
        <Stamp
          className={`px-1.5 py-0.5 text-[0.55rem] ${classColor[d.classification] ?? ''}`}
        >
          {d.classification}
        </Stamp>
      </div>

      <h3 className="font-heading text-xl font-700 uppercase leading-none tracking-tight transition-colors group-hover:text-primary">
        {d.name}
      </h3>
      <p className="text-xs italic leading-snug text-muted-foreground">
        {d.fullName}
      </p>
      <p className="text-sm leading-relaxed text-foreground/90">{d.summary}</p>

      <div className="mt-auto flex items-center justify-between border-t border-dashed border-border pt-3">
        <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
          Угроза: <span className="text-foreground">{d.threat}</span>
        </span>
        <span className="font-heading text-[0.7rem] font-600 uppercase tracking-wider text-primary opacity-0 transition-opacity group-hover:opacity-100">
          Открыть дело →
        </span>
      </div>
    </Link>
  )
}

export { Stamp }
