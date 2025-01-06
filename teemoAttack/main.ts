export function findPoisonedDuration(
  timeSeries: number[],
  duration: number,
): number {
  let total = 0;
  for (let i = 1; i < timeSeries.length; i++) {
    const timeDiff = timeSeries[i] - timeSeries[i - 1];
    const poisonedDuration = Math.min(duration, timeDiff);
    total += poisonedDuration;
  }
  return total + duration;
}
