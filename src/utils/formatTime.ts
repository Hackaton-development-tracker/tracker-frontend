export const formatTime = (time: number) => {
  const days = Math.floor(time / (24 * 3600));
  const hours = Math.floor((time % (24 * 3600)) / 3600);
  const minutes = Math.floor((time % 3600) / 60);
  const seconds = time % 60;

  const formattedHours = hours.toString().padStart(2, '0');
  const formattedMinutes = minutes.toString().padStart(2, '0');
  const formattedSeconds = seconds.toString().padStart(2, '0');

  if (days === 0) {
    return `${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
  }

  if (days > 1 && days < 5) {
    return `${days} дня`;
  } else if (days === 1) {
    return `${days} день`;
  }
  return `${days} дней`;
};
