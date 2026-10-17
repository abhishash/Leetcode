/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function (nums) {
    let left = 0;
    let right = 0;

    while (left < nums.length) {
        if (right < 2 || nums[left] !== nums[right-2]) {
            nums[right] = nums[left]
            right++;
        }
        left++;
    }
    
    return right;
};

console.log(removeDuplicates([1,1,1,2,2,3]));