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
import PriceTable from '@/components/PriceTable';
import SiteHeader from '@/components/SiteHeader';
import ContactCta from '@/components/ContactCta';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import RelatedPromo from '@/components/RelatedPromo';
import MaxIcon from '@/components/MaxIcon';
import { WHATSAPP_URL, TELEGRAM_URL, MAX_URL } from '@/lib/contacts';

const PAGE_URL = 'https://паспортсервис.рф/zagranpasport-bez-propiski-moskva';
const PAGE_TITLE =
  'Загранпаспорт без прописки и регистрации в Москве срочно | ПаспортСервис';
const PAGE_DESC =
  'Помощь в оформлении загранпаспорта в Москве без московской прописки и регистрации. По регламенту МВД для иногородних — 3 месяца, мы помогаем сделать быстрее. Цены как для всех.';
const PAGE_KEYWORDS =
  'загранпаспорт без прописки москва, загранпаспорт без регистрации москва, загранпаспорт иногородним в москве, загранпаспорт не по месту прописки москва';

const faq = [
  {
    q: 'Можно ли оформить загранпаспорт в Москве без московской прописки?',
    a: 'Да, гражданин РФ вправе подать документы на загранпаспорт в любом регионе независимо от места постоянной регистрации. Отдельная московская прописка или регистрация для этого не требуется.',
  },
  {
    q: 'Почему иногородним в Москве оформляют дольше?',
    a: 'По регламенту МВД, если вы прописаны в другом регионе, а подаёте документы в Москве, срок оформления увеличивается до 3 месяцев из-за межведомственных проверок по месту постоянной регистрации.',
  },
  {
    q: 'Насколько быстрее вы помогаете оформить паспорт?',
    a: 'Мы помогаем взрослым получить загранпаспорт значительно быстрее регламентных 3 месяцев. Точный срок зависит от выбранного тарифа — от 4 рабочих дней. Отсчёт идёт со следующего дня после подачи документов в МФЦ.',
  },
  {
    q: 'Дороже ли стоит оформление для иногородних?',
    a: 'Нет. Стоимость для людей без московской прописки такая же, как для всех взрослых. Никаких наценок за иногороднюю регистрацию нет, а все пошлины, сборы, анкеты, копии и фото уже включены в цену.',
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

const advantages = [
  {
    icon: 'Timer',
    title: 'Быстрее регламента',
    desc: 'По регламенту МВД иногородним делают до 3 месяцев. Мы помогаем получить паспорт значительно быстрее.',
  },
  {
    icon: 'MapPinOff',
    title: 'Без московской прописки',
    desc: 'Помогаем оформить загранпаспорт в Москве, даже если вы прописаны в другом регионе.',
  },
  {
    icon: 'Wallet',
    title: 'Цена как для всех',
    desc: 'Никаких наценок за иногороднюю прописку — стоимость такая же, как для всех взрослых.',
  },
  {
    icon: 'ShieldCheck',
    title: 'Гарантия результата',
    desc: 'Готовим и проверяем документы, записываем и сопровождаем до получения паспорта.',
  },
];

const docs = [
  'Паспорт РФ',
  'Загранпаспорт (если действующий)',
  'Данные трудовой и учебной деятельности за последние 10 лет',
  'Свидетельство о регистрации ИП (если являетесь)',
  'Свидетельство о браке / перемене имени (если меняли ФИО)',
  'Военный билет (для мужчин призывного возраста 18–30 лет)',
  'Решение суда (если была судимость)',
  'Фото 4 шт. 3,5×4,5 матовые на белом фоне без овала',
];

const WithoutRegistration = () => {
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
          <span className="text-foreground">Загранпаспорт без прописки в Москве</span>
        </div>
      </nav>

      {/* Hero */}
      <section className="relative overflow-hidden bg-primary text-primary-foreground">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="container relative py-14 md:py-20">
          <span className="inline-flex items-center gap-2 rounded-full bg-accent/15 px-4 py-1.5 text-sm font-medium text-accent">
            <Icon name="MapPinOff" size={16} /> Для иногородних в Москве
          </span>
          <h1 className="mt-5 max-w-3xl font-display text-3xl font-bold leading-tight md:text-5xl">
            Загранпаспорт без прописки и регистрации в Москве
          </h1>
          <div className="mt-6 inline-flex items-center gap-3 rounded-2xl border border-accent/40 bg-accent/15 px-5 py-3">
            <span className="text-sm text-primary-foreground/70">Стоимость</span>
            <span className="font-display text-2xl font-bold text-accent md:text-3xl">
              от 26 000 ₽
            </span>
            <span className="hidden text-sm text-primary-foreground/70 sm:inline">
              · от 4 рабочих дней
            </span>
          </div>
          <p className="mt-5 max-w-2xl text-lg text-primary-foreground/75">
            Прописаны в регионе, а подаёте документы в Москве? По регламенту МВД для иногородних
            оформление занимает до 3 месяцев. Мы помогаем взрослым получить загранпаспорт
            значительно быстрее — а цены остаются такими же, как для всех.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={WHATSAPP_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-xl bg-[#25D366] px-6 py-3 font-display text-lg font-semibold text-white transition-transform hover:scale-105"
            >
              <Icon name="MessageCircle" size={22} /> WhatsApp
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

      {/* Problem / solution text */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <article className="article-content space-y-5 text-lg leading-relaxed text-foreground/85">
            <h2>Можно ли оформить загранпаспорт в Москве без прописки</h2>
            <p>
              Да, можно. По закону гражданин России вправе подать заявление на загранпаспорт в любом
              регионе страны — независимо от того, где он прописан. Отдельная московская регистрация
              или временная прописка для этого не нужны. Поэтому если вы живёте и работаете в Москве,
              но постоянная регистрация у вас в другом городе, оформить загранпаспорт в столице
              вполне реально.
            </p>
            <p>
              Проблема не в возможности подать документы, а в сроках. И здесь у иногородних есть
              важная особенность, о которой мало кто знает заранее.
            </p>

            <h2>Почему иногородним в Москве оформляют до 3 месяцев</h2>
            <p>
              Если вы прописаны в другом регионе, но подаёте документы на загранпаспорт в Москве, по
              регламенту МВД срок оформления увеличивается до 3 месяцев. Это связано с
              межведомственными проверками, которые проводятся по месту вашей постоянной регистрации:
              запросы уходят в региональные подразделения и возвращаются обратно, а всё это время
              заявитель ждёт готовности паспорта.
            </p>
            <p>
              Для тех, кто планирует поездку или командировку, три месяца ожидания — это слишком
              долго. Отпуск может сгореть, а рабочие планы — сорваться. Именно поэтому многие ищут
              способ ускорить оформление законным путём.
            </p>

            <h2>Как мы помогаем сделать быстрее</h2>
            <p>
              Мы оказываем помощь и содействие взрослым, которые оформляют загранпаспорт в Москве без
              московской прописки. Правильно готовим и проверяем весь пакет документов, записываем на
              подачу и сопровождаем вас до получения готового паспорта. Благодаря отлаженному процессу
              получить документ удаётся значительно быстрее регламентных трёх месяцев — от 4 рабочих
              дней в зависимости от выбранного тарифа.
            </p>
            <p>
              Отсчёт рабочих дней идёт со следующего дня после подачи документов в МФЦ. Мы заранее
              предупреждаем о факторах, которые могут повлиять на сроки, чтобы для вас не было
              неожиданностей.
            </p>

            <h2>Стоимость — как для всех взрослых</h2>
            <p>
              <strong>Важно:</strong> стоимость для иногородних такая же, как для всех взрослых —
              никаких доплат за отсутствие московской прописки. Все пошлины, налоги и сборы,
              заполнение анкет, необходимые ксерокопии и фотографии уже включены в окончательную
              цену. Вы платите ровно столько, сколько указано в таблице ниже, без скрытых наценок.
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

      {/* Prices */}
      <section id="prices" className="py-14 md:py-20">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Цены и сроки</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Стоимость — как для всех взрослых
            </h2>
            <p className="mt-4 text-muted-foreground">
              Цена окончательная и включает все пошлины, сборы, анкеты, копии и фото. Наценок за
              иногороднюю прописку нет.
            </p>
          </header>
          <div className="mx-auto mt-10 max-w-3xl">
            <PriceTable
              title="Загранпаспорт для взрослых без прописки в Москве"
              note="Все пошлины, сборы, заполнение анкет, ксерокопии и фото включены. Отсчёт рабочих дней — со следующего дня после подачи документов в МФЦ."
              rows={priceRows}
              highlightFirst
            />
          </div>
        </div>
      </section>

      {/* Documents */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Документы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Что нужно для оформления
            </h2>
            <p className="mt-4 text-muted-foreground">
              Список для взрослого. Отдельная московская регистрация не требуется.
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
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Вопросы и ответы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Частые вопросы об оформлении без прописки
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
                name: 'Загранпаспорт без прописки в Москве',
                item: PAGE_URL,
              },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'Service',
            serviceType: 'Помощь в оформлении загранпаспорта без прописки в Москве',
            provider: { '@type': 'Organization', name: 'ПаспортСервис' },
            areaServed: { '@type': 'City', name: 'Москва' },
            description: PAGE_DESC,
            offers: { '@type': 'Offer', priceCurrency: 'RUB', price: '26000' },
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

      <RelatedPromo current="noRegistration" />
      <ContactCta />
      <SiteFooter />
    </div>
  );
};

export default WithoutRegistration;