import Icon from '@/components/ui/icon';
import MaxIcon from '@/components/MaxIcon';
import { PHONE_TEL, WHATSAPP_URL, TELEGRAM_URL, MAX_URL } from '@/lib/contacts';

const MobileActionBar = () => {
  return (
    <div className="fixed inset-x-0 bottom-0 z-50 border-t border-border bg-background/95 px-3 pb-[max(0.5rem,env(safe-area-inset-bottom))] pt-2 shadow-[0_-4px_20px_rgba(0,0,0,0.08)] backdrop-blur-md md:hidden">
      <div className="flex items-center gap-2">
        <a
          href={`tel:${PHONE_TEL}`}
          className="flex h-12 flex-1 items-center justify-center gap-2 rounded-xl bg-accent font-semibold text-accent-foreground active:scale-[0.98]"
        >
          <Icon name="Phone" size={20} />
          Позвонить
        </a>
        <a
          href={WHATSAPP_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в WhatsApp"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#25D366] text-white active:scale-95"
        >
          <Icon name="MessageCircle" size={22} />
        </a>
        <a
          href={TELEGRAM_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в Telegram"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#229ED9] text-white active:scale-95"
        >
          <Icon name="Send" size={22} />
        </a>
        <a
          href={MAX_URL}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Написать в MAX"
          className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-[#6B5CFF] text-white active:scale-95"
        >
          <MaxIcon size={22} mono />
        </a>
      </div>
    </div>
  );
};

export default MobileActionBar;
