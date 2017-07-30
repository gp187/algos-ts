var _this = this;
/**
 * Check if all the variables in the array are truthy
 * @returns {boolean}
 */
Array.prototype.isAllTrue = function () {
    return _this.reduce(function (pv, cv) { return (typeof cv === 'boolean') ? (!pv) ? pv : cv : false; }, true);
};
/**
 * Sort with correct ordering
 *     @prevents
 *          [3, 22, 1] ===> [1, 22, 3]
 *
 * @param {(a: any, b: any) => number} cb
 * @returns {Array}
 */
Array.prototype.sort = function (cb) {
    return (typeof cb === 'function') ? _this.sort(cb) : _this.sort(function (a, b) { return a - b; });
};
/**
 * Sort array by key
 *
 * @param {string} key
 * @returns {any}
 */
Array.prototype.sortBy = function (key) {
    return _this.sort(function (a, b) { return a[key] - b[key]; });
};
/**
 * Bubble sort
 */
Array.prototype.bubbleSort = function () {
    var array = _this.slice();
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
};
/**
 * Sorts an array using quick sort
 */
Array.prototype.quickSort = function () {
    var array = _this.slice();
    ArrayHelpers.partition(array, 0, array.length);
    return array;
};
/**
 * Insert sort for arrays
 */
Array.prototype.insertionSort = function () {
    var array = _this.slice();
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
};
/**
 * Sorts an array using merge sort
 */
Array.prototype.mergeSort = function () {
    if (_this.length <= 1) {
        return _this;
    }
    var middle = Math.floor(_this.length / 2);
    var left = _this.slice(0, middle);
    var right = _this.slice(middle);
    return ArrayHelpers.merge(left.mergeSort(), right.mergeSort());
};
/**
 * Searches for specific element in a given sorted array
 * @returns the index of the element (-1 if its not found)
 */
Array.prototype.binarySearch = function (element, start, end) {
    if (start === void 0) { start = 0; }
    if (end === void 0) { end = _this.length - 1; }
    if (end < start)
        return -1;
    var middle = Math.floor((start + end) / 2);
    return element === _this[middle]
        ? middle
        : element < _this[middle]
            ? _this.binarySearch(element, start, middle - 1)
            : _this.binarySearch(element, middle + 1, end);
};
/**
 * Returns the first repeated item from an array if any
 * @throws {Error} if there is no item repetition
 */
Array.prototype.firstRepeatedItem = function () {
    var set = [];
    for (var _i = 0, _a = _this; _i < _a.length; _i++) {
        var item = _a[_i];
        if (set[item])
            return item;
        else
            set.push(item);
    }
    throw new Error('No item repetition');
};
var ArrayHelpers;
(function (ArrayHelpers) {
    /**
     * Partition for quick sort
     */
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
        ArrayHelpers.partition(array, start, pivotRank);
        ArrayHelpers.partition(array, pivotRank + 1, before);
        var _a, _b, _c;
    }
    ArrayHelpers.partition = partition;
    /** Merge (conquer) step of mergeSort */
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
    ArrayHelpers.merge = merge;
})(ArrayHelpers || (ArrayHelpers = {}));
