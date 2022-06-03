// In this kata you will create a function that takes a list of non-negative integers
// and strings and returns a new list with the strings filtered out.

const filterList = (list) => {
  return list.filter(Number.isInteger);
};

// Returns [1,2]
console.log(filterList([1, 2, "a", "b"]));

// Returns [1,0,15]
console.log(filterList([1, "a", "b", 0, 15]));

// Returns [1,2,123]
console.log(filterList([1, 2, "aasf", "1", "123", 123]));
