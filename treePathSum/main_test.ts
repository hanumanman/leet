import { assertEquals } from "@std/assert/equals";
import { arrayToTreeNode, hasPathSum } from "./main.ts";

Deno.test({
  name: "Test tree path sum",
  fn(): void {
    const root = [5, 4, 8, 11, null, 13, 4, 7, 2, null, null, null, 1];
    const targetSum = 22;
    const treeNode = arrayToTreeNode(root);
    assertEquals(hasPathSum(treeNode, targetSum), true);
  },
});
