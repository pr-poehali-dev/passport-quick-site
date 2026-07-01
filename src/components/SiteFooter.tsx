import Icon from '@/components/ui/icon';

const SiteFooter = () => {
  return (
    <footer className="border-t border-border bg-background py-10">
      <div className="container flex flex-col items-center justify-between gap-4 text-sm text-muted-foreground md:flex-row">
        <div className="flex items-center gap-2">
          <Icon name="Plane" size={18} className="text-primary" />
          <span className="font-display font-bold text-primary">ПаспортСервис</span>
        </div>
        <p>© 2026 ПаспортСервис. Помощь в оформлении загранпаспортов.</p>
      </div>
    </footer>
  );
};

export default SiteFooter;
