// Create a function which answers the question "Are you playing banjo?".
// If your name starts with the letter "R" or lower case "r", you are playing banjo!
// The function takes a name as its only argument, and returns one of the following strings:
// name + " plays banjo"
// name + " does not play banjo"

function areYouPlayingBanjo(name) {
  // Check for first letter of the name and then make new string to output
  if (name.startsWith("R") || name.startsWith("r")) {
    name = name + " plays banjo";
  } else {
    name = name + " does not play banjo";
  }
  return name;
}

// Return "Dusan does not play banjo"
console.log(areYouPlayingBanjo("Dusan"));

// Return "Paul does not play banjo"
console.log(areYouPlayingBanjo("Raul"));

// Return "Ringo plays banjo"
console.log(areYouPlayingBanjo("Rick"));
