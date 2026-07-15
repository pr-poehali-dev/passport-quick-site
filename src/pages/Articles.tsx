import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import ContactCta from '@/components/ContactCta';
import { articles } from '@/data/articles';

const PAGE_TITLE = 'Статьи об оформлении загранпаспорта | ПаспортСервис';
const PAGE_DESC =
  'Полезные статьи об оформлении загранпаспорта: документы, сроки, стоимость, требования к фото и нюансы для взрослых и детей.';

const Articles = () => {
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
    return () => {
      document.title = prevTitle;
    };
  }, []);

  const list = [...articles].reverse();

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

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
