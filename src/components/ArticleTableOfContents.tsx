import { useEffect, useState, RefObject } from 'react';
import Icon from '@/components/ui/icon';

interface Heading {
  id: string;
  text: string;
}

interface ArticleTableOfContentsProps {
  containerRef: RefObject<HTMLDivElement>;
  /** Пересчитать заголовки при смене статьи. */
  watch?: unknown;
}

const slugify = (text: string, index: number) =>
  `heading-${index}-${text
    .toLowerCase()
    .replace(/[^a-zа-яё0-9]+/gi, '-')
    .replace(/(^-|-$)/g, '')}`;

/**
 * Оглавление статьи: сканирует h2 внутри контента после рендера,
 * проставляет им id и выводит список якорных ссылок для быстрой навигации.
 * Улучшает поведенческие факторы и глубину просмотра — важно для ранжирования в Яндексе.
 */
const ArticleTableOfContents = ({ containerRef, watch }: ArticleTableOfContentsProps) => {
  const [headings, setHeadings] = useState<Heading[]>([]);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const nodes = Array.from(container.querySelectorAll('h2'));
    const items: Heading[] = nodes.map((node, i) => {
      const id = slugify(node.textContent ?? '', i);
      node.id = id;
      node.classList.add('scroll-mt-24');
      return { id, text: node.textContent ?? '' };
    });
    setHeadings(items);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [watch]);

  if (headings.length < 2) return null;

  return (
    <nav
      aria-label="Оглавление статьи"
      className="mt-8 rounded-2xl border border-border bg-card p-6"
    >
      <p className="flex items-center gap-2 font-display text-sm font-semibold uppercase tracking-widest text-accent">
        <Icon name="List" size={16} /> Содержание
      </p>
      <ol className="mt-4 space-y-2">
        {headings.map((h, i) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="flex gap-2 text-sm text-foreground/80 transition-colors hover:text-accent"
            >
              <span className="text-accent">{i + 1}.</span> {h.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
};

export default ArticleTableOfContents;
