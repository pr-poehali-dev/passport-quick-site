interface MaxIconProps {
  size?: number;
  className?: string;
}

/**
 * Значок мессенджера MAX (текстовый логотип на прозрачном фоне).
 * Используется на цветной подложке кнопки.
 */
const MaxIcon = ({ size = 26, className = '' }: MaxIconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 32 32"
    fill="none"
    className={className}
    aria-hidden="true"
  >
    <path
      d="M6 24V9.5c0-.6.75-.86 1.11-.38L14 18l6.89-8.88c.36-.48 1.11-.22 1.11.38V24"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
      fill="none"
    />
    <path
      d="M22 15l4.2 9M26 15l-4 9"
      stroke="currentColor"
      strokeWidth="3"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </svg>
);

export default MaxIcon;
