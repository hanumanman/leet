import { assertEquals } from "@std/assert/equals";
import { findPoisonedDuration } from "./main.ts";

const timeSeries1 = [1, 4];
const duration1 = 2;
const explaination1 = `Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 4, Teemo attacks, and Ashe is poisoned for seconds 4 and 5.
Ashe is poisoned for seconds 1, 2, 4, and 5, which is 4 seconds in total.`;

Deno.test(function testTeemoAttac() {
  assertEquals(findPoisonedDuration(timeSeries1, duration1), 4, explaination1);
});

const timeSeries2 = [1, 2];
const duration2 = 2;
const explaination2 = `Teemo's attacks on Ashe go as follows:
- At second 1, Teemo attacks, and Ashe is poisoned for seconds 1 and 2.
- At second 2 however, Teemo attacks again and resets the poison timer. Ashe is poisoned for seconds 2 and 3.
Ashe is poisoned for seconds 1, 2, and 3, which is 3 seconds in total.`;

Deno.test(function testTeemoAttac() {
  assertEquals(findPoisonedDuration(timeSeries2, duration2), 3, explaination2);
});
