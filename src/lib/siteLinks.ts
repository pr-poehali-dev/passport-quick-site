/**
 * ЕДИНАЯ СХЕМА ПЕРЕЛИНКОВКИ И SEO САЙТА
 * =====================================
 * Здесь описаны все промостраницы, их URL, SEO-мета и связи между статьями и страницами.
 *
 * ПРАВИЛА (соблюдать при любых будущих публикациях и изменениях):
 * 1. Каждая новая промостраница добавляется в PROMO_PAGES с уникальным slug и полным SEO.
 * 2. У каждой промостраницы обязательно: title, description, keywords, h1, JSON-LD (Breadcrumb+Service+FAQ).
 * 3. Каждая статья указывает relatedPromo — slug тематической промостраницы, куда ставится ссылка.
 * 4. Внутренние ссылки только через Link (SPA), внешние — через <a target="_blank" rel="noopener noreferrer">.
 * 5. Блок "Смотрите также" на промостранице выводит crossLinks из этой схемы (без ссылки на саму себя).
 * 6. Никаких битых ссылок и дублей: ведём только на существующие slug/якоря.
 * 7. Якоря главной: #prices, #docs, #articles, #contacts.
 */

export const SITE_URL = 'https://паспортсервис.рф';

export type PromoKey = 'children' | 'noRegistration' | 'noMilitaryId';

export interface PromoPage {
  key: PromoKey;
  path: string;
  navLabel: string;
  cardTitle: string;
  cardDesc: string;
  icon: string;
}

export const PROMO_PAGES: Record<PromoKey, PromoPage> = {
  children: {
    key: 'children',
    path: '/deti-do-14-let',
    navLabel: 'Дети до 14 лет',
    cardTitle: 'Загранпаспорт детям до 14 лет',
    cardDesc: 'Биометрия на 10 лет и старый образец. Срочно, от 2 часов, через МФЦ.',
    icon: 'Baby',
  },
  noRegistration: {
    key: 'noRegistration',
    path: '/zagranpasport-bez-propiski-moskva',
    navLabel: 'Без прописки в Москве',
    cardTitle: 'Загранпаспорт без прописки в Москве',
    cardDesc: 'Для иногородних. Быстрее регламентных 3 месяцев, цена как для всех.',
    icon: 'MapPinOff',
  },
  noMilitaryId: {
    key: 'noMilitaryId',
    path: '/zagranpasport-bez-voennogo-bileta',
    navLabel: 'Без военного билета',
    cardTitle: 'Загранпаспорт без военного билета',
    cardDesc: 'Без справок из военкомата. Только официально, в рамках закона.',
    icon: 'FileX',
  },
};

export const promoUrl = (key: PromoKey) => `${SITE_URL}${PROMO_PAGES[key].path}`;

/** Ссылки "Смотрите также" для промостраницы: все остальные промо. */
export const getCrossLinks = (current: PromoKey): PromoPage[] =>
  Object.values(PROMO_PAGES).filter((p) => p.key !== current);
