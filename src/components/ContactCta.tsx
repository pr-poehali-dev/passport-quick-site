import Icon from '@/components/ui/icon';
import { PHONE_DISPLAY, PHONE_TEL, WHATSAPP_URL, TELEGRAM_URL } from '@/lib/contacts';

const ContactCta = () => {
  return (
    <section id="contacts" className="bg-primary py-16 text-primary-foreground md:py-24">
      <div className="container max-w-3xl text-center">
        <h2 className="font-display text-3xl font-bold md:text-4xl">
          Нужна помощь с загранпаспортом?
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-primary-foreground/75">
          Напишите нам в мессенджер — специалист ответит, назовёт точный срок и стоимость,
          запишет на приём. Отвечаем быстро.
        </p>

        <div className="mx-auto mt-8 flex max-w-md flex-col gap-4 sm:flex-row">
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#25D366] px-6 py-4 font-display text-lg font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <Icon name="MessageCircle" size={24} />
            WhatsApp
          </a>
          <a
            href={TELEGRAM_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-1 items-center justify-center gap-3 rounded-2xl bg-[#229ED9] px-6 py-4 font-display text-lg font-semibold text-white transition-transform hover:scale-[1.03]"
          >
            <Icon name="Send" size={24} />
            Telegram
          </a>
        </div>

        <a
          href={`tel:${PHONE_TEL}`}
          className="mt-6 inline-flex items-center gap-2 font-display text-2xl font-bold text-accent"
        >
          <Icon name="Phone" size={22} />
          {PHONE_DISPLAY}
        </a>
        <p className="mt-2 text-sm text-primary-foreground/60">Ежедневно 9:00–21:00</p>
      </div>
    </section>
  );
};

export default ContactCta;
