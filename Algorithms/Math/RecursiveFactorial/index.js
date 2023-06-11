// Recursive factorial of a number
// Problem - Give an integer 'n', find the factorial of that integer
// The factorial of a non-negative integer 'n', denoted n!, is the product of all positive integers less
// than or equal to 'n'.
// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1 = 120

function recursiveFactorial(number) {
  if (number < 2) return 1;
  return number * factorial(number - 1);
}

console.log(recursiveFactorial(0));
console.log(recursiveFactorial(4));
console.log(recursiveFactorial(5));
