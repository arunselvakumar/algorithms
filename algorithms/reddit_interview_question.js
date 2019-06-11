function getMedian(sortedLeftArray, sortedRightArray) {
    const result = [];
    while (sortedLeftArray.length && sortedRightArray.length) {
        if (sortedLeftArray[0] < sortedRightArray[0]) {
            result.push(sortedLeftArray.shift());
        } else {
            result.push(sortedRightArray.shift());
        }
    }

    while (sortedLeftArray.length) {
        result.push(sortedLeftArray.shift());
    }

    while (sortedRightArray.length) {
        result.push(sortedRightArray.shift());
    }

    const middleIndex = Math.floor(result.length / 2);
    return result[middleIndex];
}

const sortedLeftArray = [2, 5, 7, 20, 30];
const sortedRightArray = [6, 89, 90, 95];

console.log(getMedian(sortedLeftArray, sortedRightArray));