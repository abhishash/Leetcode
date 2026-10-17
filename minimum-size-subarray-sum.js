/**
 * @param {number} target
 * @param {number[]} nums
 * @return {number}
 */
var minSubArrayLen = function(target, nums) {
    const n = nums.length;
    let i = 0;
    let j = 0;
    let sum = 0;
    let minLength = Infinity;
    while(j < n){
        sum += nums[j];
        while(sum >= target){
            minLength = Math.min(minLength, j-i+1);
            sum -= nums[i];
            i++;
        }
        j++;
    }
    return minLength == Infinity ? 0 : minLength;
};
