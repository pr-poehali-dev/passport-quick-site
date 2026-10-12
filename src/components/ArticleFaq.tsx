import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

export type FaqItem = { q: string; a: string };

interface ArticleFaqProps {
  items: FaqItem[];
}

const ArticleFaq = ({ items }: ArticleFaqProps) => {
  if (items.length === 0) return null;

  return (
    <section className="mt-10" aria-labelledby="article-faq">
      <h2 id="article-faq" className="font-display text-2xl font-bold text-primary">
        Частые вопросы
      </h2>
      <Accordion type="single" collapsible className="mt-4">
        {items.map((f, i) => (
          <AccordionItem
            key={f.q}
            value={`faq-${i}`}
            className="mb-3 rounded-2xl border border-border bg-card px-5 last:mb-0"
          >
            <AccordionTrigger className="text-left font-display text-base font-semibold text-primary hover:no-underline sm:text-lg">
              {f.q}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground">{f.a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
};

export default ArticleFaq;
