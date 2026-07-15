export type IllustrationKey =
  | 'documents'
  | 'compare'
  | 'timeline'
  | 'militaryId'
  | 'registration'
  | 'photo'
  | 'fee';

interface ArticleIllustrationProps {
  variant: IllustrationKey;
  className?: string;
}

/**
 * Схематические тематические иллюстрации для статей.
 * Используют CSS-переменные темы (primary / accent / border), поэтому
 * автоматически подстраиваются под палитру проекта.
 */
const ArticleIllustration = ({ variant, className = '' }: ArticleIllustrationProps) => {
  const common = 'h-full w-full';
  const primary = 'hsl(var(--primary))';
  const accent = 'hsl(var(--accent))';
  const soft = 'hsl(var(--primary) / 0.12)';
  const line = 'hsl(var(--primary) / 0.25)';

  const wrapper = `relative aspect-[16/7] w-full overflow-hidden rounded-2xl border border-border bg-secondary ${className}`;

  const grid = (
    <defs>
      <pattern id="dots" width="18" height="18" patternUnits="userSpaceOnUse">
        <circle cx="1.5" cy="1.5" r="1.5" fill="hsl(var(--primary) / 0.06)" />
      </pattern>
    </defs>
  );

  const render = () => {
    switch (variant) {
      case 'documents':
        return (
          <svg viewBox="0 0 400 175" className={common} fill="none">
            {grid}
            <rect width="400" height="175" fill="url(#dots)" />
            {/* stacked documents */}
            <rect x="120" y="35" width="110" height="130" rx="8" fill={soft} />
            <rect x="140" y="25" width="110" height="130" rx="8" fill="white" stroke={line} />
            <line x1="158" y1="52" x2="232" y2="52" stroke={line} strokeWidth="4" strokeLinecap="round" />
            <line x1="158" y1="70" x2="232" y2="70" stroke={line} strokeWidth="4" strokeLinecap="round" />
            <line x1="158" y1="88" x2="210" y2="88" stroke={line} strokeWidth="4" strokeLinecap="round" />
            {/* check badge */}
            <circle cx="228" cy="118" r="22" fill={accent} />
            <path d="M218 118 l7 7 12 -14" stroke="hsl(var(--accent-foreground))" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round" fill="none" />
            {/* passport */}
            <rect x="255" y="55" width="80" height="100" rx="8" fill={primary} />
            <circle cx="295" cy="90" r="14" fill={accent} opacity="0.9" />
            <line x1="275" y1="120" x2="315" y2="120" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
            <line x1="275" y1="132" x2="315" y2="132" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.7" />
          </svg>
        );
      case 'compare':
        return (
          <svg viewBox="0 0 400 175" className={common} fill="none">
            {grid}
            <rect width="400" height="175" fill="url(#dots)" />
            {/* left passport - 10 years */}
            <rect x="70" y="40" width="90" height="115" rx="10" fill={primary} />
            <rect x="82" y="55" width="66" height="34" rx="4" fill={accent} opacity="0.9" />
            <text x="115" y="120" fontSize="26" fontWeight="700" fill="white" textAnchor="middle" fontFamily="Oswald, sans-serif">10</text>
            <text x="115" y="140" fontSize="11" fill="white" textAnchor="middle" opacity="0.8" fontFamily="Golos Text, sans-serif">лет</text>
            {/* VS */}
            <circle cx="200" cy="98" r="24" fill="white" stroke={line} />
            <text x="200" y="105" fontSize="16" fontWeight="700" fill={primary} textAnchor="middle" fontFamily="Oswald, sans-serif">VS</text>
            {/* right passport - 5 years */}
            <rect x="240" y="40" width="90" height="115" rx="10" fill="white" stroke={line} strokeWidth="2" />
            <rect x="252" y="55" width="66" height="34" rx="4" fill={soft} />
            <text x="285" y="120" fontSize="26" fontWeight="700" fill={primary} textAnchor="middle" fontFamily="Oswald, sans-serif">5</text>
            <text x="285" y="140" fontSize="11" fill={primary} textAnchor="middle" opacity="0.7" fontFamily="Golos Text, sans-serif">лет</text>
          </svg>
        );
      case 'timeline':
        return (
          <svg viewBox="0 0 400 175" className={common} fill="none">
            {grid}
            <rect width="400" height="175" fill="url(#dots)" />
            {/* timeline line */}
            <line x1="55" y1="90" x2="345" y2="90" stroke={line} strokeWidth="4" strokeLinecap="round" />
            {/* points */}
            <circle cx="70" cy="90" r="14" fill={accent} />
            <circle cx="200" cy="90" r="10" fill="white" stroke={line} strokeWidth="3" />
            <circle cx="330" cy="90" r="10" fill="white" stroke={line} strokeWidth="3" />
            <text x="70" y="55" fontSize="15" fontWeight="700" fill={primary} textAnchor="middle" fontFamily="Oswald, sans-serif">2ч</text>
            <text x="200" y="55" fontSize="13" fill={primary} textAnchor="middle" opacity="0.7" fontFamily="Golos Text, sans-serif">2 дня</text>
            <text x="330" y="55" fontSize="13" fill={primary} textAnchor="middle" opacity="0.7" fontFamily="Golos Text, sans-serif">11 дней</text>
            {/* clock */}
            <circle cx="70" cy="128" r="16" fill="white" stroke={primary} strokeWidth="3" />
            <line x1="70" y1="128" x2="70" y2="118" stroke={primary} strokeWidth="3" strokeLinecap="round" />
            <line x1="70" y1="128" x2="78" y2="132" stroke={primary} strokeWidth="3" strokeLinecap="round" />
          </svg>
        );
      case 'militaryId':
        return (
          <svg viewBox="0 0 400 175" className={common} fill="none">
            {grid}
            <rect width="400" height="175" fill="url(#dots)" />
            {/* military id (crossed out) */}
            <rect x="70" y="50" width="105" height="80" rx="8" fill="white" stroke={line} strokeWidth="2" />
            <rect x="82" y="62" width="34" height="34" rx="4" fill={soft} />
            <line x1="124" y1="70" x2="162" y2="70" stroke={line} strokeWidth="4" strokeLinecap="round" />
            <line x1="124" y1="84" x2="162" y2="84" stroke={line} strokeWidth="4" strokeLinecap="round" />
            <line x1="82" y1="110" x2="162" y2="110" stroke={line} strokeWidth="4" strokeLinecap="round" />
            <line x1="60" y1="45" x2="185" y2="135" stroke={accent} strokeWidth="6" strokeLinecap="round" />
            {/* legal shield / passport ok */}
            <path d="M290 40 l45 16 v34 c0 34 -22 52 -45 62 c-23 -10 -45 -28 -45 -62 v-34 z" fill={primary} />
            <path d="M272 92 l12 12 22 -26" stroke={accent} strokeWidth="6" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case 'registration':
        return (
          <svg viewBox="0 0 400 175" className={common} fill="none">
            {grid}
            <rect width="400" height="175" fill="url(#dots)" />
            {/* map with pin */}
            <path d="M60 55 l70 -18 70 18 70 -18 v90 l-70 18 -70 -18 -70 18 z" fill={soft} stroke={line} strokeWidth="2" strokeLinejoin="round" />
            <line x1="130" y1="37" x2="130" y2="127" stroke={line} strokeWidth="2" />
            <line x1="200" y1="55" x2="200" y2="145" stroke={line} strokeWidth="2" />
            {/* pin москва */}
            <path d="M300 45 c22 0 38 16 38 38 c0 28 -38 56 -38 56 c0 0 -38 -28 -38 -56 c0 -22 16 -38 38 -38 z" fill={accent} />
            <circle cx="300" cy="83" r="14" fill="white" />
            <text x="300" y="165" fontSize="14" fontWeight="700" fill={primary} textAnchor="middle" fontFamily="Oswald, sans-serif">Москва</text>
          </svg>
        );
      case 'photo':
        return (
          <svg viewBox="0 0 400 175" className={common} fill="none">
            {grid}
            <rect width="400" height="175" fill="url(#dots)" />
            {/* photo frame */}
            <rect x="140" y="25" width="120" height="125" rx="8" fill="white" stroke={line} strokeWidth="2" />
            {/* head silhouette */}
            <circle cx="200" cy="78" r="26" fill={soft} />
            <path d="M158 150 c0 -30 19 -46 42 -46 s42 16 42 46 z" fill={soft} />
            {/* guide lines */}
            <line x1="140" y1="52" x2="130" y2="52" stroke={accent} strokeWidth="3" strokeLinecap="round" />
            <line x1="140" y1="123" x2="130" y2="123" stroke={accent} strokeWidth="3" strokeLinecap="round" />
            <line x1="126" y1="52" x2="126" y2="123" stroke={accent} strokeWidth="2" strokeDasharray="4 4" />
            {/* corner marks */}
            <path d="M150 33 h-6 v6" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            <path d="M250 33 h6 v6" stroke={accent} strokeWidth="2.5" fill="none" strokeLinecap="round" />
            {/* check */}
            <circle cx="278" cy="128" r="20" fill={accent} />
            <path d="M269 128 l6 6 11 -13" stroke="hsl(var(--accent-foreground))" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round" fill="none" />
          </svg>
        );
      case 'fee':
        return (
          <svg viewBox="0 0 400 175" className={common} fill="none">
            {grid}
            <rect width="400" height="175" fill="url(#dots)" />
            {/* coins stack */}
            <ellipse cx="120" cy="135" rx="42" ry="13" fill={soft} />
            <rect x="78" y="95" width="84" height="40" fill={soft} />
            <ellipse cx="120" cy="95" rx="42" ry="13" fill="white" stroke={line} strokeWidth="2" />
            <ellipse cx="120" cy="78" rx="42" ry="13" fill="white" stroke={line} strokeWidth="2" />
            <ellipse cx="120" cy="61" rx="42" ry="13" fill={accent} />
            <text x="120" y="66" fontSize="15" fontWeight="700" fill="hsl(var(--accent-foreground))" textAnchor="middle" fontFamily="Oswald, sans-serif">₽</text>
            {/* receipt / passport with price tag */}
            <rect x="210" y="35" width="90" height="115" rx="8" fill={primary} />
            <circle cx="255" cy="72" r="15" fill={accent} opacity="0.9" />
            <line x1="228" y1="100" x2="282" y2="100" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            <line x1="228" y1="114" x2="282" y2="114" stroke="white" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
            {/* price tag */}
            <path d="M300 90 l40 0 20 22 -20 22 -40 0 z" fill="white" stroke={line} strokeWidth="2" strokeLinejoin="round" />
            <circle cx="348" cy="112" r="4" fill={primary} />
            <text x="318" y="118" fontSize="14" fontWeight="700" fill={primary} textAnchor="middle" fontFamily="Oswald, sans-serif">₽</text>
          </svg>
        );
    }
  };

  return <div className={wrapper}>{render()}</div>;
};

export default ArticleIllustration;