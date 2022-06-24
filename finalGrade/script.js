// 100, if a grade for the exam is more than 90 or if a number of completed projects more than 10.
// 90, if a grade for the exam is more than 75 and if a number of completed projects is minimum 5.
// 75, if a grade for the exam is more than 50 and if a number of completed projects is minimum 2.
// 0, in other cases

function finalGrade(exam, projects) {
  if (exam > 90 || projects > 10) {
    return 100;
  } else if (exam > 75 && projects > 4) {
    return 90;
  } else if (exam > 50 && projects > 1) {
    return 75;
  } else {
    return 0;
  }
}

// Return 100
console.log(finalGrade(100, 12));

// Return 90
console.log(finalGrade(85, 5));
