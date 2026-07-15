import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const STORAGE_KEY = 'cookie-consent-accepted';

const CookieBanner = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    try {
      if (!localStorage.getItem(STORAGE_KEY)) {
        const t = setTimeout(() => setVisible(true), 800);
        return () => clearTimeout(t);
      }
    } catch {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try {
      localStorage.setItem(STORAGE_KEY, '1');
    } catch {
      /* ignore */
    }
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="fixed inset-x-3 bottom-3 z-50 sm:inset-x-auto sm:bottom-5 sm:left-5 sm:max-w-sm">
      <div className="flex flex-col gap-3 rounded-2xl border border-border bg-card p-4 shadow-xl sm:p-5">
        <div className="flex items-start gap-3">
          <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
            <Icon name="Cookie" size={18} />
          </div>
          <p className="text-sm leading-relaxed text-foreground/80">
            Мы используем cookie для удобства и аналитики. Оставаясь на сайте, вы соглашаетесь с{' '}
            <Link
              to="/privacy"
              className="font-medium text-accent underline underline-offset-2 hover:text-accent/80"
            >
              политикой конфиденциальности
            </Link>
            .
          </p>
        </div>
        <Button
          onClick={accept}
          className="w-full bg-primary text-primary-foreground hover:bg-primary/90"
        >
          Принять
        </Button>
      </div>
    </div>
  );
};

export default CookieBanner;
