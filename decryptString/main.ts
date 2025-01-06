export function freqAlphabets(s: string): string {
  let ans = "";
  for (let i = s.length - 1; i >= 0; i--) {
    let code = s.charAt(i);
    if (code === "#") {
      code = s.charAt(i - 2) + s.charAt(i - 1);
      i -= 2;
    }
    const num = parseInt(code);
    const val = String.fromCharCode(num + 96);
    ans = val + ans;
  }
  return ans;
}

/**
 * This version is probably faster (?) because direct indexing is faster than charAt
 * Also using direct indexing instead of calculating "code" variable every iteration
 */
export function freqAlphabets2(s: string): string {
  let ans = "";
  let i = s.length - 1;
  while (i >= 0) {
    if (s[i] !== "#") {
      ans = String.fromCharCode(parseInt(s[i]) + 96) + ans;
      i--;
    } else {
      ans = String.fromCharCode(parseInt(s[i - 2] + s[i - 1]) + 96) + ans;
      i -= 3;
    }
  }
  return ans;
}
