

export function bubbleSort(array: number[]): number[] {
    array = array.slice();
    while (true) {
        let swapped = false;
        for (let j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                [array[j], array[j + 1]] = [array[j + 1], array[j]];
                swapped = true;
            }
        }
        if (!swapped) break;
    }
    return array;
}

/**
 * Sorts an array using quick sort
 */
export function quickSort(array: number[]): number[] {
    array = array.slice();
    partition(array, 0, array.length);
    return array;
}

function partition(array: number[], start: number, before: number): void {
    const length = before - start;

    if (length <= 1) return;
    const pivotIndex = start + Math.floor(Math.random() * length);
    [array[start], array[pivotIndex]] = [array[pivotIndex], array[start]];
    const pivot = array[start];
    let pivotRank = start;
    for (let index = start + 1; index < before; index++) {
        if (array[index] < pivot) {
            pivotRank++;
            [array[index], array[pivotRank]] = [array[pivotRank], array[index]];
        }
    }
    if (pivotRank !== start) {
        [array[pivotRank], array[start]] = [array[start], array[pivotRank]];
    }
    partition(array, start, pivotRank);
    partition(array, pivotRank + 1, before);
}

/**
 * Sorts an array using insertion sort
 */
export function insertionSort(array: number[]): number[] {
    array = array.slice();
    for (let i = 1; i < array.length; i++) {
        const current = array[i];
        let j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}

/**
 * Sorts an array using merge sort
 */
export function mergeSort(array: number[]): number[] {
    if (array.length <= 1) {
        return array;
    }
    const middle = Math.floor(array.length / 2);
    const left = array.slice(0, middle);
    const right = array.slice(middle);

    return merge(mergeSort(left), mergeSort(right));
}
function merge(left: number[], right: number[]): number[] {
    const array: number[] = [];
    let lIndex = 0;
    let rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
        const lItem = left[lIndex];
        const rItem = right[rIndex];
        if (lItem == null) {
            array.push(rItem); rIndex++;
        }
        else if (rItem == null) {
            array.push(lItem); lIndex++;
        }
        else if (lItem < rItem) {
            array.push(lItem); lIndex++;
        }
        else {
            array.push(rItem); rIndex++;
        }
    }
    return array;
}

/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
export function binarySearch(array: number[], element: number, start = 0, end = array.length - 1): number {
    if (end < start) return -1;
    const middle = Math.floor((start + end) / 2);
    return element === array[middle]
        ? middle
        : element < array[middle]
            ? binarySearch(array, element, start, middle - 1)
            : binarySearch(array, element, middle + 1, end);
}

/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
function repeatedItemLoops<T>(array: T[]): T {
    for (let i = 0; i < array.length; i++) {
        for (let j = i + 1; j < array.length; j++) {
            if (array[i] === array[j]) return array[i];
        }
    }
    throw new Error('No item repetition');
}