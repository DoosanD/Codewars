// Complete the function that takes two integers (a, b, where a < b)
// and return an array of all integers between the input parameters, including them.

function between(a, b) {
  let arr = [];
  // While a is less or equals to b, put that number into an empty array
  // continue counting untill equals to b
  while (a <= b) {
    arr.push(a);
    a++;
  }
  return arr;
}

// Returns [1, 2, 3, 4]
console.log(between(1, 4));

// Returns [-2, -1, 0, 1, 2]
console.log(between(-2, 2));
