
/**
 * Check if all the variables in the array are truthy
 * @returns {boolean}
 */
Array.prototype.isAllTrue = (): boolean => {
    return this.reduce((pv, cv) => { return (typeof cv === 'boolean') ? (!pv) ? pv : cv : false }, true);
};

/**
 * Sort with correct ordering
 *     @prevents
 *          [3, 22, 1] ===> [1, 22, 3]
 *
 * @param {(a: any, b: any) => number} cb
 * @returns {Array}
 */
Array.prototype.sort = <T>(cb: (a: T, b: T) => number): Array<T> => {
    return (typeof cb === 'function') ? this.sort(cb) : this.sort((a, b) => a - b);
};

/**
 * Sort array by key
 *
 * @param {string} key
 * @returns {any}
 */
Array.prototype.sortBy = (key: string) => {
    return this.sort((a, b) => a[key] - b[key]);
};

/**
 * Bubble sort
 */
Array.prototype.bubbleSort = (): number[] => {
    let array = this.slice();
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
};


/**
 * Sorts an array using quick sort
 */
Array.prototype.quickSort = (): number[] => {
    let array = this.slice();
    ArrayHelpers.partition(array, 0, array.length);
    return array;
};

/**
 * Insert sort for arrays
 */
Array.prototype.insertionSort = (): number[] => {
    let array = this.slice();
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
};


/**
 * Sorts an array using merge sort
 */
Array.prototype.mergeSort = (): number[] => {
    if (this.length <= 1) {
        return this;
    }
    const middle = Math.floor(this.length / 2);
    const left = this.slice(0, middle);
    const right = this.slice(middle);

    return ArrayHelpers.merge(left.mergeSort(), right.mergeSort());
};

/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
Array.prototype.binarySearch = (element: number, start = 0, end = this.length - 1): number => {
    if (end < start) return -1;
    const middle = Math.floor((start + end) / 2);
    return element === this[middle]
        ? middle
        : element < this[middle]
            ? this.binarySearch(element, start, middle - 1)
            : this.binarySearch(element, middle + 1, end);
};

/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
Array.prototype.firstRepeatedItem = <T>(): T => {
    const set = [];
    for (const item of this) {
        if (set[item]) return item;
        else set.push(item);
    }
    throw new Error('No item repetition');
};

module ArrayHelpers {
    /**
     * Partition for quick sort
     */
    export function partition(array: number[], start: number, before: number): void {
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

        ArrayHelpers.partition(array, start, pivotRank);
        ArrayHelpers.partition(array, pivotRank + 1, before);
    }

    /** Merge (conquer) step of mergeSort */
    export function merge(left: number[], right: number[]): number[] {
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
}