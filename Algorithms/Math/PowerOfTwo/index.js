// Power of Two
// Problem - Give a positive integer 'n', determine if the number is a power of 2 or not
// An integer is a power of two if there exists an integer 'x' such that 'n' === 2x
// isPowerOfTwo(1) = true (2°)
// isPowerOfTwo(2) = true (2¹)
// isPowerOfTwo 5) = false

function isPowerOfTwo(number) {
  if (number < 1) return false;

  const result = Math.log(number) / Math.log(2);

  return Number.isInteger(result);
}

function isPowerOfTwoBitWise(number) {
  if (number < 1) return false;
  return (n & (n - 1)) === 0;

  // (1) => (0001 & 0000) => 0000 === 0 => true
  // (2) => (0010 & 0001) => 0000 === 0 => true
  // (5) => (0101 & 0100) => 0100 === 0 => false
  // (6) => (0110 & 0101) => 0100 === 0 => false
  // (8) => (1000 & 0111) => 0000 === 0 => true
}

console.log(isPowerOfTwo(1));
console.log(isPowerOfTwo(2));
console.log(isPowerOfTwo(5));
console.log(isPowerOfTwo(6));
console.log(isPowerOfTwo(8));
