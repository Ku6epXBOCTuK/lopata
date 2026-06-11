import { notFound } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { DOSSIERS, getDossier } from '@/lib/dossiers'
import { CONTENT } from '@/lib/dossier-content'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'
import {
  Stamp,
  OverlayStamp,
  FieldRow,
  SectionTitle,
  Perforation,
} from '@/components/doc-elements'

export function generateStaticParams() {
  return DOSSIERS.map((d) => ({ slug: d.slug }))
}

export default async function DossierPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const dossier = getDossier(slug)
  const content = CONTENT[slug]
  if (!dossier || !content) notFound()

  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="banner-classified border-y border-foreground/30">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-1.5 text-[0.65rem] font-700 uppercase tracking-[0.2em] sm:px-6">
          <span>{dossier.classification}</span>
          <span className="hidden sm:inline">Дело № {dossier.code}</span>
          <span>Экз. № 1</span>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <Link
          href="/"
          className="font-heading text-xs font-600 uppercase tracking-wider text-muted-foreground hover:text-primary"
        >
          ← Вернуться в картотеку
        </Link>

        <article className="paper relative mt-4 -rotate-[0.3deg] p-6 sm:p-10">
          <span className="tape -top-3 left-1/2 hidden -translate-x-1/2 rotate-1 sm:block" aria-hidden="true" />

          {/* corner stamp */}
          <div className="pointer-events-none absolute right-3 top-4 rotate-[9deg] sm:right-8 sm:top-10">
            <OverlayStamp className="text-xl sm:text-3xl">
              {dossier.classification}
            </OverlayStamp>
          </div>

          <header className="pb-5">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
              {dossier.category} · Дело № {dossier.code} · Угроза{' '}
              {dossier.threat}
            </p>
            <h1 className="mt-3 max-w-2xl text-balance font-heading text-3xl font-700 uppercase leading-[0.95] tracking-tight sm:text-5xl">
              {dossier.name}
            </h1>
            <p className="mt-3 max-w-2xl text-sm italic leading-relaxed text-muted-foreground">
              {dossier.fullName}
            </p>
            <hr className="rule rule-red mt-5" />
          </header>

          {/* Spec table */}
          <section className="mt-2">
            <dl>
              {content.fields.map((f) => (
                <FieldRow key={f.label} label={f.label}>
                  {f.value}
                </FieldRow>
              ))}
            </dl>
          </section>

          {/* Blueprint */}
          {content.hasBlueprint && (
            <figure className="paper paper-strong mt-8 p-3">
              <Image
                src="/blueprint-lopata.png"
                alt={`Технический чертёж изделия ${dossier.name}`}
                width={1200}
                height={800}
                className="h-auto w-full mix-blend-multiply"
              />
              <figcaption className="mt-2 border-t border-dashed border-border pt-2 text-center font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                Рис. 1 — Чертёж общего вида · ГОСТ-садовый 12-86
              </figcaption>
            </figure>
          )}

          {/* Photo */}
          {content.hasPhoto && (
            <figure className="paper paper-strong mt-8 max-w-sm rotate-1 p-2">
              <Image
                src="/classified-photo.png"
                alt="Рассекреченный фотоматериал"
                width={600}
                height={600}
                className="h-auto w-full grayscale"
              />
              <figcaption className="mt-2 border-t border-dashed border-border pt-2 font-mono text-[0.6rem] uppercase tracking-wider text-muted-foreground">
                Фотоматериал · участок №6 · 03:14
              </figcaption>
            </figure>
          )}

          {/* Sections */}
          <div className="mt-10 space-y-10">
            {content.sections.map((s) => (
              <section key={s.index}>
                <SectionTitle index={s.index}>{s.title}</SectionTitle>
                <div className="text-sm leading-relaxed text-foreground/90">
                  {s.body}
                </div>
              </section>
            ))}
          </div>

          {/* Signature block */}
          <footer className="mt-12 grid grid-cols-1 gap-6 border-t border-dashed border-border pt-6 sm:grid-cols-2">
            <div>
              <p className="text-[0.7rem] uppercase tracking-wider text-muted-foreground">
                Утвердил
              </p>
              <p className="mt-3 font-heading text-base font-600">
                Председатель Трибунала
              </p>
              <p className="mt-1 border-b border-foreground/50 pb-1 font-mono text-sm text-muted-foreground">
                подпись: [ИЗЪЯТО]
              </p>
            </div>
            <div className="flex items-start justify-end">
              <Image
                src="/emblem.png"
                alt=""
                width={90}
                height={90}
                className="h-20 w-20 rotate-6 opacity-80 mix-blend-multiply"
              />
            </div>
          </footer>
        </article>

        {/* Cross-references */}
        <section className="mt-10">
          <h2 className="mb-1 font-heading text-lg font-700 uppercase tracking-wide">
            См. также
          </h2>
          <hr className="rule mb-5 w-40" />
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            {DOSSIERS.filter((d) => d.slug !== slug)
              .slice(0, 4)
              .map((d) => (
                <Link
                  key={d.slug}
                  href={`/dossier/${d.slug}`}
                  className="paper flex items-center justify-between px-3 py-2.5 text-sm transition-all hover:-translate-y-0.5 hover:text-primary"
                >
                  <span className="font-heading uppercase tracking-wide">
                    {d.name}
                  </span>
                  <span className="font-mono text-[0.65rem] text-muted-foreground">
                    {d.code}
                  </span>
                </Link>
              ))}
          </div>
        </section>

        <div className="mt-12">
          <Perforation />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
