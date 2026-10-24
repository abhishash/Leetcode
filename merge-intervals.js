
/**
 * @param {number[][]} intervals
 * @return {number[][]}
 */
var merge = function (intervals) {
    if (intervals.length <= 1) return intervals;

    // Sort intervals by starting time
    intervals.sort((a, b) => a[0] - b[0]);

    const mergedIntervals = [intervals[0]];

    for (let i = 1; i < intervals.length; i++) {
        const current = intervals[i];
        const last = mergedIntervals[mergedIntervals.length - 1];

        if (current[0] <= last[1]) {
            // Overlapping intervals: merge them
            last[1] = Math.max(last[1], current[1]);
        } else {
            // Non-overlapping interval
            mergedIntervals.push(current);
        }
    }

    return mergedIntervals;
};

console.log(
    merge([[1, 3], [2, 6], [2, 7], [8, 10], [15, 18]])
);

// Output: [[1, 7], [8, 10], [15, 18]]
