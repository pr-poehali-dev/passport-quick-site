import { useEffect } from 'react';
import { SITE_URL } from '@/lib/siteLinks';

interface PageSeoOptions {
  title: string;
  description: string;
  keywords?: string;
  /** Путь без домена, например "/deti-do-14-let". По умолчанию — текущий путь. */
  path?: string;
  /** Абсолютная ссылка на изображение для og:image / twitter:image. */
  image?: string;
  /** Запретить индексацию страницы (например, 404 или временно скрытые страницы). */
  noindex?: boolean;
}

const DEFAULT_OG_IMAGE = 'https://cdn.poehali.dev/intertnal/img/og.png';

const setMetaByName = (name: string, content: string) => {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const setMetaByProperty = (property: string, content: string) => {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
};

const removeMetaByName = (name: string) => {
  document.querySelector(`meta[name="${name}"]`)?.remove();
};

/**
 * Устанавливает title, meta description/keywords, canonical и Open Graph / Twitter
 * теги для текущей страницы. Автоматически возвращает предыдущий title при размонтировании.
 */
const usePageSeo = ({ title, description, keywords, path, image, noindex }: PageSeoOptions) => {
  useEffect(() => {
    const prevTitle = document.title;
    document.title = title;

    setMetaByName('description', description);
    if (keywords) setMetaByName('keywords', keywords);

    const url = `${SITE_URL}${path ?? window.location.pathname}`;

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);

    setMetaByProperty('og:title', title);
    setMetaByProperty('og:description', description);
    setMetaByProperty('og:url', url);
    setMetaByProperty('og:image', image ?? DEFAULT_OG_IMAGE);

    setMetaByName('twitter:title', title);
    setMetaByName('twitter:description', description);
    setMetaByName('twitter:image', image ?? DEFAULT_OG_IMAGE);

    if (noindex) {
      setMetaByName('robots', 'noindex, follow');
    } else {
      removeMetaByName('robots');
    }

    return () => {
      document.title = prevTitle;
      removeMetaByName('robots');
    };
  }, [title, description, keywords, path, image, noindex]);
};

export default usePageSeo;
