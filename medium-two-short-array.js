/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function (nums1, nums2) {
    // Brute Force Approach 
    // const sortedArray = [...nums1, ...nums2].sort((a, b) => a - b);
    // const left = 0;
    // const right = sortedArray.length - 1;
    // const mid = Math.floor((left + right) / 2);
    // if(sortedArray.length % 2 === 0) {
    //     return (sortedArray[mid] + sortedArray[mid + 1]) / 2;
    // } else {
    //     return sortedArray[mid];
    // }


    if (nums1.length > nums2.length) {
        return findMedianSortedArrays(nums2, nums1);
    }

    const m = nums1.length;
    const n = nums2.length;

    let l = 0;
    let r = m;

    while (l <= r) {
        const px = Math.floor((l + r) / 2);
        const py = Math.floor((m + n + 1) / 2) - px;

        const x1 = px === 0 ? -Infinity : nums1[px - 1];
        const x2 = py === 0 ? -Infinity : nums2[py - 1];

        const x3 = px === m ? Infinity : nums1[px];
        const x4 = py === n ? Infinity : nums2[py];

        if (x1 <= x4 && x2 <= x3) {
            if ((m + n) % 2 === 1) {
                return Math.max(x1, x2);
            }

            return (
                Math.max(x1, x2) +
                Math.min(x3, x4)
            ) / 2;
        }

        if (x1 > x4) {
            r = px - 1;
        } else {
            l = px + 1;
        }
    }

    return -1;


};
