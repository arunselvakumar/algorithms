function bubbleSort() {
    let swapped = false;
    const unSortedArray = [12, 0, 700, 80, 90, 1];

    do {
        swapped = false;
        for (let i = 0; i < unSortedArray.length; i++) {
            if (unSortedArray[i] > unSortedArray[i + 1]) {
                const temp = unSortedArray[i];
                unSortedArray[i] = unSortedArray[i + 1];
                unSortedArray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    return unSortedArray;
}

describe('bubbleSort()', function() {
    it("should return sorted array", function() {
        expect(bubbleSort()).toEqual([0, 1, 12, 80, 90, 700]);
    });
});