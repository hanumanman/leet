// I have no idea how this works
// TODO: Understand how this works
export function singleNumber(nums: number[]): number {
  let ones = 0,
    twos = 0;
  for (let i = 0; i < nums.length; i++) {
    ones = (ones ^ nums[i]) & ~twos;
    twos = (twos ^ nums[i]) & ~ones;
  }
  return ones;
}
