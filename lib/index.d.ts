declare global  {
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
        bubbleSort(): number[];
        quickSort(): number[];
        insertionSort(): number[];
        mergeSort(): number[];
        binarySearch(element: number, start: number, end: number): number;
        firstRepeatedItem<T>(): T;
    }
}
import './protos/Arrays';
