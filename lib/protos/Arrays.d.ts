declare module ArrayHelpers {
    /**
     * Partition for quick sort
     */
    function partition(array: number[], start: number, before: number): void;
    /** Merge (conquer) step of mergeSort */
    function merge(left: number[], right: number[]): number[];
}
