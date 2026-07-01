import { useState, useMemo } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';

type Tariff = { term: string; price: number };

const categories: {
  id: string;
  label: string;
  sub: string;
  duty: string;
  tariffs: Tariff[];
}[] = [
  {
    id: 'adult-pvs',
    label: 'Взрослые и дети 14+ · через ФГУП ПВС + МВД',
    sub: 'Самое быстрое оформление, госпошлина 6000 ₽ включена',
    duty: 'Госпошлина 6000 ₽ включена в стоимость',
    tariffs: [
      { term: '4 рабочих дня', price: 100500 },
      { term: '5 рабочих дней', price: 84500 },
      { term: '6 рабочих дней', price: 77500 },
      { term: '7 рабочих дней', price: 72500 },
      { term: '8 рабочих дней', price: 65500 },
    ],
  },
  {
    id: 'adult-mvd',
    label: 'Взрослые и дети 14+ · через МВД',
    sub: 'Оптимально по цене, госпошлина 6000 ₽ включена',
    duty: 'Госпошлина 6000 ₽ включена в стоимость',
    tariffs: [
      { term: '12 рабочих дней', price: 40000 },
      { term: '13 рабочих дней', price: 31000 },
      { term: '17 рабочих дней', price: 29000 },
      { term: '24 рабочих дня', price: 26000 },
    ],
  },
  {
    id: 'child-bio',
    label: 'Дети до 14 лет · биометрия (10 лет)',
    sub: 'Госпошлина 3000 ₽ оплачивается отдельно в МВД',
    duty: 'Госпошлина 3000 ₽ оплачивается отдельно в МВД',
    tariffs: [
      { term: '2 рабочих дня', price: 53500 },
      { term: '5 рабочих дней', price: 29000 },
      { term: '7 рабочих дней', price: 25000 },
      { term: '11 рабочих дней', price: 23000 },
    ],
  },
  {
    id: 'child-old',
    label: 'Дети до 14 лет · старый образец (5 лет)',
    sub: 'Госпошлина 1000 ₽ оплачивается отдельно в МВД',
    duty: 'Госпошлина 1000 ₽ оплачивается отдельно в МВД',
    tariffs: [
      { term: '2–3 часа', price: 41000 },
      { term: '4 рабочих дня', price: 26000 },
      { term: '7 рабочих дней', price: 22000 },
      { term: '10–11 рабочих дней', price: 20000 },
    ],
  },
];

const Calculator = () => {
  const [catId, setCatId] = useState(categories[0].id);
  const [termIdx, setTermIdx] = useState(0);

  const category = useMemo(() => categories.find((c) => c.id === catId)!, [catId]);
  const tariff = category.tariffs[termIdx] ?? category.tariffs[0];

  const selectCategory = (id: string) => {
    setCatId(id);
    setTermIdx(0);
  };

  return (
    <div className="grid gap-8 lg:grid-cols-[1fr_360px]">
      <div className="space-y-7">
        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Категория
          </p>
          <div className="grid gap-3">
            {categories.map((c) => {
              const active = catId === c.id;
              return (
                <button
                  key={c.id}
                  onClick={() => selectCategory(c.id)}
                  className={`flex items-start justify-between gap-3 rounded-lg border-2 p-4 text-left transition-all ${
                    active
                      ? 'border-accent bg-accent/10'
                      : 'border-border bg-card hover:border-accent/50'
                  }`}
                >
                  <span>
                    <span className="block font-semibold text-foreground">{c.label}</span>
                    <span className="block text-xs text-muted-foreground">{c.sub}</span>
                  </span>
                  {active && (
                    <Icon name="CheckCircle2" className="mt-0.5 shrink-0 text-accent" size={22} />
                  )}
                </button>
              );
            })}
          </div>
        </div>

        <div>
          <p className="mb-3 text-sm font-semibold uppercase tracking-wide text-muted-foreground">
            Срок оформления
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {category.tariffs.map((t, i) => {
              const active = termIdx === i;
              return (
                <button
                  key={t.term}
                  onClick={() => setTermIdx(i)}
                  className={`flex items-center justify-between rounded-lg border-2 p-4 text-left transition-all ${
                    active
                      ? 'border-accent bg-accent/10'
                      : 'border-border bg-card hover:border-accent/50'
                  }`}
                >
                  <span>
                    <span className="block font-semibold text-foreground">{t.term}</span>
                    <span className="block text-xs text-muted-foreground">
                      {t.price.toLocaleString('ru-RU')} ₽
                    </span>
                  </span>
                  {active && <Icon name="CheckCircle2" className="text-accent" size={22} />}
                </button>
              );
            })}
          </div>
        </div>
      </div>

      <div className="flex h-fit flex-col rounded-2xl bg-primary p-7 text-primary-foreground lg:sticky lg:top-24">
        <p className="text-sm uppercase tracking-widest text-primary-foreground/60">
          Итоговая стоимость
        </p>
        <p className="mt-2 font-display text-5xl font-bold text-accent">
          {tariff.price.toLocaleString('ru-RU')} ₽
        </p>
        <div className="mt-6 flex items-center gap-3 rounded-lg bg-white/10 p-4">
          <Icon name="Clock" size={26} className="text-accent" />
          <div>
            <p className="text-xs text-primary-foreground/60">Срок готовности</p>
            <p className="font-display text-xl font-semibold">{tariff.term}</p>
          </div>
        </div>
        <div className="mt-4 flex items-start gap-2 rounded-lg bg-accent/10 p-3 text-xs text-primary-foreground/80">
          <Icon name="Info" size={16} className="mt-0.5 shrink-0 text-accent" />
          <span>{category.duty}</span>
        </div>
        <div className="mt-3 flex items-start gap-2 text-xs text-primary-foreground/70">
          <Icon name="CalendarClock" size={16} className="mt-0.5 shrink-0 text-accent" />
          <span>Отсчёт рабочих дней идёт со следующего дня после подачи документов в МВД</span>
        </div>
        <ul className="mt-6 space-y-2 text-sm text-primary-foreground/80">
          {['Без очередей и стояния', 'Гарантия результата', 'Полное сопровождение'].map((f) => (
            <li key={f} className="flex items-center gap-2">
              <Icon name="Check" size={16} className="text-accent" />
              {f}
            </li>
          ))}
        </ul>
        <Button
          size="lg"
          className="mt-6 bg-accent font-semibold text-accent-foreground hover:bg-accent/90"
        >
          Записаться на оформление
        </Button>
      </div>
    </div>
  );
};

export default Calculator;
