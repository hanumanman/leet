import { assertEquals } from "@std/assert/equals";
import { stringMatching } from "./main.ts";

Deno.test(function testMatchString1() {
  const words = ["mass", "as", "hero", "superhero"];
  const result = ["as", "hero"];
  const explanation = ` "as" is substring of "mass" and "hero" is substring of "superhero". ["hero","as"] is also a valid answer.`;
  assertEquals(stringMatching(words), result, explanation);
});

Deno.test(function testMatchString2() {
  const words = ["blue", "green", "bu"];
  const result: string[] = [];
  const explanation = `No string of words is substring of another string.`;
  assertEquals(stringMatching(words), result, explanation);
});
