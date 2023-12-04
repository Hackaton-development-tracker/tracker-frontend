import { format, intervalToDuration } from 'date-fns';

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
