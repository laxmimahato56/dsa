function isPowerOfTwoBitwise(n) {
  if (n < 1) return false;
  return (n & (n - 1)) === 0;
}
// Big-O = O(1)

function isPowerOfTwo(n) {
  if (n < 1) return false;
  while (n > 1) {
    if (n % 2 !== 0) {
      return false;
    }
    n = n / 2;
  }
  return true;
}
// Big-O = O(logn)

// console.log(isPowerOfTwo(1)); // true (2^0)
// console.log(isPowerOfTwo(2)); // true (2^1)
// console.log(isPowerOfTwo(3)); // false
// console.log(isPowerOfTwo(4)); // true (2^2)
// console.log(isPowerOfTwo(5)); // false
// console.log(isPowerOfTwo(6)); // false
// console.log(isPowerOfTwo(8)); // true

console.log(isPowerOfTwoBitwise(1)); // true (2^0)
console.log(isPowerOfTwoBitwise(2)); // true (2^1)
console.log(isPowerOfTwoBitwise(3)); // false
console.log(isPowerOfTwoBitwise(4)); // true (2^2)
console.log(isPowerOfTwoBitwise(5)); // false
console.log(isPowerOfTwoBitwise(6)); // false
console.log(isPowerOfTwoBitwise(8)); // true
