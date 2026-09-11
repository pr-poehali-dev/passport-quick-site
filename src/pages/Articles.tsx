import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ContactCta from '@/components/ContactCta';
import JsonLd from '@/components/JsonLd';
import usePageSeo from '@/hooks/usePageSeo';
import { SITE_URL } from '@/lib/siteLinks';
import { articles } from '@/data/articles';

const PAGE_TITLE = 'Статьи об оформлении загранпаспорта | ПаспортСервис';
const PAGE_DESC =
  'Полезные статьи об оформлении загранпаспорта: документы, сроки, стоимость, требования к фото и нюансы для взрослых и детей.';
const PAGE_KEYWORDS =
  'статьи о загранпаспорте, документы на загранпаспорт, сроки оформления загранпаспорта, требования к фото на загранпаспорт';

const faq = [
  {
    q: 'Где найти актуальную информацию об оформлении загранпаспорта в 2026 году?',
    a: 'Мы регулярно обновляем и публикуем статьи с актуальными на 2026 год правилами: документы, сроки, госпошлина, требования к фото — для взрослых и детей.',
  },
  {
    q: 'Отличаются ли правила оформления загранпаспорта для детей и взрослых?',
    a: 'Да, есть существенные отличия: разный размер госпошлины, требования к присутствию при подаче, список документов и сроки изготовления. В наших статьях эти темы разобраны отдельно.',
  },
  {
    q: 'Можно ли получить консультацию по конкретной ситуации, а не только прочитать статью?',
    a: 'Да, если в статьях не нашли ответ на свой вопрос — напишите нам в WhatsApp, Telegram или MAX. Специалист бесплатно проконсультирует по вашей ситуации и подскажет дальнейшие шаги.',
  },
  {
    q: 'Насколько актуальны статьи — учитывают ли они последние изменения в законах?',
    a: 'Мы следим за изменениями регламентов МВД и актуализируем материалы, чтобы информация о документах, сроках и госпошлине соответствовала действующим правилам.',
  },
];

const Articles = () => {
  usePageSeo({
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: PAGE_KEYWORDS,
    path: '/articles',
  });

  const list = [...articles].reverse();
  const childArticles = list.filter((a) => a.relatedPromo === 'children');
  const adultArticles = list.filter((a) => a.relatedPromo !== 'children');

  const ArticleCard = ({ a }: { a: (typeof list)[number] }) => (
    <Link
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
      <h2 className="mt-3 font-display text-lg font-semibold text-primary transition-colors group-hover:text-accent">
        {a.title}
      </h2>
      <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
      <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
        Читать статью <Icon name="ArrowRight" size={15} />
      </span>
    </Link>
  );

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Главная', item: `${SITE_URL}/` },
              { '@type': 'ListItem', position: 2, name: 'Статьи', item: `${SITE_URL}/articles` },
            ],
          },
          {
            '@context': 'https://schema.org',
            '@type': 'CollectionPage',
            name: PAGE_TITLE,
            description: PAGE_DESC,
            url: `${SITE_URL}/articles`,
            isPartOf: { '@type': 'WebSite', name: 'ПаспортСервис', url: `${SITE_URL}/` },
          },
          {
            '@context': 'https://schema.org',
            '@type': 'ItemList',
            itemListElement: list.map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE_URL}/articles/${a.slug}`,
              name: a.title,
            })),
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

      <nav aria-label="Хлебные крошки" className="border-b border-border bg-secondary/50">
        <div className="container flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Главная
          </Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Статьи</span>
        </div>
      </nav>

      <section className="py-12 md:py-16">
        <div className="container">
          <header className="mx-auto max-w-2xl text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">
              Полезная информация
            </p>
            <h1 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Статьи об оформлении загранпаспорта
            </h1>
            <p className="mt-4 text-muted-foreground">
              Документы, сроки, стоимость, требования к фото и другие нюансы оформления для взрослых
              и детей.
            </p>
          </header>

          <div className="mx-auto mt-8 max-w-3xl space-y-4 text-lg leading-relaxed text-foreground/85">
            <p>
              Здесь собраны статьи по самым частым вопросам, с которыми к нам обращаются: какие
              документы нужны, сколько стоит оформление, как быстро можно получить готовый паспорт и
              на что обратить внимание, чтобы не получить отказ. Материалы регулярно пополняются и
              обновляются с учётом действующих правил {new Date().getFullYear()} года.
            </p>
          </div>

          <div className="mt-12">
            <h2 className="font-display text-2xl font-bold text-primary">
              Загранпаспорт детям до 14 лет
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {childArticles.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </div>

          <div className="mt-14">
            <h2 className="font-display text-2xl font-bold text-primary">
              Загранпаспорт взрослым
            </h2>
            <div className="mt-6 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {adultArticles.map((a) => (
                <ArticleCard key={a.slug} a={a} />
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust / expertise */}
      <section className="bg-secondary py-14 md:py-20">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Почему нам доверяют</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Экспертиза, основанная на практике
            </h2>
          </header>
          <div className="mt-8 space-y-4 text-lg leading-relaxed text-foreground/85">
            <p>
              Все статьи написаны на основе реального опыта оформления загранпаспортов через МФЦ —
              для взрослых, детей, иногородних заявителей и людей в нестандартных ситуациях. Мы не
              пересказываем чужие тексты, а делимся тем, с чем сталкиваемся каждый день, помогая
              клиентам собрать документы и избежать отказа.
            </p>
            <p>
              Если в статьях не нашли ответ на свой вопрос — напишите нам в мессенджер. Специалист
              бесплатно проконсультирует по вашей ситуации и подскажет, какой вариант оформления
              подойдёт именно вам.
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-14 md:py-20">
        <div className="container max-w-3xl">
          <header className="text-center">
            <p className="font-semibold uppercase tracking-widest text-accent">Вопросы и ответы</p>
            <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
              Частые вопросы о наших статьях
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

export default Articles;
