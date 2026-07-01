import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contacts';
import { PROMO_PAGES } from '@/lib/siteLinks';

const services = [
  { label: 'Загранпаспорт взрослым', href: '/#prices' },
  { label: PROMO_PAGES.children.navLabel, href: PROMO_PAGES.children.path },
  { label: PROMO_PAGES.noRegistration.navLabel, href: PROMO_PAGES.noRegistration.path },
  { label: PROMO_PAGES.noMilitaryId.navLabel, href: PROMO_PAGES.noMilitaryId.path },
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
          <a
            href="/#articles"
            className="mt-4 inline-block text-sm text-muted-foreground transition-colors hover:text-accent"
          >
            Полезная информация
          </a>
        </div>
      </div>

      <div className="border-t border-border py-6">
        <div className="container text-center text-sm text-muted-foreground">
          © 2026 ПаспортСервис. Помощь в оформлении загранпаспортов.
        </div>
      </div>
    </footer>
  );
};

export default SiteFooter;