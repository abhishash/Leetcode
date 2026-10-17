/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var backTracking = (nums, ans, i, allsubSets) => {
    if (i === nums.length) {
        allsubSets.push([...ans]);
        return;
    }
    // Including
    ans.push(nums[i]);
    backTracking(nums, ans, i + 1, allsubSets);

    ans.pop();

    // Excluding

    let idx = i + 1;
    while(idx < nums.length && nums[idx] === nums[idx-1]){
        idx ++;
    }
    backTracking(nums, ans, idx, allsubSets);

}
var subsetsWithDup = function (nums) {
    const allsubSets = [];
    nums.sort((a, b) => a - b);
    backTracking(nums, [], 0, allsubSets);
    return allsubSets;
};
