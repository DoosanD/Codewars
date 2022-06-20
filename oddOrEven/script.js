// Create a function that takes an integer as an argument and returns "Even" for even numbers or "Odd" for odd numbers.

function even_or_odd(number) {
  return number % 2 == 0 ? "Even" : "Odd";
}

// "Even"
console.log(even_or_odd(2));

// "Odd"
console.log(even_or_odd(7));

// "Even"
console.log(even_or_odd(-42));

// "Odd"
console.log(even_or_odd(-7));

// "Even"
console.log(even_or_odd(0));
