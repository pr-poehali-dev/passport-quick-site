const MONTHS: Record<string, string> = {
  'января': '01',
  'февраля': '02',
  'марта': '03',
  'апреля': '04',
  'мая': '05',
  'июня': '06',
  'июля': '07',
  'августа': '08',
  'сентября': '09',
  'октября': '10',
  'ноября': '11',
  'декабря': '12',
};

/**
 * Преобразует дату вида "20 июня 2026" в ISO-формат "2026-06-20"
 * для использования в структурированных данных (datePublished и т.п.).
 * Возвращает пустую строку, если формат не распознан.
 */
export const parseRussianDateToISO = (dateStr: string): string => {
  const match = dateStr.match(/(\d{1,2})\s+([а-яё]+)\s+(\d{4})/i);
  if (!match) return '';
  const [, day, monthName, year] = match;
  const month = MONTHS[monthName.toLowerCase()] ?? '01';
  return `${year}-${month}-${day.padStart(2, '0')}`;
};
