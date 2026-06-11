import Image from 'next/image'
import { SiteHeader, SiteFooter } from '@/components/site-chrome'
import { Stamp, SectionTitle, Perforation } from '@/components/doc-elements'

const STEPS = [
  {
    n: '01',
    t: 'Обнаружение',
    d: 'Зафиксировать признаки маскировки: немигающий взгляд, любовь к солнцу, неприятие соли, идеальная рассада без труда.',
  },
  {
    n: '02',
    t: 'Доклад',
    d: 'Сообщить старшему по кооперативу через условный сигнал (три удара по бочке с водой).',
  },
  {
    n: '03',
    t: 'Локализация',
    d: 'Применить изделие Л.О.П.А.Т.А. (ИНВ-001) для заземления. Соблюдать меры безопасности.',
  },
  {
    n: '04',
    t: 'Экранирование',
    d: 'Накрыть изделием В.Е.Д.Р.О. (ИНВ-022) для блокировки канала связи с орбитой.',
  },
  {
    n: '05',
    t: 'Регистрация',
    d: 'Внести запись в журнал формы Б-2. Присвоить делу номер. Хранить вечно.',
  },
]

export default function ProtocolPage() {
  return (
    <div className="min-h-screen">
      <SiteHeader />

      <div className="banner-classified border-y border-foreground/30">
        <div className="mx-auto flex max-w-4xl items-center justify-between gap-4 px-4 py-1.5 text-[0.65rem] font-700 uppercase tracking-[0.2em] sm:px-6">
          <span>Для служебного пользования</span>
          <span className="hidden sm:inline">Форма Б-2</span>
          <span>Изучить под роспись</span>
        </div>
      </div>

      <main className="mx-auto max-w-4xl px-4 py-8 sm:px-6">
        <article className="paper relative -rotate-[0.3deg] p-6 sm:p-10">
          <span className="tape -top-3 left-1/2 hidden -translate-x-1/2 rotate-1 sm:block" aria-hidden="true" />
          <div className="pointer-events-none absolute right-4 top-4 sm:right-8 sm:top-10">
            <Image
              src="/emblem.png"
              alt=""
              width={90}
              height={90}
              className="h-16 w-16 opacity-80 mix-blend-multiply sm:h-20 sm:w-20"
            />
          </div>

          <header className="pb-5">
            <p className="font-mono text-[0.7rem] uppercase tracking-[0.25em] text-muted-foreground">
              Единый полевой протокол · ДНТ-7
            </p>
            <h1 className="mt-3 max-w-xl text-balance font-heading text-3xl font-700 uppercase leading-[0.95] tracking-tight sm:text-5xl">
              Протокол противодействия
            </h1>
            <div className="mt-4 flex flex-wrap gap-3">
              <Stamp>Обязательно к исполнению</Stamp>
              <Stamp variant="ink" skew={false}>
                Ред. 1986
              </Stamp>
            </div>
            <hr className="rule rule-red mt-5" />
          </header>

          <section className="mt-8">
            <SectionTitle index="§">Порядок действий</SectionTitle>
            <ol className="space-y-4">
              {STEPS.map((s, i) => (
                <li
                  key={s.n}
                  className="paper flex gap-4 p-4"
                  style={{ rotate: i % 2 === 0 ? '-0.4deg' : '0.4deg' }}
                >
                  <span className="font-heading text-3xl font-700 leading-none text-primary">
                    {s.n}
                  </span>
                  <div>
                    <h3 className="font-heading text-base font-600 uppercase tracking-wide">
                      {s.t}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-foreground/90">
                      {s.d}
                    </p>
                  </div>
                </li>
              ))}
            </ol>
          </section>

          <section className="mt-10">
            <SectionTitle index="!">Памятка наблюдателю</SectionTitle>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {[
                'Соль — табельное средство демаскировки.',
                'Инвентарь держать заточенным и заземлённым.',
                'О немигающих соседях докладывать немедленно.',
              ].map((p) => (
                <p
                  key={p}
                  className="paper border-l-4 border-l-primary p-3 text-sm leading-relaxed"
                >
                  {p}
                </p>
              ))}
            </div>
          </section>
        </article>

        <div className="mt-12">
          <Perforation />
        </div>
      </main>

      <SiteFooter />
    </div>
  )
}
