import { assertEquals } from "@std/assert/equals";
import { singleNumber } from "./main.ts";

Deno.test({
  name: "Test single number II",
  fn(): void {
    const nums = [2, 2, 3, 2];
    const result = 3;
    assertEquals(singleNumber(nums), result);
  },
});

Deno.test({
  name: "Test single number II",
  fn(): void {
    const nums = [0, 1, 0, 1, 0, 1, 99];
    const result = 99;
    assertEquals(singleNumber(nums), result);
  },
});
