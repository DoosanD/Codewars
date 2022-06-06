// Middle Earth is about to go to war. The forces of good will have many battles with the forces of evil.
// Different races will certainly be involved. Each race has a certain worth when battling against others.
// On the side of good we have the following races, with their associated worth:

// Hobbits: 1
// Men: 2
// Elves: 3
// Dwarves: 3
// Eagles: 4
// Wizards: 10

// On the side of evil we have:

// Orcs: 1
// Men: 2
// Wargs: 2
// Goblins: 2
// Uruk Hai: 3
// Trolls: 5
// Wizards: 10

// Input:
// The function will be given two parameters. Each parameter will be a string of multiple integers separated by a single space.
// Each string will contain the count of each race on the side of good and evil.
// The first parameter will contain the count of each race on the side of good in the following order:
//     Hobbits, Men, Elves, Dwarves, Eagles, Wizards.
// The second parameter will contain the count of each race on the side of evil in the following order:
//     Orcs, Men, Wargs, Goblins, Uruk Hai, Trolls, Wizards.
// All values are non-negative integers. The resulting sum of the worth for each side will not exceed the limit of a 32-bit integer.

// Output:
// Return "Battle Result: Good triumphs over Evil" if good wins,
// "Battle Result: Evil eradicates all trace of Good" if evil wins,
// or "Battle Result: No victor on this battle field" if it ends in a tie.

function goodVsEvil(good, evil) {
  let goodArr = good.split(" "),
    evilArr = evil.split(" "),
    goodPoints =
      goodArr[0] * 1 +
      goodArr[1] * 2 +
      goodArr[2] * 3 +
      goodArr[3] * 3 +
      goodArr[4] * 4 +
      goodArr[5] * 10,
    evilPoints =
      evilArr[0] * 1 +
      evilArr[1] * 2 +
      evilArr[2] * 2 +
      evilArr[3] * 2 +
      evilArr[4] * 3 +
      evilArr[5] * 5 +
      evilArr[6] * 10;
  if (goodPoints === evilPoints)
    return "Battle Result: No victor on this battle field";
  return goodPoints < evilPoints
    ? "Battle Result: Evil eradicates all trace of Good"
    : "Battle Result: Good triumphs over Evil";
}

//  Returns : 'Battle Result: Evil eradicates all trace of Good'
console.log(goodVsEvil("1 1 1 1 1 1", "1 1 1 1 1 1 1"));

//  Returns : 'Battle Result: Good triumphs over Evil'
console.log(goodVsEvil("0 0 0 0 0 10", "0 1 1 1 1 0 0"));

//  Returns : 'Battle Result: No victor on this battle field'
console.log(goodVsEvil("1 0 0 0 0 0", "1 0 0 0 0 0 0"));
