// binary search only works on sorted array
// can use linear search
// or sort the array first to use binary search
function binarySearch(arr, target) {
  let leftIndex = 0;
  let rightIndex = arr.length - 1;

  while (leftIndex <= rightIndex) {
    let middleIndex = Math.floor((leftIndex + rightIndex) / 2);
    if (arr[middleIndex] === target) return middleIndex;
    if (target < arr[middleIndex]) {
      rightIndex = middleIndex - 1;
    } else {
      leftIndex = middleIndex + 1;
    }
  }

  return -1;
}

console.log(binarySearch([-5, 2, 4, 6, 10], 6)); // 3
console.log(binarySearch([-5, 2, 4, 6, 10], 4)); // 2
console.log(binarySearch([-5, 2, 4, 6, 10], 20)); // -1
console.log(binarySearch([-5, 2, 4, 6, 10], 10)); // 4

// Big-O = O(logn)
