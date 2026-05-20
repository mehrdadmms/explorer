/**
 * Group items in an array by the value returned from `keyFn`.
 * Preserves insertion order within each bucket.
 */
export function groupBy<T, K extends string | number>(
  items: readonly T[],
  keyFn: (item: T) => K
): Record<K, T[]> {
  const result = {} as Record<K, T[]>;
  for (const item of items) {
    const key = keyFn(item);
    if (!result[key]) {
      result[key] = [];
    }
    result[key].push(item);
  }
  return result;
}

/**
 * Split an array into two arrays based on a predicate.
 * Returns `[matching, notMatching]`.
 */
export function partition<T>(
  items: readonly T[],
  predicate: (item: T) => boolean
): [T[], T[]] {
  const matching: T[] = [];
  const notMatching: T[] = [];
  for (const item of items) {
    if (predicate(item)) {
      matching.push(item);
    } else {
      notMatching.push(item);
    }
  }
  return [matching, notMatching];
}

/**
 * Return a new array with duplicates removed, preserving first occurrence.
 * Uses `===` equality by default; pass `keyFn` for object equality.
 */
export function unique<T>(
  items: readonly T[],
  keyFn?: (item: T) => unknown
): T[] {
  if (!keyFn) {
    return Array.from(new Set(items));
  }
  const seen = new Set<unknown>();
  const result: T[] = [];
  for (const item of items) {
    const key = keyFn(item);
    if (!seen.has(key)) {
      seen.add(key);
      result.push(item);
    }
  }
  return result;
}

/**
 * Chunk an array into sub-arrays of at most `size` items.
 */
export function chunk<T>(items: readonly T[], size: number): T[][] {
  if (size <= 0) {
    throw new Error("chunk size must be > 0");
  }
  const result: T[][] = [];
  for (let i = 0; i < items.length; i += size) {
    result.push(items.slice(i, i + size));
  }
  return result;
}
