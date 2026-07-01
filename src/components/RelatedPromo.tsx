import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { getCrossLinks, PromoKey } from '@/lib/siteLinks';

interface RelatedPromoProps {
  current: PromoKey;
}

const RelatedPromo = ({ current }: RelatedPromoProps) => {
  const links = getCrossLinks(current);

  return (
    <section className="py-14 md:py-20">
      <div className="container">
        <header className="mx-auto max-w-2xl text-center">
          <p className="font-semibold uppercase tracking-widest text-accent">Смотрите также</p>
          <h2 className="mt-2 font-display text-3xl font-bold text-primary md:text-4xl">
            Другие услуги
          </h2>
        </header>
        <div className="mx-auto mt-10 grid max-w-4xl gap-6 sm:grid-cols-2">
          {links.map((p) => (
            <Link
              key={p.key}
              to={p.path}
              className="group flex items-start gap-4 rounded-2xl border border-border bg-card p-6 transition-all hover:border-accent/40 hover:shadow-lg"
            >
              <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent transition-colors group-hover:bg-accent group-hover:text-accent-foreground">
                <Icon name={p.icon} size={24} />
              </div>
              <div>
                <h3 className="font-display text-lg font-semibold text-primary transition-colors group-hover:text-accent">
                  {p.cardTitle}
                </h3>
                <p className="mt-1 text-sm text-muted-foreground">{p.cardDesc}</p>
                <span className="mt-3 inline-flex items-center gap-1 text-sm font-medium text-accent">
                  Подробнее <Icon name="ArrowRight" size={15} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
};

export default RelatedPromo;
