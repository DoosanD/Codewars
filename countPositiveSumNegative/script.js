// Given an array of integers.
// Return an array, where the first element is the count of positives numbers
// and the second element is sum of negative numbers. 0 is neither positive nor negative.
// If the input is an empty array or is null, return an empty array.
// Example : For input [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15], you should return [10, -65]

function countPositivesSumNegatives(input) {
  if (input == null || input == "") {
    // If input is nothing then return nothing
    let empty = [];
    return empty;
  } else if (input) {
    // If array is valid, filter negatives and then add them together
    getNegatives = input.filter((x) => x < 0).reduce((a, b) => a + b);
    // and filter positive numbers to see length
    getPositives = input.filter((x) => x > 0);
    // return result with length of positive numbers.
    return [getPositives.length, getNegatives];
  }
}

// Returns [10, -65]
console.log(
  countPositivesSumNegatives([
    1, 2, 3, 4, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14, -15,
  ])
);

// Returns [8, -50]
console.log(
  countPositivesSumNegatives([
    0, 2, 3, 0, 5, 6, 7, 8, 9, 10, -11, -12, -13, -14,
  ])
);
