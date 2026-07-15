import { useEffect } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { Link } from 'react-router-dom';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SiteHeader from '@/components/SiteHeader';
import ContactCta from '@/components/ContactCta';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import RelatedPromo from '@/components/RelatedPromo';
import MaxIcon from '@/components/MaxIcon';
import { WHATSAPP_URL, TELEGRAM_URL, MAX_URL } from '@/lib/contacts';

const PAGE_URL = 'https://паспортсервис.рф/zagranpasport-bez-voennogo-bileta';
const PAGE_TITLE =
  'Загранпаспорт без военного билета срочно | Помощь в оформлении — ПаспортСервис';
const PAGE_DESC =
  'Помощь в оформлении загранпаспорта без военного билета и справок из военкомата. Только официально, в рамках закона, без рисков для заявителя. Срок 20 рабочих дней, стоимость от 65 000 ₽.';
const PAGE_KEYWORDS =
  'загранпаспорт без военного билета, загранпаспорт без военкомата, загранпаспорт без справки из военкомата, оформить загранпаспорт мужчине без военного билета';

const advantages = [
  {
    icon: 'Scale',
    title: 'Только официально',
    desc: 'Действуем строго в рамках закона — без серых схем и рисков для заявителя.',
  },
  {
    icon: 'FileX',
    title: 'Без документов из военкомата',
    desc: 'Помогаем оформить загранпаспорт без обязательного требования военного билета.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Без рисков',
    desc: 'Готовим и проверяем документы так, чтобы у заявителя не возникло проблем.',
  },
  {
    icon: 'Clock',
    title: 'Срок 20 рабочих дней',
    desc: 'Оформление в стандартный срок. Стоимость — от 65 000 ₽.',
  },
];

const faq = [
  {
    q: 'Можно ли получить загранпаспорт без военного билета?',
    a: 'Да. Военный билет не входит в перечень обязательных документов для загранпаспорта. Мы помогаем оформить его без требования справок из военкомата, действуя строго в рамках закона.',
  },
  {
    q: 'Это законно и безопасно для заявителя?',
    a: 'Да. Мы работаем только официально, без серых схем. Все действия совершаются в правовом поле, поэтому для заявителя нет никаких рисков.',
  },
  {
    q: 'Какой срок оформления?',
    a: 'Стандартный срок оформления — 20 рабочих дней. Отсчёт идёт со следующего дня после подачи документов.',
  },
  {
    q: 'Сколько это стоит?',
    a: 'Стоимость оформления — от 65 000 ₽, точная сумма зависит от ситуации. Напишите нам в WhatsApp, Telegram или MAX — уточним детали и назовём итоговую цену.',
  },
];

const docs = [
  'Паспорт РФ',
  'Загранпаспорт (если действующий)',
  'Данные трудовой и учебной деятельности за последние 10 лет',
  'Свидетельство о браке / перемене имени (если меняли ФИО)',
  'Фото 4 шт. 3,5×4,5 матовые на белом фоне без овала',
];

const WithoutMilitaryId = () => {
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
    setMeta('keywords', PAGE_KEYWORDS);
    window.scrollTo(0, 0);
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <nav aria-label="Хлебные крошки" className="border-b border-border bg-secondary/50">
        <div className="container flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Главная
          </Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Загранпаспорт без военного билета</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative py-14 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent">
            <Icon name="FileX" size={16} /> Для мужчин призывного возраста
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Загранпаспорт без военного билета
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">
            Поможем оформить загранпаспорт без обязательного требования документов из военкомата.
            Действуем строго в рамках закона, только официально и без рисков для заявителя. Срок
            оформления — 20 рабочих дней, стоимость — от 65 000 ₽.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-display text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              <Icon name="MessageCircle" size={22} /> Узнать стоимость
            </a>
            <a
              href={TELEGRAM_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#229ED9] px-6 py-3 font-display text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              <Icon name="Send" size={22} /> Telegram
            </a>
            <a
              href={MAX_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#6B5CFF] px-6 py-3 font-display text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              <MaxIcon size={22} mono /> MAX
            </a>
          </div>
        </div>
      </section>

      {/* SEO text */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <article className="article-content space-y-5 text-lg leading-relaxed text-foreground/85">
            <h2>Можно ли оформить загранпаспорт без военного билета</h2>
            <p>
              Многие мужчины призывного возраста сталкиваются с ситуацией, когда военный билет
              отсутствует или его получение затягивается, а загранпаспорт нужен уже сейчас — для
              работы, учёбы или поездки. Хорошая новость в том, что военный билет не входит в
              обязательный перечень документов для оформления загранпаспорта. Мы помогаем получить
              документ без требования справок из военкомата.
            </p>
            <p>
              При этом важно понимать: мы не предлагаем обходных или незаконных путей. Всё
              оформление проходит строго в правовом поле, только официально. Для заявителя это
              означает полное отсутствие рисков — паспорт выдаётся законно и не может быть оспорен
              впоследствии.
            </p>

            <h2>Как мы действуем в рамках закона</h2>
            <p>
              Наша задача — снять с заявителя бюрократическую нагрузку и помочь пройти процедуру
              корректно. Мы консультируем по вашей ситуации, правильно готовим и проверяем пакет
              документов, сопровождаем на всех этапах подачи. Благодаря опыту мы знаем, как оформить
              загранпаспорт без лишних требований со стороны военкомата, не нарушая закон.
            </p>
            <p>
              Мы честно предупреждаем о том, что реально возможно в вашем случае, а что — нет. Никаких
              обещаний «в обход системы»: только легальный путь, который защищает ваши интересы и
              репутацию.
            </p>

            <h2>Сроки и стоимость</h2>
            <p>
              Стандартный срок оформления составляет <strong>20 рабочих дней</strong>. Отсчёт идёт со
              следующего дня после подачи документов. Стоимость услуги — <strong>от 65 000 ₽</strong>,
              точная сумма зависит от конкретной ситуации заявителя. Чтобы узнать итоговую цену,
              напишите нам в WhatsApp, Telegram или MAX: специалист изучит ваш случай и назовёт
              стоимость.
            </p>
          </article>
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

      {/* Documents */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Документы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Что понадобится для оформления
            </h2>
            <p className="mt-4 text-muted-foreground">
              Военный билет и справки из военкомата в этот список не входят.
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
          <div className="mt-6 text-center">
            <Button asChild variant="outline" className="border-primary/20 text-primary">
              <Link to="/#prices">Все услуги и цены</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Вопросы и ответы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Частые вопросы
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

      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              {
                '@type': 'ListItem',
                position: 1,
                name: 'Главная',
                item: 'https://паспортсервис.рф/',
              },
              {
                '@type': 'ListItem',
                position: 2,
                name: 'Загранпаспорт без военного билета',
                item: PAGE_URL,
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Помощь в оформлении загранпаспорта без военного билета',
            provider: { '@type': 'Organization', name: 'ПаспортСервис' },
            areaServed: 'RU',
            description: PAGE_DESC,
            offers: {
              '@type': 'Offer',
              price: '65000',
              priceCurrency: 'RUB',
              availability: 'https://schema.org/InStock',
            },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'FAQPage',
            mainEntity: faq.map((f) => ({
              '@type': 'Question',
              name: f.q,
              acceptedAnswer: { '@type': 'Answer', text: f.a },
            })),
          },
        ]}
      />

      <RelatedPromo current="noMilitaryId" />
      <ContactCta />
      <SiteFooter />
    </div>
  );
};

export default WithoutMilitaryId;