// It's bonus time in the big city! The fatcats are rubbing their paws in anticipation... but who is going to make the most money?
// Build a function that takes in two arguments (salary, bonus). Salary will be an integer, and bonus a boolean.
// If bonus is true, the salary should be multiplied by 10. If bonus is false, the fatcat did not make enough money and must receive only his stated salary.
// Return the total figure the individual will receive as a string prefixed with "£"

function bonusTime(salary, bonus) {
  if (bonus) {
    let result = salary * 10;
    return `£${result}`;
  } else {
    return `£${salary}`;
  }
}

console.log(bonusTime(10000, true), "£100000");
console.log(bonusTime(25000, true), "£250000");
console.log(bonusTime(10000, false), "£10000");
console.log(bonusTime(60000, false), "£60000");
