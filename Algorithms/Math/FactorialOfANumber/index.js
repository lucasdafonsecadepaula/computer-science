// Factorial of a number
// Problem - Give an integer 'n', find the factorial of that integer
// In mathematics, the factorial of a non-negative integer 'n', denoted n!, is the product of all
// positive integers less than or equal to 'n'.
// Factorial of zero is 1.
// factorial(4) = 4*3*2*1 = 24
// factorial(5) = 5*4*3*2*1= = 120

function factorialOfANumber(number) {
  if (number < 0) return null;

  let result = 1;

  for (let i = 1; i < number + 1; i++) {
    result = result * i;
  }

  return result;
}

console.log(factorialOfANumber(0));
console.log(factorialOfANumber(4));
console.log(factorialOfANumber(5));
