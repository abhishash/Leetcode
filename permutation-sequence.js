/**
 * @param {number} n
 * @param {number} k
 * @return {string}
 */

var getPermutationOrder = (nums, idx, count, k) => {
    const n = nums.length;
    if (idx === n) {
        count.value++;
        if (count.value === k) {
            count.result = nums.join("");
            return true
        }
        return false
    }

    for (let i = idx; i < n; i++) {
        [nums[idx], nums[i]] = [nums[i], nums[idx]];

        if (!getPermutationOrder(nums, idx + 1, count, k));

        // BackTracking Code
        [nums[idx], nums[i]] = [nums[i], nums[idx]];

    }
}

var getPermutation = function (n, k) {
    const nums = [];
    for (let i = 1; i <= n; i++) {
        nums.push(i);
    }

    const count = {
        value: 0,
        result: ""
    };

    getPermutationOrder(nums, 0, count, k);

    return count.result;
};

console.log(getPermutation(3, 3));