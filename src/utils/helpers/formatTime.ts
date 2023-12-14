import ruLocale from 'date-fns/locale/ru';
import { format, parseISO, intervalToDuration } from 'date-fns';

export const formatTime = (time: number) => {
  const duration = intervalToDuration({ start: 0, end: time * 1000 });

  if (duration.days === undefined || duration.days === 0) {
    return format(new Date(time * 1000), 'HH:mm:ss');
  }

  const days = Math.floor(duration.days);

  if (days > 1 && days < 5) {
    return `${days} дня`;
  } else if (days === 1) {
    return `${days} день`;
  }
  return `${days} дней`;
};

export function formattedDate(date: string): string {
  return format(parseISO(date), 'dd MMMM yyyy', {
    locale: ruLocale,
  });
}

export function hoursToDaysOrMonths(hours: number): string {
  const hoursInDay = 1.75;
  const days = Math.round(hours / hoursInDay);
  const averageDaysInMonth = 30;

  const months = hours / (hoursInDay * averageDaysInMonth);

  if (days > 1 && days < 5) {
    return `${days} дня`;
  } else if (days === 1) {
    return `${days} день`;
  }

  if (months > 1 && months < 5) {
    return `${months} месяца`;
  } else if (months === 1) {
    return `${months} месяц`;
  }

  return months < 1 ? `${Math.round(days)} дней (${hours} часов)` : `${months} месяцев`;
}
