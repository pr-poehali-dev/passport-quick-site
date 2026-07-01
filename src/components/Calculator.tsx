import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

const passportTypes = [
  { id: 'new', label: 'Новый образец', sub: '10 лет, биометрия', base: 5000 },
  { id: 'old', label: 'Старый образец', sub: '5 лет, быстрее', base: 4500 },
];

const ageTypes = [
  { id: 'adult', label: 'Взрослый', mult: 1 },
  { id: 'child14', label: 'Ребёнок 14–18 лет', mult: 0.9 },
  { id: 'child0', label: 'Ребёнок до 14 лет', mult: 0.8 },
];

const terms = [
  { id: 't1', label: '1 день', sub: 'Экспресс', days: 1, add: 12000 },
  { id: 't3', label: '3 дня', sub: 'Срочно', days: 3, add: 7000 },
  { id: 't7', label: '7 дней', sub: 'Быстро', days: 7, add: 3500 },
  { id: 't14', label: '14 дней', sub: 'Стандарт', days: 14, add: 0 },
];

const Calculator = () => {
  const [type, setType] = useState('new');
  const [age, setAge] = useState('adult');
  const [term, setTerm] = useState('t3');

  const { total, days } = useMemo(() => {
    const t = passportTypes.find((p) => p.id === type)!;
    const a = ageTypes.find((p) => p.id === age)!;
    const term_ = terms.find((p) => p.id === term)!;
    return {
      total: Math.round((t.base * a.mult + term_.add) / 100) * 100,
      days: term_.days,
    };
  }, [type, age, term]);

  const Group = ({
    title,
    items,
    value,
    onChange,
  }: {
    title: string;
    items: { id: string; label: string; sub?: string }[];
    value: string;
    onChange: (v: string) => void;
  }) => (
    <div>
      <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
        {title}
      </p>
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((it) => {
          const active = value === it.id;
          return (
            <button
              key={it.id}
              onClick={() => onChange(it.id)}
              className={`flex items-center justify-between rounded-lg border-2 p-4 text-left transition-all ${
                active
                  ? 'border-accent bg-accent/10'
                  : 'border-border bg-card hover:border-accent/50'
              }`}
            >
              <span>
                <span className="block font-semibold text-foreground">{it.label}</span>
                {it.sub && (
                  <span className="block text-xs text-muted-foreground">{it.sub}</span>
                )}
              </span>
              {active && <Icon name="CheckCircle2" className="text-accent" size={22} />}
            </button>
          );
        })}
      </div>
    </div>
  );

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-7">
        <Group title="Тип паспорта" items={passportTypes} value={type} onChange={setType} />
        <Group title="Для кого" items={ageTypes} value={age} onChange={setAge} />
        <Group title="Срок оформления" items={terms} value={term} onChange={setTerm} />
      </div>

      <div className="flex h-fit flex-col rounded-2xl bg-primary p-7 text-primary-foreground lg:sticky lg:top-24">
        <p className="text-sm uppercase tracking-widest text-primary-foreground/60">
          Итоговая стоимость
        </p>
        <p className="mt-2 font-display text-5xl font-bold text-accent">
          {total.toLocaleString('ru-RU')} ₽
        </p>
        <div className="mt-6 flex items-center gap-3 rounded-lg bg-white/10 p-4">
          <Icon name="Clock" size={26} className="text-accent" />
          <div>
            <p className="text-xs text-primary-foreground/60">Срок готовности</p>
            <p className="font-display text-xl font-semibold">
              {days} {days === 1 ? 'день' : days < 5 ? 'дня' : 'дней'}
            </p>
          </div>
        </div>
        <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
          {['Без очередей и стояния', 'Гарантия результата', 'Сопровождение специалиста'].map(
            (f) => (
              <li key={f} className="flex items-center gap-2">
                <Icon name="Check" size={16} className="text-accent" />
                {f}
              </li>
            ),
          )}
        </ul>
        <Button size="lg" className="mt-6 bg-accent font-semibold text-accent-foreground hover:bg-accent/90">
          Оставить заявку
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
