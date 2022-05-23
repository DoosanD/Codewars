function invert(array) {
  // Iterate over an array and multiply with negative number to invert values.
  return array.map((x) => x * -1);
}

// Returns [-1, -2, -3, -4, -5]
console.log(invert([1, 2, 3, 4, 5]));

// Returns [-1, 2, -3, 4, -5]
console.log(invert([1, -2, 3, -4, 5]));

// Returns []
console.log(invert([]));
