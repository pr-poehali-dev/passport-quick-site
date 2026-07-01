import { useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';

const nav = [
  { label: 'Услуги', href: '/#services' },
  { label: 'Цены', href: '/#prices' },
  { label: 'Дети до 14 лет', href: '/deti-do-14-let' },
  { label: 'Документы', href: '/#docs' },
  { label: 'Как мы работаем', href: '/#process' },
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
        <nav className="hidden items-center gap-6 lg:flex">
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
        <div className="hidden items-center gap-4 lg:flex">
          <a href="tel:+74950000000" className="font-display text-lg font-semibold text-primary">
            +7 (495) 000-00-00
          </a>
        </div>
        <button className="lg:hidden" onClick={() => setMenu(!menu)} aria-label="Меню">
          <Icon name={menu ? 'X' : 'Menu'} size={26} className="text-primary" />
        </button>
      </div>
      {menu && (
        <nav className="border-t border-border bg-background px-4 py-4 lg:hidden">
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
          <a href="tel:+74950000000" className="mt-2 block font-semibold text-primary">
            +7 (495) 000-00-00
          </a>
        </nav>
      )}
    </header>
  );
};

export default SiteHeader;
