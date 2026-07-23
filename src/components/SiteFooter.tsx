import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contacts';
import { visiblePromoPages } from '@/lib/siteLinks';

const services = [
  { label: 'Загранпаспорт взрослым', href: '/#prices' },
  ...visiblePromoPages().map((p) => ({ label: p.navLabel, href: p.path })),
];

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background pt-12">
      <div className="container grid gap-8 pb-10 sm:grid-cols-2 md:grid-cols-3">
        <div>
          <div className="flex items-center gap-2">
            <Icon name="Plane" size={18} className="text-primary" />
            <span className="font-display font-bold text-primary">ПаспортСервис</span>
          </div>
          <p className="mt-3 max-w-xs text-sm text-muted-foreground">
            Помощь в оформлении загранпаспортов для взрослых и детей. Только официально, в рамках
            закона.
          </p>
        </div>

        <div>
          <h3 className="font-display font-semibold text-primary">Услуги</h3>
          <ul className="mt-4 space-y-2 text-sm">
            {services.map((s) => (
              <li key={s.href}>
                <Link
                  to={s.href}
                  className="text-muted-foreground transition-colors hover:text-accent"
                >
                  {s.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-display font-semibold text-primary">Контакты</h3>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-4 block font-display text-lg font-bold text-primary"
          >
            {PHONE_DISPLAY}
          </a>
          <p className="mt-1 text-sm text-muted-foreground">Ежедневно 9:00–21:00</p>
          <Link
            to="/articles"
            className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Полезная информация
          </Link>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container flex flex-col items-center justify-between gap-3 text-center text-sm text-muted-foreground sm:flex-row sm:text-left">
          <span>© 2026 ПаспортСервис. Помощь в оформлении загранпаспортов.</span>
          <Link to="/privacy" className="transition-colors hover:text-accent">
            Политика конфиденциальности
          </Link>
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;