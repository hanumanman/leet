export function largestNumber(num: number): number {
  const sortedOddDigits: string[] = num
    .toString()
    .split("")
    .filter((digit) => parseInt(digit) % 2 === 1)
    .sort((a, b) => parseInt(b) - parseInt(a));

  const sortedEvenDigits: string[] = num
    .toString()
    .split("")
    .filter((digit) => parseInt(digit) % 2 === 0)
    .sort((a, b) => parseInt(b) - parseInt(a));

  let largestNumber = "";
  num
    .toString()
    .split("")
    .forEach((digit) => {
      if (parseInt(digit) % 2 === 1) {
        largestNumber += sortedOddDigits.shift();
      } else {
        largestNumber += sortedEvenDigits.shift();
      }
    });
  return parseInt(largestNumber);
}
