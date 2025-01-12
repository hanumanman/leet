export function reorderSpaces(text: string): string {
  const words = text.trim().split(/\s+/);
  const spaces = text.match(/\s/g)?.length || 0;
  const space = words.length > 1 ? Math.floor(spaces / (words.length - 1)) : 0;

  text = words.join(" ".repeat(space));
  if (space > 0) {
    text += " ".repeat(spaces % (words.length - 1));
  }

  return text;
}
