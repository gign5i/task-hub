export const formatMinutes = (incomingValue: number): string => {
  const hours = Math.floor((incomingValue / 60) % 60);
  const minutes = incomingValue % 60;
  return `${hours}h ${minutes}m`;
};
