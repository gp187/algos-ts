"use strict";
exports.__esModule = true;
function bubbleSort(array) {
    array = array.slice();
    while (true) {
        var swapped = false;
        for (var j = 0; j < array.length - 1; j++) {
            if (array[j] > array[j + 1]) {
                _a = [array[j + 1], array[j]], array[j] = _a[0], array[j + 1] = _a[1];
                swapped = true;
            }
        }
        if (!swapped)
            break;
    }
    return array;
    var _a;
}
exports.bubbleSort = bubbleSort;
/**
 * Sorts an array using quick sort
 */
function quickSort(array) {
    array = array.slice();
    partition(array, 0, array.length);
    return array;
}
exports.quickSort = quickSort;
function partition(array, start, before) {
    var length = before - start;
    if (length <= 1)
        return;
    var pivotIndex = start + Math.floor(Math.random() * length);
    _a = [array[pivotIndex], array[start]], array[start] = _a[0], array[pivotIndex] = _a[1];
    var pivot = array[start];
    var pivotRank = start;
    for (var index = start + 1; index < before; index++) {
        if (array[index] < pivot) {
            pivotRank++;
            _b = [array[pivotRank], array[index]], array[index] = _b[0], array[pivotRank] = _b[1];
        }
    }
    if (pivotRank !== start) {
        _c = [array[start], array[pivotRank]], array[pivotRank] = _c[0], array[start] = _c[1];
    }
    partition(array, start, pivotRank);
    partition(array, pivotRank + 1, before);
    var _a, _b, _c;
}
/**
 * Sorts an array using insertion sort
 */
function insertionSort(array) {
    array = array.slice();
    for (var i = 1; i < array.length; i++) {
        var current = array[i];
        var j = i - 1;
        while (j >= 0 && array[j] > current) {
            array[j + 1] = array[j];
            j--;
        }
        array[j + 1] = current;
    }
    return array;
}
exports.insertionSort = insertionSort;
/**
 * Sorts an array using merge sort
 */
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }
    var middle = Math.floor(array.length / 2);
    var left = array.slice(0, middle);
    var right = array.slice(middle);
    return merge(mergeSort(left), mergeSort(right));
}
exports.mergeSort = mergeSort;
function merge(left, right) {
    var array = [];
    var lIndex = 0;
    var rIndex = 0;
    while (lIndex + rIndex < left.length + right.length) {
        var lItem = left[lIndex];
        var rItem = right[rIndex];
        if (lItem == null) {
            array.push(rItem);
            rIndex++;
        }
        else if (rItem == null) {
            array.push(lItem);
            lIndex++;
        }
        else if (lItem < rItem) {
            array.push(lItem);
            lIndex++;
        }
        else {
            array.push(rItem);
            rIndex++;
        }
    }
    return array;
}
/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
function binarySearch(array, element, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = array.length - 1; }
    if (end < start)
        return -1;
    var middle = Math.floor((start + end) / 2);
    return element === array[middle]
        ? middle
        : element < array[middle]
            ? binarySearch(array, element, start, middle - 1)
            : binarySearch(array, element, middle + 1, end);
}
exports.binarySearch = binarySearch;
/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
function repeatedItemLoops(array) {
    for (var i = 0; i < array.length; i++) {
        for (var j = i + 1; j < array.length; j++) {
            if (array[i] === array[j])
                return array[i];
        }
    }
    throw new Error('No item repetition');
}
