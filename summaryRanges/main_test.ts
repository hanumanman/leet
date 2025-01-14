import { assertEquals } from "@std/assert/equals";
import { summaryRanges } from "./main.ts";

Deno.test("Test summary ranges", () => {
  assertEquals(summaryRanges([0, 1, 2, 4, 5, 7]), ["0->2", "4->5", "7"]);
  assertEquals(summaryRanges([0, 2, 3, 4, 6, 8, 9]), [
    "0",
    "2->4",
    "6",
    "8->9",
  ]);
  assertEquals(summaryRanges([0, 1, 2, 4, 5, 7, 8, 9]), [
    "0->2",
    "4->5",
    "7->9",
  ]);
});
