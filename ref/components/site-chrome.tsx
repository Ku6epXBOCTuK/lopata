import Link from 'next/link'
import Image from 'next/image'

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-30 border-b border-foreground/25 bg-card/85 backdrop-blur-sm shadow-[0_2px_12px_-8px_rgba(40,25,15,0.6)]">
      <div className="mx-auto flex max-w-5xl flex-col gap-4 px-4 py-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
        <Link href="/" className="flex items-center gap-3">
          <Image
            src="/emblem.png"
            alt="Эмблема Трибунала"
            width={52}
            height={52}
            className="h-12 w-12 mix-blend-multiply"
          />
          <div className="leading-tight">
            <p className="font-heading text-base font-700 uppercase tracking-wide sm:text-lg">
              Архив ДНТ-7
            </p>
            <p className="text-[0.65rem] uppercase tracking-widest text-muted-foreground">
              Дачно-Наблюдательный Трибунал
            </p>
          </div>
        </Link>
        <nav className="flex flex-wrap items-center gap-x-5 gap-y-1 font-heading text-xs font-600 uppercase tracking-wider">
          {[
            { href: '/', label: 'Картотека' },
            { href: '/dossier/directive-kompot', label: 'Уставы' },
            { href: '/dossier/lopata-bs-3000', label: 'Инвентарь' },
            { href: '/protocol', label: 'Протокол' },
          ].map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="relative text-foreground/80 transition-colors hover:text-primary"
            >
              {l.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  )
}

export function SiteFooter() {
  return (
    <footer className="mt-16 border-t border-foreground/25 bg-card/60">
      <div className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
        <div className="flex flex-col justify-between gap-4 text-[0.7rem] uppercase tracking-wider text-muted-foreground sm:flex-row">
          <p>
            ©{' '}
            <span className="text-foreground">
              Дачно-Наблюдательный Трибунал №7
            </span>{' '}
            · Кооператив «Заря-9»
          </p>
          <p>Форма А-13 · Хранить вечно · Не выносить за периметр</p>
        </div>
        <p className="mt-4 max-w-2xl text-[0.7rem] leading-relaxed text-muted-foreground">
          Все материалы являются художественным вымыслом. Любое совпадение с
          реальными грядками, соседями и небесными телами случайно. Разглашение
          преследуется лишением компоста.
        </p>
      </div>
    </footer>
  )
}
