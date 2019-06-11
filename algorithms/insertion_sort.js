function insertionSort() {
    let count = 0;
    const unSortedArray = [12, 0, 700, 80, 90, 1];

    for (let i = 1; i < unSortedArray.length; i++) {
        for(let j = 0; j < i; j++) {
            ++count;
            if(unSortedArray[i] < unSortedArray[j]) {
                const temp = unSortedArray[i];
                unSortedArray[i] = unSortedArray[j];    
                unSortedArray[j] = temp;
            }
        }
    }

    console.log(`The loop ran ${count} times.`);
    console.log(unSortedArray);
}

insertionSort();