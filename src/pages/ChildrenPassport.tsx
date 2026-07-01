import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import PriceTable from '@/components/PriceTable';
import SiteHeader from '@/components/SiteHeader';
import ContactCta from '@/components/ContactCta';
import SiteFooter from '@/components/SiteFooter';

const PAGE_TITLE =
  'Загранпаспорт ребёнку до 14 лет срочно | Помощь в оформлении через МФЦ';
const PAGE_DESC =
  'Помощь в срочном оформлении загранпаспорта ребёнку до 14 лет: биометрия на 10 лет и старый образец на 5 лет. Цены, сроки от 2 часов, список документов. Содействие через МФЦ.';

const bioRows = [
  { term: '2 рабочих дня', price: '53 500 ₽' },
  { term: '5 рабочих дней', price: '29 000 ₽' },
  { term: '7 рабочих дней', price: '25 000 ₽' },
  { term: '11 рабочих дней', price: '23 000 ₽' },
];

const oldRows = [
  { term: '2–3 часа', price: '41 000 ₽' },
  { term: '4 рабочих дня', price: '26 000 ₽' },
  { term: '7 рабочих дней', price: '22 000 ₽' },
  { term: '10–11 рабочих дней', price: '20 000 ₽' },
];

const docs = [
  'Паспорт РФ одного из родителей',
  'Свидетельство о рождении ребёнка (нотариально заверенный перевод, если выдано другой страной)',
  'Штамп о гражданстве (даже если ребёнок родился в РФ и родители — граждане РФ)',
  'Паспорт РФ ребёнка (детям от 14 до 18 лет)',
  'Загранпаспорт ребёнка (если действующий)',
  'Свидетельство о перемене имени (если меняли ФИО ребёнку)',
  'Свидетельство о регистрации ребёнка (прописка)',
  'Фото 4 шт. 3,5×4,5 матовые на белом фоне без овала (чёрно-белые или цветные)',
];

const advantages = [
  { icon: 'Clock', title: 'Экспресс-сроки', desc: 'Старый образец — от 2–3 часов, биометрия — от 2 рабочих дней.' },
  { icon: 'ShieldCheck', title: 'Гарантия результата', desc: 'Проверяем каждый документ, чтобы избежать отказа и задержек.' },
  { icon: 'Users', title: 'Без очередей', desc: 'Записываем в МФЦ на удобное время и сопровождаем до получения.' },
  { icon: 'FileCheck', title: 'Помощь с документами', desc: 'Подскажем полный список и поможем собрать пакет для ребёнка.' },
];

const ChildrenPassport = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    setMeta(
      'keywords',
      'загранпаспорт ребёнку до 14 лет, детский загранпаспорт срочно, загранпаспорт ребёнку через МФЦ, оформить загранпаспорт ребёнку, биометрический паспорт ребёнку',
    );

    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      {/* Breadcrumbs */}
      <nav aria-label="Хлебные крошки" className="border-b border-border bg-secondary/50">
        <div className="container flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Главная
          </Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Загранпаспорт детям до 14 лет</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative py-14 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent">
            <Icon name="Baby" size={16} /> Дети до 14 лет
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Загранпаспорт ребёнку до 14 лет срочно
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">
            Оказываем помощь и содействие в срочном оформлении загранпаспорта для детей до 14 лет
            через МФЦ. Два варианта на выбор: биометрический паспорт на 10 лет и паспорт старого
            образца на 5 лет с оформлением от 2–3 часов.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <Button
              size="lg"
              className="bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
              asChild
            >
              <a href="#child-prices">Цены и сроки</a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              className="border-white/30 bg-transparent text-primary-foreground hover:bg-white/10 hover:text-primary-foreground"
              asChild
            >
              <a href="#child-docs">Документы</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Intro text — SEO */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <h2 className="font-display text-2xl font-bold text-primary md:text-3xl">
            Помощь в оформлении загранпаспорта ребёнку
          </h2>
          <div className="mt-5 space-y-4 text-foreground/80">
            <p>
              Загранпаспорт нужен ребёнку любого возраста для выезда за границу — вписать детей в
              паспорт родителя больше нельзя. Мы помогаем родителям оформить детский загранпаспорт
              быстро и без ошибок в документах.
            </p>
            <p>
              Для детей до 14 лет доступны два типа паспорта. <strong>Биометрический паспорт
              нового образца</strong> действует 10 лет и содержит электронный чип. <strong>Паспорт
              старого образца</strong> действует 5 лет и оформляется максимально быстро — от 2–3
              часов. Какой выбрать — зависит от возраста ребёнка и того, как скоро паспорт нужен.
            </p>
            <p>
              Отсчёт рабочих дней идёт со следующего дня после подачи документов в МФЦ. Мы
              консультируем, готовим и проверяем пакет документов, записываем на подачу и
              сопровождаем вас до получения готового паспорта.
            </p>
          </div>
        </div>
      </section>

      {/* Advantages */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container">
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {advantages.map((a) => (
              <div key={a.title} className="rounded-2xl border border-border bg-card p-6">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={a.icon} size={22} />
                </div>
                <h3 className="mt-4 font-display text-lg font-semibold text-primary">{a.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Prices */}
      <section id="child-prices" className="py-14 md:py-20">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Цены и сроки</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Стоимость для детей до 14 лет
            </h2>
            <p className="mt-4 text-muted-foreground">
              Отсчёт рабочих дней идёт со следующего дня после подачи документов в МФЦ.
            </p>
          </header>
          <div className="mx-auto mt-12 grid max-w-4xl gap-6 lg:grid-cols-2">
            <PriceTable
              title="Биометрический паспорт (10 лет)"
              note="Госпошлина 3000 ₽ оплачивается отдельно в МФЦ."
              rows={bioRows}
              highlightFirst
            />
            <PriceTable
              title="Старый образец (5 лет)"
              note="Госпошлина 1000 ₽ оплачивается отдельно в МФЦ."
              rows={oldRows}
              highlightFirst
            />
          </div>
        </div>
      </section>

      {/* Documents */}
      <section id="child-docs" className="bg-secondary py-14 md:py-20">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Документы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Документы для ребёнка до 14 лет
            </h2>
            <p className="mt-4 text-muted-foreground">
              Полный список для оформления загранпаспорта ребёнку. Мы проверим каждый документ.
            </p>
          </header>
          <div className="mt-10 rounded-2xl border border-border bg-card p-7">
            <ul className="space-y-3">
              {docs.map((d, i) => (
                <li key={d} className="flex items-start gap-3 text-sm text-foreground/80">
                  <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent">
                    {i + 1}
                  </span>
                  {d}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </div>
  );
};

export default ChildrenPassport;
