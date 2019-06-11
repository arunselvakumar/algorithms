function bubbleSort() {
    let swapped = false;
    let count = 0;
    const unSortedArray = [12, 0, 700, 80, 90, 1];

    do {
        swapped = false;
        for (let i = 0; i < unSortedArray.length; i++) {
            ++count;
            if (unSortedArray[i] > unSortedArray[i + 1]) {
                const temp = unSortedArray[i];
                unSortedArray[i] = unSortedArray[i + 1];
                unSortedArray[i + 1] = temp;
                swapped = true;
            }
        }
    } while (swapped);

    console.log(`The loop ran ${count} times.`);
    console.log(unSortedArray);
}

bubbleSort();