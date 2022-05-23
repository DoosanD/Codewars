function solution(str, ending) {
  // If string (str) ends with this (ending), then return boolean value.
  if (str.endsWith(ending)) {
    return true;
  } else {
    return false;
  }
}

// returns true
console.log(solution("abc", "bc"));

// returns false
console.log(solution("abc", "d"));
