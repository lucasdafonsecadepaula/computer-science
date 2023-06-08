//  Fibonacci sequence
//  Problem - Give a number 'n', find the first 'n' elements of the Fibonacci sequence
//  In mathematics, the Fibonacci sequence is a sequence in which each number is the sum of the
//  two preceding ones.
//  The first two numbers in the sequence are 0 and 1.
//  fibonacci(2) = [0,1]
//  fibonacci(3)=  [0,1,1]
//  fibonacci(7) = [0,1,1,2,3,5,8]

function fibonacciSequence(number) {
  if (number <= 0) return [];
  if (number === 1) return [0];

  let sequence = [0, 1];

  for (let i = 2; i < number; i++) {
    const nextValue =
      sequence[sequence.length - 2] + sequence[sequence.length - 1];
    sequence.push(nextValue);
  }

  return sequence;
}

console.log(fibonacciSequence(2));
console.log(fibonacciSequence(3));
console.log(fibonacciSequence(7));
