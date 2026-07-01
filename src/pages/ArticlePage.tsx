import { useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import ContactCta from '@/components/ContactCta';
import SiteFooter from '@/components/SiteFooter';
import JsonLd from '@/components/JsonLd';
import { getArticle, articles } from '@/data/articles';
import { PROMO_PAGES } from '@/lib/siteLinks';

const ArticlePage = () => {
  const { slug } = useParams();
  const article = slug ? getArticle(slug) : undefined;

  useEffect(() => {
    if (!article) return;
    const prevTitle = document.title;
    document.title = article.metaTitle;

    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', article.metaDescription);
    setMeta('keywords', article.keywords);
    window.scrollTo(0, 0);

    return () => {
      document.title = prevTitle;
    };
  }, [article]);

  if (!article) return <Navigate to="/" replace />;

  const others = articles.filter((a) => a.slug !== article.slug).slice(0, 2);

  const articleUrl = `https://паспортсервис.рф/articles/${article.slug}`;
  const promo = PROMO_PAGES[article.relatedPromo];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <JsonLd
        data={[
          {
            '@context': 'https://schema.org',
            '@type': 'Article',
            headline: article.title,
            description: article.metaDescription,
            image: article.cover,
            author: { '@type': 'Organization', name: 'ПаспортСервис' },
            publisher: { '@type': 'Organization', name: 'ПаспортСервис' },
            mainEntityOfPage: articleUrl,
          },
          {
            '@context': 'https://schema.org',
            '@type': 'BreadcrumbList',
            itemListElement: [
              { '@type': 'ListItem', position: 1, name: 'Главная', item: 'https://паспортсервис.рф/' },
              { '@type': 'ListItem', position: 2, name: 'Статьи', item: 'https://паспортсервис.рф/#articles' },
              { '@type': 'ListItem', position: 3, name: article.title, item: articleUrl },
            ],
          },
        ]}
      />

      <nav aria-label="Хлебные крошки" className="border-b border-border bg-secondary/50">
        <div className="container flex flex-wrap items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Главная
          </Link>
          <Icon name="ChevronRight" size={14} />
          <a href="/#articles" className="hover:text-accent">
            Статьи
          </a>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">{article.title}</span>
        </div>
      </nav>

      <article className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <div className="flex items-center gap-4 text-sm text-muted-foreground">
            <span className="inline-flex items-center gap-1.5">
              <Icon name="Calendar" size={15} /> {article.date}
            </span>
            <span className="inline-flex items-center gap-1.5">
              <Icon name="Clock" size={15} /> {article.readTime}
            </span>
          </div>
          <h1 className="mt-4 font-display text-3xl font-bold leading-tight text-primary md:text-4xl">
            {article.title}
          </h1>
          <img
            src={article.cover}
            alt={article.title}
            className="mt-8 w-full rounded-2xl shadow-lg"
            loading="eager"
          />
          <div className="article-content mt-8 space-y-5 text-lg leading-relaxed text-foreground/85">
            {article.content}
          </div>

          <div className="mt-10 rounded-2xl border-2 border-accent/40 bg-accent/5 p-6 text-center">
            <p className="font-display text-lg font-semibold text-primary">{promo.cardTitle}?</p>
            <p className="mx-auto mt-2 max-w-xl text-sm text-foreground/80">
              {promo.cardDesc} Поможем оформить быстро и без ошибок.
            </p>
            <Button asChild className="mt-4 bg-primary text-primary-foreground hover:bg-primary/90">
              <Link to={promo.path}>{promo.cardTitle}</Link>
            </Button>
          </div>
        </div>
      </article>

      <section className="border-t border-border py-12 md:py-16">
        <div className="container max-w-4xl">
          <h2 className="font-display text-2xl font-bold text-primary">Читайте также</h2>
          <div className="mt-6 grid gap-6 sm:grid-cols-2">
            {others.map((a) => (
              <Link
                key={a.slug}
                to={`/articles/${a.slug}`}
                className="group rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <h3 className="font-display text-lg font-semibold text-primary transition-colors group-hover:text-accent">
                  {a.title}
                </h3>
                <p className="mt-2 text-sm text-muted-foreground">{a.excerpt}</p>
                <span className="mt-4 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Читать <Icon name="ArrowRight" size={15} />
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

export default ArticlePage;