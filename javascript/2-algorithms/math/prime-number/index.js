// Prime Number
// Problem - Give a natural number 'n', determine if the number is prime or not
// A prime number is a natural number greater than 1 that is not a product of two smaller natural
// numbers.
// isPrime(5) = true (1*5 or 5*1)
// isPrime(4) = false (1*4 or 2*2 or 4*1)

function isPrimeNumber(number) {
  if (number < 2) return false;

  for (let i = 2; i <= Math.sqrt(number); i++) {
    if (number % i === 0) {
      return false;
    }
  }

  return true;
}

console.log(isPrimeNumber(5));
console.log(isPrimeNumber(4));
console.log(isPrimeNumber(13));
