import { assertEquals } from "@std/assert/equals";
import { singleNumber } from "./main.ts";

Deno.test({
  name: "Test single number",
  fn(): void {
    const nums = [4, 1, 2, 1, 2];
    assertEquals(singleNumber(nums), 4);
  },
});
