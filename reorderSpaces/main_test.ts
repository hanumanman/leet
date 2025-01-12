import { assertEquals } from "@std/assert/equals";
import { reorderSpaces } from "./main.ts";

Deno.test({
  name: "Test reorder spaces",
  fn(): void {
    const text = "  this   is  a sentence ";
    const expected = "this   is   a   sentence";
    assertEquals(reorderSpaces(text), expected);
  },
});
