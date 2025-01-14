import { assertEquals } from "@std/assert/equals";
import { isUgly } from "./main.ts";

Deno.test("Test if number is ugly", () => {
  assertEquals(isUgly(1), true, "1 has no prime factors");
  assertEquals(isUgly(6), true, "6 = 2 * 3");
  assertEquals(
    isUgly(14),
    false,
    "14 is not ugly since it includes a prime factor 7",
  );
  assertEquals(
    isUgly(15),
    true,
    "15 is ugly since it includes a prime factor 5",
  );
  assertEquals(
    isUgly(21),
    false,
    "21 is not ugly since it includes a prime factor 3",
  );
});
