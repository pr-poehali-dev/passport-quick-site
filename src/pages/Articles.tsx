import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
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

const Articles = () => {
  usePageSeo({
    title: PAGE_TITLE,
    description: PAGE_DESC,
    keywords: PAGE_KEYWORDS,
    path: '/articles',
  });

  const list = [...articles].reverse();

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
            '@type': 'ItemList',
            itemListElement: list.map((a, i) => ({
              '@type': 'ListItem',
              position: i + 1,
              url: `${SITE_URL}/articles/${a.slug}`,
              name: a.title,
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

          <div className="mt-12 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {list.map((a) => (
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
                <h2 className="mt-3 font-display text-lg font-semibold text-primary transition-colors group-hover:text-accent">
                  {a.title}
                </h2>
                <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Читать статью <Icon name="ArrowRight" size={15} />
                </span>
              </Link>
            ))}
          </div>
        </div>
      </section>

      <ContactCta />
      <SiteFooter />
    </div>
  );
};

export default Articles;