import { assertEquals } from "@std/assert/equals";
import { arrayToTreeNode, hasPathSum } from "./treePathSum.ts";

const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
const targetSum = 22;

Deno.test(function treeTest() {
  assertEquals(hasPathSum(arrayToTreeNode(root), targetSum), true);
});
