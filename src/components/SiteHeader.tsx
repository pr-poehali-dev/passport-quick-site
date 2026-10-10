import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contacts';
import { visiblePromoPages } from '@/lib/siteLinks';

const nav = [
  { label: 'Цены', href: '/#prices' },
  ...visiblePromoPages().map((p) => ({ label: p.navLabel, href: p.path })),
  { label: 'Статьи', href: '/articles' },
  { label: 'Контакты', href: '/#contacts' },
];

const COST_HREF = '/#contacts';

const isRoute = (href: string) => href.startsWith('/') && !href.includes('#');

const SiteHeader = () => {
  const [menu, setMenu] = useState(false);

  useEffect(() => {
    document.body.style.overflow = menu ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [menu]);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container flex h-14 items-center justify-between sm:h-16">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Icon name="Plane" size={20} className="text-accent" />
          </div>
          <span className="font-display text-lg font-bold text-primary sm:text-xl">ПаспортСервис</span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((n) =>
            isRoute(n.href) ? (
              <Link
                key={n.href}
                to={n.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              >
                {n.label}
              </Link>
            ) : (
              <a
                key={n.href}
                href={n.href}
                className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
              >
                {n.label}
              </a>
            ),
          )}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-display text-lg font-semibold text-primary"
          >
            {PHONE_DISPLAY}
          </a>
          <a
            href={COST_HREF}
            className="rounded-xl bg-accent px-5 py-2.5 text-sm font-semibold text-accent-foreground transition-colors hover:bg-accent/90"
          >
            Узнать стоимость
          </a>
        </div>
        <div className="flex items-center gap-2 xl:hidden">
          <a
            href={COST_HREF}
            className="hidden h-10 items-center rounded-xl bg-accent px-4 text-sm font-semibold text-accent-foreground sm:flex"
          >
            Узнать стоимость
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            aria-label="Позвонить"
            className="flex h-10 w-10 items-center justify-center rounded-full bg-accent text-accent-foreground sm:hidden"
          >
            <Icon name="Phone" size={18} />
          </a>
          <button
            onClick={() => setMenu(!menu)}
            aria-label={menu ? 'Закрыть меню' : 'Открыть меню'}
            aria-expanded={menu}
            className="flex h-10 w-10 items-center justify-center rounded-full bg-secondary"
          >
            <Icon name={menu ? 'X' : 'Menu'} size={22} className="text-primary" />
          </button>
        </div>
      </div>
      {menu && (
        <nav className="fixed inset-x-0 bottom-0 top-14 z-40 overflow-y-auto border-t border-border bg-background px-4 pb-8 pt-3 sm:top-16 xl:hidden">
          <ul className="divide-y divide-border">
            {nav.map((n) => {
              const cls =
                'flex min-h-[52px] items-center justify-between font-medium text-foreground active:text-accent';
              const inner = (
                <>
                  {n.label}
                  <Icon name="ChevronRight" size={18} className="text-muted-foreground" />
                </>
              );
              return (
                <li key={n.href}>
                  {isRoute(n.href) ? (
                    <Link to={n.href} onClick={() => setMenu(false)} className={cls}>
                      {inner}
                    </Link>
                  ) : (
                    <a href={n.href} onClick={() => setMenu(false)} className={cls}>
                      {inner}
                    </a>
                  )}
                </li>
              );
            })}
          </ul>
          <a
            href={COST_HREF}
            onClick={() => setMenu(false)}
            className="mt-6 flex h-14 items-center justify-center gap-2 rounded-xl bg-accent font-display text-lg font-semibold text-accent-foreground"
          >
            <Icon name="MessageCircle" size={20} />
            Узнать стоимость
          </a>
          <a
            href={`tel:${PHONE_TEL}`}
            className="mt-3 flex h-14 items-center justify-center gap-2 rounded-xl border-2 border-primary font-display text-lg font-semibold text-primary"
          >
            <Icon name="Phone" size={20} />
            {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;