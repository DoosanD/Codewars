function numberToString(num) {
  // Return a string of the number here!
  return num.toString();
}

// 1001 should return "1001"
console.log((x = numberToString(1001)));
console.log(typeof x);

// Return a number of the string now!
const stringToNumber = function (str) {
  return Number(str);
};

// 1001 should return as a number now
console.log((x = stringToNumber(x)));
console.log(typeof x);
