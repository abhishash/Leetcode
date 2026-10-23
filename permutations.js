/**
 * @param {number[]} nums
 * @return {number[][]}
 */

var getPermutations = (nums, idx, ans) => {
    const n = nums.length;
    if (idx === n) {
        ans.push([...nums]);
        return;

    }

    const set = new Set();

    for (let i = idx; i < n; i++) {

        if (set.has(nums[i])) {
            continue;
        }
        
        set.add(nums[i]);


        [nums[idx], nums[i]] = [nums[i], nums[idx]];
        getPermutations(nums, idx + 1, ans);

        // BackTracking Code
        [nums[idx], nums[i]] = [nums[i], nums[idx]];

    }

}

var permute = function (nums) {

    const ans = [];
    getPermutations(nums, 0, ans);
    return ans;

};

console.log(permute([1, 2, 1]))