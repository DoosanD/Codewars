// Welcome. In this kata, you are asked to square every digit of a number and concatenate them.

// For example, if we run 9119 through the function, 811181 will come out, because 92 is 81 and 12 is 1.

// Note: The function accepts an integer and returns an integer

function squareDigits(num) {
  // Everything at the end should be number, first make it into a string
  // then split string, map every number to the power of two and lastly join then back into one string
  return Number(
    num
      .toString()
      .split("")
      .map((x) => x ** 2)
      .join("")
  );
}

// Returns 9414
console.log(squareDigits(3212));

// Returns 4114
console.log(squareDigits(2112));

// Returns 0
console.log(squareDigits(0));
