import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import Icon from '@/components/ui/icon';
import SiteHeader from '@/components/SiteHeader';
import SiteFooter from '@/components/SiteFooter';

const PAGE_TITLE = 'Политика конфиденциальности и согласие на обработку данных | ПаспортСервис';
const PAGE_DESC =
  'Политика конфиденциальности и согласие на обработку персональных данных сайта ПаспортСервис. Как мы собираем, храним и используем ваши данные.';

const sections = [
  {
    icon: 'ShieldCheck',
    title: 'Общие положения',
    text: 'Настоящая Политика определяет порядок обработки и защиты персональных данных пользователей сайта ПаспортСервис (далее — Сайт). Используя Сайт и оставляя обращение, вы соглашаетесь с условиями данной Политики в соответствии с Федеральным законом № 152-ФЗ «О персональных данных».',
  },
  {
    icon: 'Database',
    title: 'Какие данные мы собираем',
    text: 'Мы можем обрабатывать: имя, номер телефона, адрес электронной почты и иные данные, которые вы добровольно сообщаете при обращении через мессенджеры или по телефону, а также обезличенные данные о посещениях (cookie, статистика).',
  },
  {
    icon: 'Target',
    title: 'Цели обработки',
    text: 'Данные используются исключительно для связи с вами, консультирования, оказания помощи в оформлении документов и улучшения качества сервиса. Мы не передаём ваши данные третьим лицам, кроме случаев, предусмотренных законом.',
  },
  {
    icon: 'Lock',
    title: 'Хранение и защита',
    text: 'Мы принимаем необходимые организационные и технические меры для защиты персональных данных от неправомерного доступа, изменения, раскрытия или уничтожения. Данные хранятся не дольше, чем этого требуют цели обработки.',
  },
  {
    icon: 'UserCheck',
    title: 'Ваши права',
    text: 'Вы вправе запросить информацию об обработке ваших данных, потребовать их уточнения, блокирования или удаления, а также отозвать согласие на обработку, направив обращение по указанным на Сайте контактам.',
  },
];

const Privacy = () => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = PAGE_TITLE;
    const setMeta = (name: string, content: string) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    setMeta('description', PAGE_DESC);
    return () => {
      document.title = prevTitle;
    };
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />

      <nav aria-label="Хлебные крошки" className="border-b border-border bg-secondary/50">
        <div className="container flex items-center gap-2 py-3 text-sm text-muted-foreground">
          <Link to="/" className="hover:text-accent">
            Главная
          </Link>
          <Icon name="ChevronRight" size={14} />
          <span className="text-foreground">Политика конфиденциальности</span>
        </div>
      </nav>

      <section className="py-12 md:py-16">
        <div className="container max-w-3xl">
          <header className="text-center">
            <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
              <Icon name="ShieldCheck" size={28} />
            </div>
            <h1 className="mt-5 font-display text-3xl font-bold text-primary md:text-4xl">
              Политика конфиденциальности
            </h1>
            <p className="mt-3 text-muted-foreground">
              Как мы собираем, храним и используем ваши персональные данные.
            </p>
          </header>

          <div className="mt-10 grid gap-4">
            {sections.map((s) => (
              <div
                key={s.title}
                className="flex gap-4 rounded-2xl border border-border bg-card p-6"
              >
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-accent/10 text-accent">
                  <Icon name={s.icon} size={20} />
                </div>
                <div>
                  <h2 className="font-display text-lg font-semibold text-primary">{s.title}</h2>
                  <p className="mt-1.5 text-sm leading-relaxed text-foreground/80">{s.text}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Consent block */}
          <div className="mt-8 rounded-2xl border-2 border-accent/40 bg-accent/5 p-7">
            <div className="flex items-center gap-3">
              <Icon name="FileCheck" size={22} className="text-accent" />
              <h2 className="font-display text-xl font-semibold text-primary">
                Согласие на обработку персональных данных
              </h2>
            </div>
            <p className="mt-4 text-sm leading-relaxed text-foreground/80">
              Оставляя обращение на Сайте или направляя сообщение через мессенджеры, вы даёте согласие
              на обработку своих персональных данных (имя, телефон, email) в целях обратной связи и
              оказания консультационных услуг. Согласие действует до момента его отзыва. Отозвать
              согласие можно, написав нам по указанным контактам. Обработка осуществляется в
              соответствии с Федеральным законом № 152-ФЗ «О персональных данных».
            </p>
          </div>

          <p className="mt-8 text-center text-xs text-muted-foreground">
            Дата последнего обновления: 1 июля 2026 года.
          </p>
        </div>
      </section>

      <SiteFooter />
    </div>
  );
};

export default Privacy;
