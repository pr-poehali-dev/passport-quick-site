import Icon from '@/components/ui/icon';
import { WHATSAPP_URL, TELEGRAM_URL } from '@/lib/contacts';

const FloatingMessengers = () => {
  return (
    <div className="fixed bottom-5 right-5 z-50 flex flex-col gap-3">
      <a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в WhatsApp"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition-transform hover:scale-110"
      >
        <Icon name="MessageCircle" size={26} />
      </a>
      <a
        href={TELEGRAM_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Написать в Telegram"
        className="flex h-14 w-14 items-center justify-center rounded-full bg-[#229ED9] text-white shadow-lg transition-transform hover:scale-110"
      >
        <Icon name="Send" size={26} />
      </a>
    </div>
  );
};

export default FloatingMessengers;
