declare global {
    interface Array<T> {
        /**
         * Check if all the variables in the array are truthy
         * @returns {boolean}
         */
        isAllTrue(): boolean;
        /**
         * Sort with correct ordering
         */
        sort(compareFn?: (a: T, b: T) => number): this;
        /**
         * Sort array by key
         */
        sortBy(param: string): this;
        /**
         * Bubble sort
         */
        bubbleSort(): number[];
        /**
         * Quick sort
         */
        quickSort(): number[];
        /**
         * Insert sort
         */
        insertionSort(): number[];
        /**
         * Merge sort algo
         */
        mergeSort(): number[];
        /**
         * Binary search
         */
        binarySearch(element: number, start: number, end: number): number
        /**
         * Find repeated item
         */
        firstRepeatedItem<T>(): T;
    }
}
import './Arrays';