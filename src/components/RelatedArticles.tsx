import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { articles } from '@/data/articles';
import { PromoKey } from '@/lib/siteLinks';

interface RelatedArticlesProps {
  promo: PromoKey;
  /** Максимальное число статей в блоке. */
  limit?: number;
}

/**
 * Блок "Читайте по теме" — статьи, связанные с текущей промостраницей (relatedPromo).
 * Усиливает внутреннюю перелинковку между промостраницами и статьями для SEO.
 */
const RelatedArticles = ({ promo, limit = 3 }: RelatedArticlesProps) => {
  const list = articles.filter((a) => a.relatedPromo === promo).slice(0, limit);

  if (list.length === 0) return null;

  return (
    <section className="bg-secondary py-14 md:py-20">
      <div className="container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-accent">Читайте по теме</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
            Полезные статьи
          </h2>
        </header>
        <div className="mx-auto mt-10 grid max-w-5xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((a) => (
            <Link
              key={a.slug}
              to={`/articles/${a.slug}`}
              className="group flex flex-col rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon name={a.icon} size={22} />
              </div>
              <h3 className="mt-4 font-display text-base font-semibold text-primary transition-colors group-hover:text-accent">
                {a.title}
              </h3>
              <p className="mt-2 flex-1 text-sm text-muted-foreground">{a.excerpt}</p>
              <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                Читать статью <Icon name="ArrowRight" size={15} />
              </span>
            </Link>
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            to="/articles"
            className="inline-flex items-center gap-1 text-sm font-medium text-accent hover:text-accent/80"
          >
            Все статьи <Icon name="ArrowRight" size={15} />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default RelatedArticles;
