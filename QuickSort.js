const swap = (array, firstIndex, secondIndex) => {
    const temp = array[firstIndex];
    array[firstIndex] = array[secondIndex];
    array[secondIndex] = temp;
}

const pivot = (array, pivotIndex = 0, endIndex = array.length - 1) => {
    let swapIndex = pivotIndex;
    for (let i = pivotIndex; i <= endIndex; i++) {
        if (array[i] < array[pivotIndex]) {
            swapIndex++;
            swap(array, swapIndex, i);
        }
    }
    swap(array, pivotIndex, swapIndex);
    return swapIndex;
}

const QuickSort = (array, left = 0, right = array.length - 1) => {
    if (left < right) {
        let index = pivot(array, left, right);
        QuickSort(array, left, index - 1);
        QuickSort(array, index + 1, right);
    }
    return array;
}

module.exports = QuickSort;