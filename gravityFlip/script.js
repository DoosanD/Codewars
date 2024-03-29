// Given the initial configuration of the cubes in the box, find out how many cubes are in each of the n columns after Bob switches the gravity.

// Examples (input -> output:
// * 'R', [3, 2, 1, 2]      ->  [1, 2, 2, 3]
// * 'L', [1, 4, 5, 3, 5 ]  ->  [5, 5, 4, 3, 1]

const flip = (d, a) => {
  if (d == "R") {
    return a.sort((x, y) => x - y);
  } else {
    return a.sort((x, y) => y - x);
  }
};

console.log(flip("R", [3, 2, 1, 2]), [1, 2, 2, 3]);
console.log(flip("L", [1, 4, 5, 3, 5]), [5, 5, 4, 3, 1]);
