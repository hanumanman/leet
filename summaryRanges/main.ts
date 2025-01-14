export function summaryRanges(nums: number[]): string[] {
  const output: string[] = [];
  let rangeStart: number = nums[0];

  for (let i = 0; i < nums.length; i++) {
    if (nums[i + 1] - nums[i] !== 1) {
      if (rangeStart === nums[i]) {
        output.push(`${rangeStart}`);
      } else {
        output.push(`${rangeStart}->${nums[i]}`);
      }
      rangeStart = nums[i + 1];
    }
  }
  return output;
}
