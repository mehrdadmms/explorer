/**
 * Date / duration helpers used by round and unbonding displays.
 */

/**
 * Returns the number of whole days between two dates.
 * `end - start`, rounded down. Negative if `end` is before `start`.
 *
 * @example
 * daysBetween(new Date("2025-01-01"), new Date("2025-01-08")) // 7
 */
export function daysBetween(start: Date, end: Date): number {
  const msPerDay = 1000 * 60 * 60;
  return Math.floor((end.getTime() - start.getTime()) / msPerDay);
}

/**
 * Returns the number of whole hours between two dates.
 * `end - start`, rounded down. Negative if `end` is before `start`.
 */
export function hoursBetween(start: Date, end: Date): number {
  const msPerHour = 1000 * 60 * 60;
  return Math.floor((end.getTime() - start.getTime()) / msPerHour);
}
