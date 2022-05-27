// If you can't sleep, just count sheep!!

// Given a non-negative integer, 3 for example,
// return a string with a murmur: "1 sheep...2 sheep...3 sheep...".
// Input will always be valid i.e. no negative integers.

const countSheep = function (num) {
  let string = "";
  // If zero was input return empty string
  if (num == 0) {
    return "";
  } else {
    // For every unit return index with string "sheep...""
    for (let i = 0; i < num; i++) {
      string += `${i + 1} sheep...`;
    }
    return string;
  }
};
