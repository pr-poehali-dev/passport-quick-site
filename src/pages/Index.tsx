import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import { Link } from 'react-router-dom';
import PriceTable from '@/components/PriceTable';
import SiteHeader from '@/components/SiteHeader';
import ContactCta from '@/components/ContactCta';
import SiteFooter from '@/components/SiteFooter';
import { articles } from '@/data/articles';

const HERO_IMG =
  'https://cdn.poehali.dev/projects/712b1a0c-8e04-4992-bf7d-c6f361115898/bucket/c35cfb78-a28e-41a4-902e-ec211620b0c3.jpg';

const services = [
  {
    icon: 'Rocket',
    title: 'Срочная помощь · от 4 рабочих дней',
    desc: 'Содействие в срочном оформлении через МФЦ. Госпошлина 6000 ₽ уже включена в стоимость.',
    price: 'от 65 500 ₽',
  },
  {
    icon: 'BookUser',
    title: 'Оформление через МФЦ',
    desc: 'Оптимальный вариант по цене — от 12 до 24 рабочих дней. Госпошлина 6000 ₽ включена.',
    price: 'от 26 000 ₽',
  },
  {
    icon: 'Baby',
    title: 'Детям до 14 лет',
    desc: 'Помощь в оформлении паспорта нового и старого образца. Экспресс-сроки для детей.',
    price: 'от 20 000 ₽',
  },
  {
    icon: 'ShieldCheck',
    title: 'Полное сопровождение',
    desc: 'Проверяем документы, записываем в МФЦ, сопровождаем до получения готового паспорта.',
    price: 'под ключ',
  },
];

const priceRows = [
  { term: '4 рабочих дня', price: '100 500 ₽' },
  { term: '5 рабочих дней', price: '84 500 ₽' },
  { term: '6 рабочих дней', price: '77 500 ₽' },
  { term: '7 рабочих дней', price: '72 500 ₽' },
  { term: '8 рабочих дней', price: '65 500 ₽' },
  { term: '12 рабочих дней', price: '40 000 ₽' },
  { term: '13 рабочих дней', price: '31 000 ₽' },
  { term: '17 рабочих дней', price: '29 000 ₽' },
  { term: '24 рабочих дня', price: '26 000 ₽' },
];

