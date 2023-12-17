function findRotatedIndex(arr, num) {
    function binarySearch(leftIdx, rightIdx) {
        while (leftIdx <= rightIdx) {
            const middleIdx = Math.floor((leftIdx + rightIdx) / 2);
            const midleVal = arr[middleIdx];

            if (midleVal === num) {
                return middleIdx;
            }

            const isLeftPartSorted = arr[leftIdx] <= midleVal;
            const isNumInLeftPart = arr[leftIdx] <= num && num < midleVal;
            const isNumInRightPart = !(isLeftPartSorted && isNumInLeftPart);

            if ((isLeftPartSorted && isNumInLeftPart) || (!isLeftPartSorted && isNumInRightPart)) {
                rightIdx = middleIdx - 1;
            } else {
                leftIdx = middleIdx + 1;
            }
        }
        return -1;
    }

    return binarySearch(0, arr.length - 1);
}


module.exports = findRotatedIndex