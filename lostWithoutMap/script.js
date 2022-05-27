// Given an array of integers, return a new array with each value doubled.

// For example:
// [1, 2, 3] --> [2, 4, 6]

function maps(arr) {
  return (newArr = arr.map((x) => x * 2));
}

// Return [2, 4, 6]
console.log(maps([1, 2, 3]));

// Return [8, 2, 2, 2, 8]
console.log(maps([4, 1, 1, 1, 4]));

// Return [4, 4, 4, 4, 4, 4]
console.log(maps([2, 2, 2, 2, 2, 2]));
