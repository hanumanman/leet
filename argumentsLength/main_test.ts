import { assertEquals } from "@std/assert/equals";
import { argumentsLength } from "./main.ts";

Deno.test("Test return length of argument passed", () => {
  assertEquals(argumentsLength(1, 2, 3), 3);
  assertEquals(argumentsLength(1, 2, 3, 4, 5, 6, 7, 8, 9, 10), 10);
  assertEquals(argumentsLength(true, false, null), 3);
  assertEquals(argumentsLength("a", "b", "c"), 3);
  assertEquals(argumentsLength([1, 2, 3], [4, 5, 6], [7, 8, 9]), 3);
  assertEquals(
    argumentsLength(
      { a: 1, b: 2, c: 3 },
      { d: 4, e: 5, f: 6 },
      { g: 7, h: 8, i: 9 },
    ),
    3,
  );
});
