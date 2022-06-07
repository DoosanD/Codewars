// Write a function that returns a string in which firstname is swapped with last name.

// Example(Input --> Output)

// "john McClane" --> "McClane john"

function nameShuffler(str) {
  // This is without .reverse() with addition instead of .join()
  format = str.split(" ");
  return format[1] + " " + format[0];
}

// Returns McClane John
console.log(nameShuffler("john McClane"));

// Returns Bond James
console.log(nameShuffler("James Bond"));