const steps = [
  {
    n: '01',
    title: 'Предварительная запись',
    desc: 'Записываем вас в офис. Готовим полный пакет документов и заключаем договор.',
  },
  {
    n: '02',
    title: 'Договор и оплата',
    desc: '100% предоплата наличными. Записываем вас в МФЦ за 1 день или на удобную дату.',
  },
  {
    n: '03',
    title: 'Подача в МФЦ',
    desc: 'В назначенный день вы подаёте документы. Отсчёт рабочих дней идёт со следующего дня после подачи.',
  },
  {
    n: '04',
    title: 'Готовый паспорт',
    desc: 'По истечении срока сообщаем о готовности. Паспорт получаете там же, где подавали документы.',
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
    a: 'Отсчёт рабочих дней всегда идёт со следующего дня после подачи документов в МФЦ. Срочная помощь позволяет получить паспорт от 4 рабочих дней, стандартное оформление — от 12 дней.',
  },
  {
    q: 'Что может повлиять на сроки оформления?',
    a: 'На сроки влияют: судимость, форма допуска к секретным сведениям, неоплаченные штрафы и долги у судебных приставов, а также смена или наличие второго гражданства за последние 10 лет. Обязательно сообщите нам об этом при оформлении.',
  },
  {
    q: 'Входит ли госпошлина в стоимость?',
    a: 'Для взрослых и детей от 14 лет госпошлина 6000 ₽ включена в стоимость. Для детей до 14 лет госпошлина оплачивается отдельно — подробности на странице для детей до 14 лет.',
  },
  {
    q: 'Как проходит оплата?',
    a: 'В офисе мы готовим полный пакет документов, заключаем договор, и вы вносите 100% предоплату наличными. После этого записываем вас в МФЦ на удобную дату.',
  },
  {
    q: 'Это законно? Что именно вы делаете?',
    a: 'Мы оказываем помощь и содействие: консультируем, готовим и проверяем документы, записываем в МФЦ и сопровождаем до получения паспорта. Все документы вы подаёте лично, экономя своё время.',
  },
];

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative grid gap-10 py-16 md:py-24 lg:grid-cols-2 lg:items-center">
          <div className="animate-fade-up">
            <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent">
              <Icon name="Zap" size={16} /> Срочно — от 4 рабочих дней
            </span>
            <h1 className="mt-5 font-display text-4xl font-bold leading-tight md:text-6xl">
              Помощь в оформлении загранпаспорта
            </h1>
            <p className="mt-5 max-w-lg text-lg text-primary-foreground/75">
              Оказываем содействие в оформлении загранпаспорта через МФЦ для взрослых и детей — от 4
              рабочих дней. Цена окончательная: все пошлины, налоги и сборы, заполнение анкет,
              ксерокопии и фотографии уже включены.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <Button
                size="lg"
                className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
                asChild
              >
                <a href="#prices">Смотреть цены</a>
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
                { v: 'всё включено', l: 'пошлины и сборы' },
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
              alt="Помощь в оформлении загранпаспорта РФ через МФЦ"
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
              Помогаем с любым загранпаспортом
            </h2>
            <p className="mt-4 text-muted-foreground">
              Оказываем содействие в оформлении для взрослых и детей. Точные цены — в таблице ниже.
            </p>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
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

      {/* Prices */}
      <section id="prices" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Цены и сроки</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Прайс для взрослых и детей от 14 лет
            </h2>
            <p className="mt-4 text-muted-foreground">
              Цена окончательная и включает всё необходимое. Оформление проходит через МФЦ.
            </p>
          </header>
          <div className="mx-auto mt-12 max-w-3xl">
            <div className="mb-6 flex items-start gap-4 rounded-2xl border-2 border-accent/40 bg-accent/5 p-6">
              <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent text-accent-foreground">
                <Icon name="BadgeCheck" size={22} />
              </div>
              <div>
                <p className="font-display text-lg font-semibold text-primary">
                  В цену уже входит всё необходимое
                </p>
                <p className="mt-1 text-sm text-foreground/80">
                  Все пошлины, налоги и сборы, заполнение анкет, необходимые ксерокопии и
                  фотографии — никаких доплат сверху.
                </p>
              </div>
            </div>
            <PriceTable
              title="Загранпаспорт для взрослых и детей от 14 лет"
              note="Все пошлины, сборы, заполнение анкет, ксерокопии и фото включены. Отсчёт рабочих дней — со следующего дня после подачи документов в МФЦ."
              rows={priceRows}
              highlightFirst
            />
            <div className="mt-6 flex flex-col items-center gap-4 rounded-2xl border border-border bg-card p-6 text-center sm:flex-row sm:justify-between sm:text-left">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name="Baby" size={22} />
                </div>
                <p className="text-sm text-foreground/80">
                  Оформляете паспорт ребёнку до 14 лет? Для него отдельные цены и сроки.
                </p>
              </div>
              <Button asChild className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link to="/deti-do-14-let">Цены для детей до 14 лет</Link>
              </Button>
            </div>
          </div>
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
                <h3 className="font-display text-xl font-semibold text-primary">Детям до 18 лет</h3>
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

      {/* Process */}
      <section id="process" className="bg-secondary py-16 md:py-24">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Как мы работаем</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Всего 4 простых шага
            </h2>
            <p className="mt-4 text-muted-foreground">
              От предварительной записи до готового паспорта в ваших руках.
            </p>
          </header>
          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {steps.map((s) => (
              <div key={s.n} className="relative rounded-2xl bg-card p-7">
                <span className="font-display text-5xl font-bold text-accent/25">{s.n}</span>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary">{s.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{s.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Articles */}
      <section id="articles" className="py-16 md:py-24">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Полезная информация</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Полезная информация о загранпаспортах
            </h2>
            <p className="mt-4 text-muted-foreground">
              Разбираем документы, сроки, стоимость и нюансы оформления для взрослых и детей.
            </p>
          </header>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 md:grid-cols-2">
            {articles.slice(-2).reverse().map((a) => (
              <Link
                key={a.slug}
                to={`/articles/${a.slug}`}
                className="group flex flex-col rounded-2xl border border-border bg-card p-7 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                  <Icon name={a.icon} size={28} />
                </div>
                <div className="mt-5 flex items-center gap-3 text-xs text-muted-foreground">
                  <span className="inline-flex items-center gap-1">
                    <Icon name="Calendar" size={13} /> {a.date}
                  </span>
                  <span className="inline-flex items-center gap-1">
                    <Icon name="Clock" size={13} /> {a.readTime}
                  </span>
                </div>
                <h3 className="mt-3 font-display text-lg font-semibold text-primary transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Читать статью <Icon name="ArrowRight" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-24 bg-secondary">
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

      <ContactCta />
      <SiteFooter />
    </div>
  );
};

export default Index;