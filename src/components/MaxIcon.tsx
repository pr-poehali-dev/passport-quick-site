interface MaxIconProps {
  size?: number;
  className?: string;
  /** true — белый монохромный логотип без фона (для размещения на цветной кнопке). */
  mono?: boolean;
}

/**
 * Логотип мессенджера MAX — фигура «O» с хвостиком речевого пузыря.
 * mono=false (по умолчанию): полноцветный значок со скруглённым квадратом
 *   и фиолетово-синим градиентом (для размещения на светлом фоне).
 * mono=true: белая монохромная фигура без фона (для цветной кнопки).
 */
const MaxIcon = ({ size = 26, className = '', mono = false }: MaxIconProps) => {
  const gid = 'max-grad';

  const shape = (color: string) => (
    <>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M32 13c-11.6 0-21 9.15-21 20.44 0 6.02 2.67 11.43 6.92 15.16.9.79 1.35 1.98 1.05 3.15l-1.02 3.98c-.3 1.15.86 2.12 1.95 1.63l5.02-2.26c.72-.32 1.53-.35 2.28-.13 1.53.44 3.15.68 4.8.68 11.6 0 21-9.15 21-20.44S43.6 13 32 13Zm0 30.2c-5.5 0-9.95-4.37-9.95-9.76 0-5.4 4.45-9.77 9.95-9.77s9.95 4.37 9.95 9.77c0 5.39-4.45 9.76-9.95 9.76Z"
        fill={color}
      />
      <circle cx="32" cy="33.44" r="6.4" fill={color} />
    </>
  );

  if (mono) {
    return (
      <svg
        width={size}
        height={size}
        viewBox="0 0 64 64"
        fill="none"
        className={className}
        aria-hidden="true"
      >
        {shape('currentColor')}
      </svg>
    );
  }

  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id={gid} x1="10" y1="6" x2="54" y2="58" gradientUnits="userSpaceOnUse">
          <stop offset="0" stopColor="#3D6DF5" />
          <stop offset="0.5" stopColor="#6A55F0" />
          <stop offset="1" stopColor="#A93BEE" />
        </linearGradient>
      </defs>
      <rect x="2" y="2" width="60" height="60" rx="17" fill={`url(#${gid})`} />
      {shape('#fff')}
    </svg>
  );
};

export default MaxIcon;
