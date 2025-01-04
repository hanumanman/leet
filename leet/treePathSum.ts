class TreeNode {
  val: number;
  left: TreeNode | null;
  right: TreeNode | null;
  constructor(val?: number, left?: TreeNode | null, right?: TreeNode | null) {
    this.val = val === undefined ? 0 : val;
    this.left = left === undefined ? null : left;
    this.right = right === undefined ? null : right;
  }
}

export function hasPathSum(root: TreeNode | null, targetSum: number): boolean {
  if (!root) return false;

  // If we reach a leaf node, check if remaining sum equals node value
  if (!root.left && !root.right && root.val === targetSum) return true;

  return (
    hasPathSum(root.left, targetSum - root.val) ||
    hasPathSum(root.right, targetSum - root.val)
  );
}

export function arrayToTreeNode(arr: (number | null)[]): TreeNode | null {
  if (!arr.length) return null;
  const root = new TreeNode(arr[0]!);
  const queue: (TreeNode | null)[] = [root];
  let i = 1;
  while (i < arr.length) {
    const current = queue.shift();
    if (current) {
      if (arr[i] !== null) {
        current.left = new TreeNode(arr[i]!);
        queue.push(current.left);
      }
      i++;
      if (i < arr.length && arr[i] !== null) {
        current.right = new TreeNode(arr[i]!);
        queue.push(current.right);
      }
      i++;
    }
  }
  return root;
}
