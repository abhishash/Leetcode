/**
 * @param {number[]} nums
 * @return {number}
 */

var minOperations = function (nums) {
    const n = nums.length;
    let count_asc = 0;
    let count_desc = 0;

    for (let i = 1; i < n; i++) {
        count_asc +=
            nums[i] === (nums[i - 1] + 1) % n ? 1 : 0;

        count_desc +=
            nums[i - 1] === (nums[i] + 1) % n ? 1 : 0;
    }
    // Already sorted
    if (count_asc === n - 1 && nums[0] === 0) {
        return 0;
    }

    // Ascending cyclic order
    if (count_asc === n - 1) {
        const leftRot = n - nums[0];
        const rightRot = 1 + (nums[n - 1] + 1) + 1;

        return Math.min(leftRot, rightRot);
    }

    // Descending cyclic order
    if (count_desc === n - 1) {
        const descLeftRot = n - nums[n - 1] + 1;
        const descRightRot = ((nums[0] + 1) % n) + 1;

        return Math.min(descLeftRot, descRightRot);
    }

    return -1;

};
