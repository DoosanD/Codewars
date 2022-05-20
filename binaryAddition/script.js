function addBinary(a, b) {
  return Number(a + b).toString(2);
}

// 1, 1 --> "10" (1 + 1 = 2 in decimal or 10 in binary)
console.log(addBinary(1, 1));

// 5, 9 --> "1110" (5 + 9 = 14 in decimal or 1110 in binary)
console.log(addBinary(5, 9));
