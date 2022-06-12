// Given an array of integers, remove the smallest value.
// Do not mutate the original array/list. If there are multiple elements with the same value,
// remove the one with a lower index. If you get an empty array/list, return an empty array/list.
// Don't change the order of the elements that are left.

function removeSmallest(arr) {
  arr = arr.slice(); //copy the array
  arr.splice(arr.indexOf(Math.min.apply(null, arr)), 1);
  return arr;
}

// Returns
console.log(
  removeSmallest([1, 2, 3, 4, 5]),
  [2, 3, 4, 5],
  "Wrong result for [1, 2, 3, 4, 5]"
);
// Returns
console.log(
  removeSmallest([5, 3, 2, 1, 4]),
  [5, 3, 2, 4],
  "Wrong result for [5, 3, 2, 1, 4]"
);
// Returns
console.log(
  removeSmallest([2, 2, 1, 2, 1]),
  [2, 2, 2, 1],
  "Wrong result for [2, 2, 1, 2, 1]"
);
// Returns
console.log(removeSmallest([]), [], "Wrong result for []");

// NEEDS UPDATE // explenations and returns info update
