import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const contacts = [
  { icon: 'Phone', label: '+7 (495) 000-00-00', sub: 'Ежедневно 9:00–21:00' },
  { icon: 'Mail', label: 'info@passportservice.ru', sub: 'Ответим в течение часа' },
  { icon: 'MapPin', label: 'Москва, ул. Тверская, 1', sub: 'Офис в центре города' },
];

const ContactCta = () => {
  return (
    <section id="contacts" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container grid gap-10 lg:grid-cols-2 lg:items-center">
        <div>
          <h2 className="font-display text-3xl font-bold md:text-4xl">
            Нужна помощь с загранпаспортом?
          </h2>
          <p className="mt-4 max-w-md text-primary-foreground/75">
            Оставьте заявку на предварительную запись — специалист свяжется, назовёт точный срок и
            стоимость. Оплата в офисе наличными.
          </p>
          <div className="mt-8 space-y-4">
            {contacts.map((c) => (
              <div key={c.label} className="flex items-center gap-4">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/10">
                  <Icon name={c.icon} size={20} className="text-accent" />
                </div>
                <div>
                  <p className="font-semibold">{c.label}</p>
                  <p className="text-sm text-primary-foreground/60">{c.sub}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
        <form className="rounded-2xl bg-white p-7 text-foreground">
          <h3 className="font-display text-xl font-semibold text-primary">Оставить заявку</h3>
          <div className="mt-5 space-y-4">
            <input
              type="text"
              placeholder="Ваше имя"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent"
            />
            <input
              type="tel"
              placeholder="Телефон"
              className="w-full rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent"
            />
            <textarea
              placeholder="Комментарий (необязательно)"
              rows={3}
              className="w-full resize-none rounded-lg border border-border bg-background px-4 py-3 outline-none focus:border-accent"
            />
            <Button
              type="button"
              size="lg"
              className="w-full bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
            >
              Отправить заявку
            </Button>
            <p className="text-center text-xs text-muted-foreground">
              Нажимая кнопку, вы соглашаетесь с политикой конфиденциальности
            </p>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactCta;
