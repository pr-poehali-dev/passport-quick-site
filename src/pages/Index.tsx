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
  { label: 'Процесс', href: '#process' },
  { label: 'Вопросы', href: '#faq' },
  { label: 'Блог', href: '#blog' },
  { label: 'Контакты', href: '#contacts' },
];

const services = [
  {
    icon: 'BookUser',
    title: 'Загранпаспорт нового образца',
    desc: 'Биометрический паспорт на 10 лет. Оформление за 1–7 дней без личного посещения ведомств.',
    price: 'от 5 000 ₽',
  },
  {
    icon: 'FileText',
    title: 'Паспорт старого образца',
    desc: 'Паспорт на 5 лет. Самый быстрый вариант — готовность за 1 день в срочном режиме.',
    price: 'от 4 500 ₽',
  },
  {
    icon: 'Baby',
    title: 'Детский загранпаспорт',
    desc: 'Оформление документов для детей до 14 и от 14 до 18 лет. Полное сопровождение.',
    price: 'от 4 000 ₽',
  },
  {
    icon: 'RefreshCw',
    title: 'Замена и продление',
    desc: 'Замена по истечении срока, смене фамилии или окончании страниц. Быстро и без ошибок.',
    price: 'от 4 500 ₽',
  },
  {
    icon: 'AlertCircle',
    title: 'Восстановление',
    desc: 'Восстановление при утере или порче паспорта. Поможем собрать пакет документов.',
    price: 'от 5 500 ₽',
  },
  {
    icon: 'Users',
    title: 'Оформление для группы',
    desc: 'Специальные условия для семей и корпоративных клиентов. Индивидуальный расчёт.',
    price: 'по запросу',
  },
];

const steps = [
  {
    n: '01',
    title: 'Заявка и расчёт',
    desc: 'Вы оставляете заявку или считаете стоимость в калькуляторе. Специалист связывается за 15 минут.',
  },
  {
    n: '02',
    title: 'Сбор документов',
    desc: 'Подсказываем полный список и проверяем каждый документ, чтобы избежать отказа.',
  },
  {
    n: '03',
    title: 'Подача без очередей',
    desc: 'Записываем на удобное время и сопровождаем при подаче. Никаких стояний в очередях.',
  },
  {
    n: '04',
    title: 'Готовый паспорт',
    desc: 'Уведомляем о готовности. Забираете паспорт в согласованный срок — от 1 дня.',
  },
];

const faq = [
  {
    q: 'За сколько дней реально сделать загранпаспорт срочно?',
    a: 'В экспресс-режиме паспорт старого образца можно оформить за 1 день, нового образца — за 3–7 дней. Точный срок зависит от типа паспорта и загруженности ведомств, мы называем его сразу при расчёте.',
  },
  {
    q: 'Какие документы нужны для срочного оформления?',
    a: 'Базовый пакет: паспорт РФ, старый загранпаспорт (при наличии), фотографии и заявление. Полный список зависит от вашей ситуации — специалист подготовит его индивидуально после заявки.',
  },
  {
    q: 'Это законно? Вы не подделываете документы?',
    a: 'Абсолютно законно. Мы не изготавливаем документы и не влияем на решения госорганов. Наша работа — правильно подготовить пакет документов, ускорить запись и сопроводить процесс, экономя ваше время.',
  },
  {
    q: 'Что если в оформлении откажут?',
    a: 'Мы даём гарантию результата. Если по нашей вине оформление не состоится, возвращаем стоимость услуги. Именно поэтому мы тщательно проверяем документы на старте.',
  },
  {
    q: 'Можно ли оформить паспорт ребёнку?',
    a: 'Да, мы оформляем загранпаспорта детям любого возраста — до 14 лет и от 14 до 18 лет. Для этого потребуется присутствие законного представителя.',
  },
];

const blog = [
  {
    tag: 'Инструкция',
    title: 'Новый или старый образец загранпаспорта: что выбрать в 2026 году',
    desc: 'Сравниваем срок действия, стоимость и скорость оформления двух типов паспортов.',
    date: '28 июня 2026',
  },
  {
    tag: 'Документы',
    title: 'Полный список документов для загранпаспорта',
    desc: 'Разбираем, что нужно взрослому, ребёнку и при замене по разным причинам.',
    date: '15 июня 2026',
  },
  {
    tag: 'Лайфхак',
    title: 'Как оформить загранпаспорт без очередей и нервов',
    desc: 'Рабочие способы сэкономить время при подаче документов в 2026 году.',
    date: '2 июня 2026',
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
              <Icon name="Zap" size={16} /> Срочно — от 1 дня
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Срочное оформление загранпаспорта
            </h1>
            <p className="mt-5 max-w-lg text-lg text-primary-foreground/75">
              Оформим загранпаспорт нового и старого образца за 1–3 дня. Без очередей, с гарантией
              результата и полным сопровождением специалиста.
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
                { v: '1 день', l: 'минимальный срок' },
                { v: '9 000+', l: 'оформлено паспортов' },
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
              Полный спектр услуг по оформлению документов для выезда за границу — быстро, законно и с
              гарантией.
            </p>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
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

      {/* Blog */}
      <section id="blog" className="py-16 md:py-24">
        <div className="container">
          <header className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="font-semibold uppercase tracking-widest text-accent">Блог и статьи</p>
              <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
                Полезное о загранпаспортах
              </h2>
            </div>
            <Button variant="outline" className="border-primary/20 text-primary">
              Все статьи
            </Button>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-3">
            {blog.map((b) => (
              <article
                key={b.title}
                className="group flex cursor-pointer flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <span className="w-fit rounded-full bg-accent/15 px-3 py-1 text-xs font-semibold text-accent">
                  {b.tag}
                </span>
                <h3 className="mt-4 font-display text-xl font-semibold text-primary transition-colors group-hover:text-accent">
                  {b.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{b.desc}</p>
                <p className="mt-4 text-xs text-muted-foreground">{b.date}</p>
              </article>
            ))}
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
              Оставьте заявку — специалист свяжется в течение 15 минут, назовёт точный срок и
              стоимость.
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
