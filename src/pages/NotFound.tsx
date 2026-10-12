import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';
import usePageSeo from '@/hooks/usePageSeo';
import { visiblePromoPages } from '@/lib/siteLinks';

const NotFound = () => {
  usePageSeo({
    title: 'Страница не найдена (404) | ПаспортСервис',
    description: 'Такой страницы нет на сайте. Перейдите на главную или в раздел статей.',
    noindex: true,
  });

  const links = [
    { to: '/', label: 'Главная', icon: 'Home' },
    ...visiblePromoPages().map((p) => ({ to: p.path, label: p.navLabel, icon: p.icon })),
    { to: '/articles', label: 'Статьи', icon: 'BookOpen' },
  ];

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <SiteHeader />
      <main className="flex flex-1 items-center py-16">
        <div className="container max-w-2xl text-center">
          <p className="font-display text-7xl font-bold text-accent md:text-8xl">404</p>
          <h1 className="mt-4 font-display text-3xl font-bold text-primary md:text-4xl">
            Страница не найдена
          </h1>
          <p className="mt-3 text-muted-foreground">
            Возможно, ссылка устарела или в адресе опечатка. Выберите нужный раздел или вернитесь на
            главную.
          </p>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {links.map((l) => (
              <Link
                key={l.to}
                to={l.to}
                className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-4 text-left font-medium text-primary transition-all hover:border-accent/40 hover:shadow-lg"
              >
                <Icon name={l.icon} size={20} className="text-accent" />
                {l.label}
              </Link>
            ))}
          </div>
          <Button
            asChild
            size="lg"
            className="mt-8 bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
          >
            <Link to="/">Вернуться на главную</Link>
          </Button>
        </div>
      </main>
      <SiteFooter />
    </div>
  );
};

export default NotFound;
