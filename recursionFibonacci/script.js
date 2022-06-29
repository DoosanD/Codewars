// ##2 - Fibonacci number

// In mathematical terms, the sequence f(n) of fibonacci numbers is defined by the recurrence relation
// f(n) = f(n-1) + f(n-2)
// with seed values
// f(1) = 1 and f(2) = 1

// #Your task
// You have to create the function fibonacci that receives n and returns f(n). You have to use recursion.

function fibonacci(num) {
  if (num < 2) {
    return num;
  } else {
    return fibonacci(num - 1) + fibonacci(num - 2);
  }
}

console.log(fibonacci(3), 2);

console.log(fibonacci(4), 3);

console.log(fibonacci(5), 5);
