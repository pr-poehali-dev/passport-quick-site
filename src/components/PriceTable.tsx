import Icon from '@/components/ui/icon';

type Row = { term: string; price: string };

interface PriceTableProps {
  title: string;
  note?: string;
  rows: Row[];
  highlightFirst?: boolean;
}

const PriceTable = ({ title, note, rows, highlightFirst }: PriceTableProps) => {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-card">
      <div className="border-b border-border bg-secondary px-6 py-4">
        <h3 className="font-display text-lg font-semibold text-primary">{title}</h3>
        {note && (
          <p className="mt-1 flex items-start gap-2 text-xs text-muted-foreground">
            <Icon name="Info" size={14} className="mt-0.5 shrink-0 text-accent" />
            {note}
          </p>
        )}
      </div>
      <table className="w-full">
        <thead>
          <tr className="border-b border-border text-left text-xs uppercase tracking-wide text-muted-foreground">
            <th className="px-6 py-3 font-medium">Срок оформления</th>
            <th className="px-6 py-3 text-right font-medium">Стоимость</th>
          </tr>
        </thead>
        <tbody>
          {rows.map((r, i) => (
            <tr
              key={r.term}
              className={`border-b border-border/60 transition-colors last:border-0 hover:bg-secondary/50 ${
                highlightFirst && i === 0 ? 'bg-accent/5' : ''
              }`}
            >
              <td className="px-6 py-4">
                <span className="flex items-center gap-2 font-medium text-foreground">
                  {highlightFirst && i === 0 && (
                    <Icon name="Zap" size={16} className="text-accent" />
                  )}
                  {r.term}
                </span>
              </td>
              <td className="px-6 py-4 text-right font-display text-lg font-semibold text-primary">
                {r.price}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default PriceTable;
