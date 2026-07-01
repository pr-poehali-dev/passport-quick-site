import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { PHONE_DISPLAY, PHONE_TEL } from '@/lib/contacts';

const nav = [
  { label: 'Цены', href: '/#prices' },
  { label: 'Без прописки в Москве', href: '/zagranpasport-bez-propiski-moskva' },
  { label: 'Дети до 14 лет', href: '/deti-do-14-let' },
  { label: 'Документы', href: '/#docs' },
  { label: 'Статьи', href: '/#articles' },
  { label: 'Контакты', href: '/#contacts' },
];

const SiteHeader = () => {
  const [menu, setMenu] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-background/90 backdrop-blur-md">
      <div className="container flex h-16 items-center justify-between">
        <Link to="/" className="flex items-center gap-2">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-primary">
            <Icon name="Plane" size={20} className="text-accent" />
          </div>
          <span className="font-display text-xl font-bold text-primary">ПаспортСервис</span>
        </Link>
        <nav className="hidden items-center gap-6 xl:flex">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className="text-sm font-medium text-foreground/70 transition-colors hover:text-accent"
            >
              {n.label}
            </a>
          ))}
        </nav>
        <div className="hidden items-center gap-4 xl:flex">
          <a
            href={`tel:${PHONE_TEL}`}
            className="font-display text-lg font-semibold text-primary"
          >
            {PHONE_DISPLAY}
          </a>
        </div>
        <button className="xl:hidden" onClick={() => setMenu(!menu)} aria-label="Меню">
          <Icon name={menu ? 'X' : 'Menu'} size={26} className="text-primary" />
        </button>
      </div>
      {menu && (
        <nav className="border-t border-border bg-background px-4 py-4 xl:hidden">
          {nav.map((n) => (
            <a
              key={n.href}
              href={n.href}
              onClick={() => setMenu(false)}
              className="block py-2.5 font-medium text-foreground/80"
            >
              {n.label}
            </a>
          ))}
          <a href={`tel:${PHONE_TEL}`} className="mt-2 block font-semibold text-primary">
            {PHONE_DISPLAY}
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
