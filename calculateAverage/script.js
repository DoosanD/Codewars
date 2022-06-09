// Write a function which calculates the average of the numbers in a given list.

// Note: Empty arrays should return 0.

function findAverage(arr) {
  if (arr == "") {
    return 0;
  } else {
    //We can limiit decimal numbers with .toFixed(x-number) or Math.round()
    return arr.reduce(
      (accumulator, current) => accumulator + current / arr.length
    );
  }
}

// Return 1.66...
console.log(findAverage([1, 1, 1]));

// Return 2.66...
console.log(findAverage([1, 2, 3]));

// Return 3.25
console.log(findAverage([1, 2, 3, 4]));
