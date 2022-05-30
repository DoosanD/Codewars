// Complete the method that takes a boolean value
// and return a "Yes" string for true, or a "No" string for false.

function boolToWord(bool) {
  // Conditional (ternary) operator
  // condition ? If True do this : If False do this
  return bool ? "Yes" : "No";
}

// Returns "Yes"
console.log(boolToWord(true));

// Returns "No"
console.log(boolToWord(false));
