function sortedFrequency(arr, target) {
   const first = binarySearch(arr, target, true);

   if (first === -1) {
    return -1;
   }

   const last = binarySearch(arr, target, false);

   return last - first + 1;
}

function binarySearch(arr, target, findFirst) {
    let leftIdx = 0;
    let rightIdx = arr.length - 1;
    let result = -1;

    while (leftIdx <= rightIdx) {
        let middleIdx = Math.floor((leftIdx + rightIdx) / 2);

        if(arr[middleIdx] === target) {
            result = middleIdx;
            if (findFirst) {
                rightIdx = middleIdx - 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        } else if (arr[middleIdx] < target) {
            leftIdx = middleIdx + 1;
        } else {
            rightIdx = middleIdx - 1;
        }
    }
    return result;
}

module.exports = sortedFrequency