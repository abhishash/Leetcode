/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var backTracking = (nums, ans, i, allSubsets) => {
    if (i === nums.length) {
        allSubsets.push([...ans]);
        return;
    }

    // Including Logic
    ans.push(nums[i]);
    backTracking(nums, ans, i + 1, allSubsets);

    ans.pop();
    backTracking(nums, ans, i + 1, allSubsets);

}
var subsets = function (nums) {
    const allSubsets = [];
    backTracking(nums, [], 0, allSubsets);

    return allSubsets;
};
