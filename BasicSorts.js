const bubbleSort = array => {
    for (let i = array.length - 1; i > 0; i--) {
        for (let y = 0; y < i; y++) {
            if (array[y] > array[y + 1]) {
                const temp = array[y];
                array[y] = array[y + 1];
                array[y + 1] = temp;
            }
        }
    }
    return array;
}

const selectionSort = array => {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        const temp = array[i];
        for (let y = i + 1; y < array.length; y++) {
            if (array[y] < array[min]) min = y;
        }
        if (i !== min) {
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}

const insertionSort = array => {
    for (let i = 1; i < array.length; i++) {
        const temp = array[i];
        let y = i - 1;
        for (y; array[y] > temp && y > -1; y--) {
            array[y + 1] = array[y];
        }
        array[y + 1] = temp;
    }
    return array;
}

const merge = (array1, array2) => {
    const combined = [];
    let i = 0;
    let y = 0;
    while (i < array1.length && y < array2.length) {
        if (array1[i] > array2[y]) {
            combined.push(array2[y]);
            y++;
        } else {
            combined.push(array1[i]);
            i++;
        }
    }
    while (i < array1.length) {
        combined.push(array1[i]);
        i++;
    }
    while (y < array2.length) {
        combined.push(array2[y]);
        y++;
    }
    return combined;
}

const mergeSort = array => {
    if (array.length < 2) return array;
    const mid = Math.floor(array.length / 2);
    const leftArr = array.slice(0, mid);
    const rightArr = array.slice(mid);
    return merge(mergeSort(leftArr), mergeSort(rightArr));
}

module.exports = { bubbleSort, selectionSort, insertionSort, mergeSort };