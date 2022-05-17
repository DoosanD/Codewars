function isIsogram(str) {
  //if empty return true.
  if (str.isEmpty) {
    return true;
  } else {
    // All lower case.
    str = str.toLowerCase();
  }
  //split string into individual characters.
  var array = str.split("");
  var sortedArr = array.slice().sort();

  for (var i = 0; i < array.length; i++) {
    //if duplicate is found return false.
    if (sortedArr[i + 1] == sortedArr[i]) {
      return false;
    }
  }
  //else return true
  return true;
}

// ---- true ----- //
console.log(isIsogram("Dermatoglyphics"));

//  -----  true ----- //
console.log(isIsogram("isogram"));

// ---- false ----- same chars may not be adjacent
console.log(isIsogram("aba"));

// ---- false ----- same chars may not be same case
console.log(isIsogram("moOse"));

// ---- false ------
console.log(isIsogram("isIsogram"));

//  ---- true ----- an empty string is a valid isogram
console.log(isIsogram(""));
