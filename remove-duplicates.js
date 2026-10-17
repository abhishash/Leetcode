/**
 * @param {number[]} nums
 * @return {number}
 */
var removeDuplicates = function(nums) {
    if(nums.length < 0){
        return 0;
    }
    let left = 1;
    let right = 1;

    while(left < nums.length){
        if(nums[left] !== nums[right-1]){
            nums[right] = nums[left];
            right ++;
        }
        
        left ++;
    }

    return right;
};
