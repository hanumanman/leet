import { assertEquals } from "@std/assert/equals";
import { freqAlphabets, freqAlphabets2 } from "./main.ts";

Deno.test(function testDecrypt() {
  assertEquals(freqAlphabets("10#11#12"), "jkab");
  assertEquals(
    freqAlphabets2("10#11#12#13#14#15#16#17#18#19#20#21#22#23#24#25#26#"),
    "jklmnopqrstuvwxyz"
  );
});
