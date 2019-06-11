function mergeSort(unSortedArray) {
    if (unSortedArray.length < 2) {
        return unSortedArray;
    }

    const arrayLength = unSortedArray.length;
    const middle = Math.floor(arrayLength / 2);
    const left = unSortedArray.slice(0, middle);
    const right = unSortedArray.slice(middle, arrayLength);

    const sortedLeftArray = mergeSort(left);
    const sortedRightArray = mergeSort(right);

    return merge(sortedLeftArray, sortedRightArray);
}

function merge(sortedLeftArray, sortedRightArray) {
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

    return result;
}

const unSortedArray = [10, 2, 90, 4, 5, 1, 0, 78];
console.log(mergeSort(unSortedArray));