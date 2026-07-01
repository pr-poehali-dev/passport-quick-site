import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import Calculator from '@/components/Calculator';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/712b1a0c-8e04-4992-bf7d-c6f361115898/files/ddfcaf81-2b8a-4d1d-84df-94c05d1cb1c4.jpg';

const nav = [
  { label: 'Услуги', href: '#services' },
  { label: 'Калькулятор', href: '#calc' },
  { label: 'Документы', href: '#docs' },
  { label: 'Процесс', href: '#process' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Контакты', href: '#contacts' },
];

const services = [
  {
    icon: 'Rocket',
    title: 'Взрослые и дети 14+ · ФГУП ПВС + МВД',
    desc: 'Самое быстрое оформление — от 4 рабочих дней. Госпошлина 6000 ₽ уже включена в стоимость.',
    price: 'от 65 500 ₽',
  },
  {
    icon: 'BookUser',
    title: 'Взрослые и дети 14+ · через МВД',
    desc: 'Оптимальный вариант по цене — от 12 до 24 рабочих дней. Госпошлина 6000 ₽ включена.',
    price: 'от 26 000 ₽',
  },
  {
    icon: 'Baby',
    title: 'Дети до 14 лет · биометрия (10 лет)',
    desc: 'Биометрический паспорт на 10 лет — от 2 рабочих дней. Госпошлина 3000 ₽ оплачивается в МВД.',
    price: 'от 23 000 ₽',
  },
  {
    icon: 'FileText',
    title: 'Дети до 14 лет · старый образец (5 лет)',
    desc: 'Паспорт на 5 лет — экспресс-оформление от 2–3 часов. Госпошлина 1000 ₽ оплачивается в МВД.',
    price: 'от 20 000 ₽',
  },
];

const steps = [
  {
    n: '01',
    title: 'Предварительная запись',
    desc: 'Записываем вас в офис. Оформляем полный пакет документов и заключаем договор.',
  },
  {
    n: '02',
    title: 'Договор и оплата',
    desc: '100% предоплата наличными. Записываем вас в МВД за 1 день или на удобную дату.',
  },
  {
    n: '03',
    title: 'Подача в МВД',
    desc: 'В назначенный день вы подаёте документы. Отсчёт рабочих дней идёт со следующего дня после подачи.',
  },
  {
    n: '04',
    title: 'Готовый паспорт',
    desc: 'По истечении срока сообщаем о готовности. Паспорт получаете в том же МВД, где была подача.',
  },
];

const docsChild = [
  'Паспорт РФ одного из родителей',
  'Свидетельство о рождении ребёнка (перевод с нотариальным заверением, если выдано другой страной)',
  'Штамп о гражданстве (даже если ребёнок родился в РФ и родители — граждане РФ)',
  'Паспорт РФ ребёнка (детям от 14 до 18 лет)',
  'Загранпаспорт ребёнка (если действующий)',
  'Свидетельство о перемене имени (если меняли ФИО)',
  'Свидетельство о регистрации ребёнка (прописка)',
  'Фото 4 шт. 3,5×4,5 матовые на белом фоне без овала',
];

const docsAdult = [
  'Паспорт РФ',
  'Загранпаспорт (если действующий)',
  'Данные трудовой и учебной деятельности за последние 10 лет',
  'Свидетельство о регистрации ИП (если являетесь)',
  'Свидетельство о браке / перемене имени (если меняли ФИО)',
  'Военный билет (для мужчин призывного возраста 18–30 лет)',
  'Решение суда (если была судимость)',
  'Фото 4 шт. 3,5×4,5 матовые на белом фоне без овала',
];

const timeFactors = [
  'Смена или наличие второго гражданства (сообщите при оформлении)',
  'Форма допуска к секретным сведениям (укажите форму, год, организацию)',
  'Неоплаченные штрафы и долги у судебных приставов',
  'Судимость',
];

const faq = [
  {
    q: 'От чего зависит срок оформления загранпаспорта?',
    a: 'Отсчёт рабочих дней всегда идёт со следующего дня после подачи документов в МВД. Быстрее всего — через ФГУП ПВС + МВД (от 4 рабочих дней). Дольше, но дешевле — напрямую через МВД (от 12 дней).',
  },
  {
    q: 'Что может повлиять на сроки оформления?',
    a: 'На сроки влияют: судимость, форма допуска к секретным сведениям, неоплаченные штрафы и долги у судебных приставов, а также смена или наличие второго гражданства за последние 10 лет. Обязательно сообщите нам об этом при оформлении.',
  },
  {
    q: 'Входит ли госпошлина в стоимость?',
    a: 'Для взрослых и детей 14+ госпошлина 6000 ₽ включена в стоимость. Для детей до 14 лет госпошлина (3000 ₽ за биометрию или 1000 ₽ за старый образец) оплачивается отдельно в МВД.',
  },
  {
    q: 'Как проходит оплата?',
    a: 'В офисе мы оформляем полный пакет документов, заключаем договор, и вы вносите 100% предоплату наличными. После этого записываем вас в МВД на удобную дату.',
  },
  {
    q: 'Где я получу готовый паспорт?',
    a: 'Паспорт вы получаете в том же отделении МВД, где подавали документы. По истечении срока мы заранее сообщаем о готовности.',
  },
];

const Index = () => {
  const [menu, setMenu] = useState(false);

  return (
    <div className="min-h-screen bg-background">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
        <div className="container flex h-16 items-center justify-between">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
              <Icon name="Plane" size={20} className="text-accent" />
            </div>
            <span className="font-display text-xl font-bold text-primary">ПаспортСервис</span>
          </a>
          <nav className="hidden items-center gap-7 lg:flex">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ))}
          </nav>
          <div className="hidden items-center gap-4 lg:flex">
            <a href="tel:+74950000000" className="font-display text-lg font-semibold text-primary">
              +7 (495) 000-00-00
            </a>
          </div>
          <button className="lg:hidden" onClick={() => setMenu(!menu)} aria-label="Меню">
            <Icon name={menu ? 'X' : 'Menu'} size={26} className="text-primary" />
          </button>
        </div>
        {menu && (
          <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                onClick={() => setMenu(false)}
                className="block py-2.5 font-medium text-foreground/80"
              >
                {n.label}
              </a>
            ))}
            <a href="tel:+74950000000" className="mt-2 block font-semibold text-primary">
              +7 (495) 000-00-00
            </a>
          </nav>
        )}
      </header>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent">
              <Icon name="Zap" size={16} /> Срочно — от 2 часов
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Срочное оформление загранпаспорта
            </h1>
            <p className="mt-5 max-w-lg text-lg text-primary-foreground/75">
              Оформим загранпаспорт для взрослых и детей — от 4 рабочих дней через ФГУП ПВС.
              Госпошлина включена, без очередей, с гарантией результата и полным сопровождением.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="#calc">Рассчитать стоимость</a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
                asChild
              >
                <a href="#services">Наши услуги</a>
              </Button>
            </div>
            <dl className="mt-10 grid max-w-md grid-cols-3 gap-4">
              {[
                { v: 'от 4 дней', l: 'минимальный срок' },
                { v: 'госпошлина', l: 'включена в цену' },
                { v: '100%', l: 'гарантия результата' },
              ].map((s) => (
                <div key={s.l}>
                  <dt className="font-display text-2xl font-bold text-accent">{s.v}</dt>
                  <dd className="text-xs text-primary-foreground/60">{s.l}</dd>
                </div>
              ))}
            </dl>
          </div>
          <div className="animate-fade-up [animation-delay:150ms]">
            <img
              src={HERO_IMG}
              alt="Загранпаспорт РФ — срочное оформление"
              className="mx-auto w-full max-w-md rounded-2xl shadow-2xl"
              loading="eager"
            />
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="py-16 md:py-24">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Услуги</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Оформляем любые загранпаспорта
            </h2>
            <p className="mt-4 text-muted-foreground">
              Выберите категорию и способ оформления. Точную стоимость и срок рассчитайте в
              калькуляторе ниже.
            </p>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-2">
            {services.map((s) => (
              <article
                key={s.title}
                className="group rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-primary/5 text-primary transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon name={s.icon} size={24} />
                </div>
                <h3 className="mt-5 font-display text-xl font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
                <p className="mt-4 font-display text-lg font-semibold text-accent">{s.price}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Calculator */}
      <section id="calc" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Калькулятор</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Рассчитайте стоимость и срок онлайн
            </h2>
            <p className="mt-4 text-muted-foreground">
              Выберите параметры — и мгновенно узнайте цену и срок оформления загранпаспорта.
            </p>
          </header>
          <div className="mt-12 rounded-3xl border border-border bg-card p-6 md:p-10">
            <Calculator />
          </div>
        </div>
      </section>

      {/* Process */}
      <section id="process" className="py-16 md:py-24">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Процесс</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Как проходит оформление
            </h2>
            <p className="mt-4 text-muted-foreground">
              Всего 4 простых шага от заявки до готового паспорта в ваших руках.
            </p>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-2xl bg-secondary p-7">
                <span className="font-display text-5xl font-bold text-accent/25">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="bg-secondary py-16 md:py-24">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Вопросы и ответы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Часто спрашивают
            </h2>
          </header>
          <Accordion type="single" collapsible className="mt-10">
            {faq.map((f, i) => (
              <AccordionItem
                key={i}
                value={`item-${i}`}
                className="mb-3 rounded-xl border border-border bg-card px-5"
              >
                <AccordionTrigger className="text-left font-display text-lg font-semibold text-primary hover:no-underline">
                  {f.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </section>

      {/* Documents */}
      <section id="docs" className="py-16 md:py-24">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Документы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Что нужно для оформления
            </h2>
            <p className="mt-4 text-muted-foreground">
              Полный список документов. Специалист проверит каждый и подскажет, если чего-то не
              хватает.
            </p>
          </header>
          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <article className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Icon name="Baby" size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">
                  Детям до 18 лет
                </h3>
              </div>
              <ul className="mt-5 space-y-3">
                {docsChild.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Icon name="Check" size={18} className="mt-0.5 shrink-0 text-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
            <article className="rounded-2xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/5 text-primary">
                  <Icon name="User" size={22} />
                </div>
                <h3 className="font-display text-xl font-semibold text-primary">Взрослым</h3>
              </div>
              <ul className="mt-5 space-y-3">
                {docsAdult.map((d) => (
                  <li key={d} className="flex items-start gap-3 text-sm text-foreground/80">
                    <Icon name="Check" size={18} className="mt-0.5 shrink-0 text-accent" />
                    {d}
                  </li>
                ))}
              </ul>
            </article>
          </div>

          {/* Time factors */}
          <div className="mt-8 rounded-2xl border-2 border-accent/40 bg-accent/5 p-7 md:p-9">
            <div className="flex items-center gap-3">
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon name="TriangleAlert" size={22} />
              </div>
              <h3 className="font-display text-xl font-semibold text-primary">
                Что влияет на сроки оформления
              </h3>
            </div>
            <p className="mt-3 text-sm text-muted-foreground">
              Обязательно сообщите нам об этих обстоятельствах при оформлении — они могут увеличить
              срок изготовления паспорта:
            </p>
            <div className="mt-5 grid gap-3 sm:grid-cols-2">
              {timeFactors.map((f) => (
                <div
                  key={f}
                  className="flex items-start gap-3 rounded-xl bg-card p-4 text-sm text-foreground/80"
                >
                  <Icon name="AlertCircle" size={18} className="mt-0.5 shrink-0 text-accent" />
                  {f}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Contacts / CTA */}
      <section id="contacts" className="bg-primary py-16 text-primary-foreground md:py-24">
        <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
          <div>
            <h2 className="font-display text-3xl font-bold md:text-4xl">
              Готовы оформить загранпаспорт срочно?
            </h2>
            <p className="mt-4 max-w-md text-primary-foreground/75">
              Оставьте заявку на предварительную запись — специалист свяжется, назовёт точный срок и
              стоимость. Оплата в офисе наличными.
            </p>
            <div className="mt-8 space-y-4">
              {[
                { icon: 'Phone', label: '+7 (495) 000-00-00', sub: 'Ежедневно 9:00–21:00' },
                { icon: 'Mail', label: 'info@passportservice.ru', sub: 'Ответим в течение часа' },
                { icon: 'MapPin', label: 'Москва, ул. Тверская, 1', sub: 'Офис в центре города' },
              ].map((c) => (
                <div key={c.label} className="flex items-center gap-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                    <Icon name={c.icon} size={20} className="text-accent" />
                  </div>
                  <div>
                    <p className="font-semibold">{c.label}</p>
                    <p className="text-sm text-primary-foreground/60">{c.sub}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <form className="rounded-2xl bg-white p-7 text-foreground">
            <h3 className="font-display text-xl font-semibold text-primary">Оставить заявку</h3>
            <div className="mt-5 space-y-4">
              <input
                type="text"
                placeholder="Ваше имя"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent"
              />
              <input
                type="tel"
                placeholder="Телефон"
                className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent"
              />
              <textarea
                placeholder="Комментарий (необязательно)"
                rows={3}
                className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent"
              />
              <Button
                type="button"
                size="lg"
                className="w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
              >
                Отправить заявку
              </Button>
              <p className="text-center text-xs text-muted-foreground">
                Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
              </p>
            </div>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-border bg-background py-10">
        <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
          <div className="flex items-center gap-2">
            <Icon name="Plane" size={18} className="text-primary" />
            <span className="font-display font-bold text-primary">ПаспортСервис</span>
          </div>
          <p>© 2026 ПаспортСервис. Срочное оформление загранпаспортов.</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;