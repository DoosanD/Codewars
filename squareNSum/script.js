// Complete the square sum function so that it squares each number passed into it and then sums the results together.
// For example, for [1, 2, 2] it should return 9 because 1^2 + 2^2 + 2^2 = 9

function squareSum(numbers) {
  // if empty return 0
  if (numbers == "") {
    return 0;
  } else {
    // return new array with squared elements with map and then add result with reduce
    return numbers.map((x) => x ** 2).reduce((a, b) => a + b);
  }
}

// Returns 9
console.log(squareSum([1, 2, 2]));

// Returns 50
console.log(squareSum([0, 3, 4, 5]));

// Returns 0
console.log(squareSum([]));
