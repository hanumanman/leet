import { assertEquals } from "@std/assert/equals";
import { largestNumber } from "./main.ts";

Deno.test("Test largest number", () => {
  assertEquals(
    largestNumber(1234),
    3412,
    `Swap the digit 3 with the digit 1, this results in the number 3214.
Swap the digit 2 with the digit 4, this results in the number 3412.
Note that there may be other sequences of swaps but it can be shown that 3412 is the largest possible number.
Also note that we may not swap the digit 4 with the digit 1 since they are of different parities.`,
  );
  assertEquals(
    largestNumber(65875),
    87655,
    `Swap the digit 8 with the digit 6, this results in the number 85675.
Swap the first digit 5 with the digit 7, this results in the number 87655.
Note that there may be other sequences of swaps but it can be shown that 87655 is the largest possible number.`,
  );
});
