function findFloor(arr, target) {
  let leftIdx = 0;
  let rightIdx = arr.length - 1;
  let floor = -1;

  while (leftIdx <= rightIdx) {
    const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
    let middleVal = arr[middleIdx];

    if (middleVal === target) {
        return middleVal;
    } else if (middleVal < target) {
        floor = middleVal;
         leftIdx = middleIdx + 1;
    } else {
        rightIdx = middleIdx - 1;
    }
  }
  return floor;
}

module.exports = findFloor