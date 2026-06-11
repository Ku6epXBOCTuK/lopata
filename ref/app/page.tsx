import Image from 'next/image'
import { DOSSIERS } from '@/lib/dossiers'
import { DossierCard } from '@/components/dossier-card'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'
import { Stamp, OverlayStamp, Perforation } from '@/components/doc-elements'

const tilts = ['-0.6deg', '0.5deg', '-0.4deg', '0.7deg', '-0.5deg', '0.4deg']

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      {/* Classified banner */}
      <div className="banner-classified border-y border-foreground/30">
        <div className="mx-auto flex max-w-5xl items-center justify-between gap-4 px-4 py-1.5 text-[0.65rem] font-700 uppercase tracking-[0.2em] sm:px-6">
          <span>Сов. Секретно</span>
          <span className="hidden sm:inline">Экз. № 1 из 3</span>
          <span>Хранить вечно</span>
        </div>
      </div>

      <main className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        {/* Hero document header */}
        <section className="paper relative mb-12 -rotate-[0.4deg] p-6 sm:p-10">
          <span className="tape -top-3 left-10 rotate-3" aria-hidden="true" />
          <span className="tape -top-3 right-12 -rotate-2" aria-hidden="true" />

          <div className="pointer-events-none absolute right-4 top-4 sm:right-8 sm:top-8">
            <Image
              src="/emblem.png"
              alt=""
              width={120}
              height={120}
              className="h-20 w-20 opacity-90 mix-blend-multiply sm:h-28 sm:w-28"
            />
          </div>

          <p className="font-mono text-xs uppercase tracking-[0.3em] text-muted-foreground">
            Союз Садоводческих Кооперативов · Отдел «Грядка»
          </p>
          <h1 className="mt-3 max-w-2xl text-balance font-heading text-3xl font-700 uppercase leading-[0.95] tracking-tight sm:text-5xl">
            Архив Дачно-Наблюдательного Трибунала №7
          </h1>
          <p className="mt-4 max-w-xl text-pretty text-sm leading-relaxed text-foreground/90">
            Рассекреченный свод документов, инструкций и уставов по
            противодействию рептилоидным агентам планеты{' '}
            <span className="font-600 text-primary">Нибиру</span> на территориях
            садоводческих товариществ. Допуск согласно форме А-13.
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-3">
            <Stamp>Рассекречено · 06.07.2026</Stamp>
            <Stamp variant="ink" skew={false}>
              Подлежит изучению
            </Stamp>
            <span className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
              Регистр. № ДНТ-7/04-1986
            </span>
          </div>

          <div className="pointer-events-none absolute -bottom-3 right-6 rotate-[8deg] sm:right-16">
            <OverlayStamp>Архивъ · ДНТ-7</OverlayStamp>
          </div>
        </section>

        {/* Stat strip */}
        <section className="mb-12 grid grid-cols-2 gap-4 sm:grid-cols-4">
          {[
            { k: 'Дел в картотеке', v: '147' },
            { k: 'Заземлено агентов', v: '38' },
            { k: 'Активных участков', v: '9' },
            { k: 'Уровень тревоги', v: 'III' },
          ].map((s, i) => (
            <div
              key={s.k}
              className="paper px-4 py-5 text-center"
              style={{ rotate: tilts[i] }}
            >
              <p className="font-heading text-3xl font-700 text-primary">
                {s.v}
              </p>
              <p className="mt-1 text-[0.65rem] uppercase tracking-wider text-muted-foreground">
                {s.k}
              </p>
            </div>
          ))}
        </section>

        {/* Catalog */}
        <section>
          <div className="mb-8 flex items-end justify-between">
            <div>
              <h2 className="font-heading text-2xl font-700 uppercase tracking-wide">
                Картотека дел
              </h2>
              <hr className="rule rule-red mt-2 w-48" />
            </div>
            <p className="font-mono text-[0.65rem] uppercase tracking-wider text-muted-foreground">
              Опись · лист 1
            </p>
          </div>

          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {DOSSIERS.map((d, i) => (
              <DossierCard key={d.slug} d={d} rotate={tilts[i % tilts.length]} />
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
