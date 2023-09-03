/* You will be given an array of events, which are represented by strings. The strings are dates in HH:MM:SS format.

It is known that all events are recorded in chronological order and two events can't occur in the same second.

Return the minimum number of days during which the log is written.

Example:

Input -> ["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]
Output -> 1

Input -> ["12:12:12"]
Output -> 1

Input -> ["12:00:00", "23:59:59", "00:00:00"]
Output -> 2

Input -> []
Output -> 0
*/

function checkLogs(log) {
  let prev = "99:99:99";
  let days = 0;
  log.forEach((t) => {
    if (t <= prev) days++;
    prev = t;
  });
  return days;
}

console.log(checkLogs(["12:12:12"]), 1);
console.log(
  checkLogs(["00:00:00", "00:01:11", "02:15:59", "23:59:58", "23:59:59"]),
  1
);
console.log(checkLogs(["12:00:00", "23:59:59", "00:00:00"]), 2);
console.log(
  checkLogs(["00:00:00", "00:00:00", "00:00:00", "00:00:00", "00:00:00"]),
  5
);
console.log(
  checkLogs([
    "10:10:10",
    "11:11:11",
    "12:12:12",
    "13:13:13",
    "14:14:14",
    "15:15:15",
    "16:16:16",
  ]),
  1
);
console.log(checkLogs(["23:59:59", "00:00:00"]), 2);
console.log(checkLogs(["00:00:00", "00:00:01", "00:00:01"]), 2);
console.log(checkLogs([]), 0);
