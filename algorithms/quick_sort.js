function quickSort(unSortedArray) {
    if(unSortedArray.length < 2) {
        return unSortedArray;
    }

    const pivot = unSortedArray[unSortedArray.length - 1];
    const leftArray = [];
    const rightArray = [];

    for(let i = 0; i < unSortedArray.length - 1; i++) {
        if(unSortedArray[i] < pivot) {
            leftArray.push(unSortedArray[i]);
        } else {
            rightArray.push(unSortedArray[i]);
        }
    }

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
}

console.log(quickSort([10, 2, 1, 0, 45, 32, 100, 9]));