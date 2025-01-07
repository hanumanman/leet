export function stringMatching(words: string[]): string[] {
  return words.filter((word) =>
    words.some((w) => w !== word && w.includes(word)),
  );
}
