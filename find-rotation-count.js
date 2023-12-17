function findRotationCount(arr) {
  function binarySearch(leftIdx, rightIdx) {
    while (leftIdx <= rightIdx) {
        const middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if (arr[middleIdx] < arr[middleIdx - 1]) {
            return mid;
        }
        if (arr[middleIdx] > arr[rightIdx]) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    return 0;
  }
  return binarySearch(0, arr.length - 1);
}


module.exports = findRotationCount