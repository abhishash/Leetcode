// Timpe Complexity O(n)
// Space Compalexity O(n)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const size = nums.length;
    if (size <= 1) {
        return nums;
    }

    const prefix = [];
    prefix[0] = 1;

    for (let i = 1; i < size; i++) {
        const PrefixNum = prefix[i - 1] * nums[i - 1]
        prefix[i] = PrefixNum;
    }

    const suffix = [];

    suffix[size - 1] = 1;

    for (let j = size - 2; j >= 0; j--) {
        const prefixNum = nums[j + 1] * suffix[j + 1];
        suffix[j] = prefixNum;
    }

    const finalArray = [];
    for (let p = 0; p < size; p++) {
        const num = suffix[p] * prefix[p];
        finalArray.push(num);
    }

    return finalArray;
};


// Timpe Complexity O(n)
// Space Compalexity O(1)

/**
 * @param {number[]} nums
 * @return {number[]}
 */
/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function (nums) {
    const size = nums.length;
    if (size <= 1) {
        return nums;
    }

    let ans = [];
    ans[0] = 1;
    
    // Prefix
    for (let i = 1; i < size; i++) {
        ans[i] = ans[i - 1] * nums[i - 1];
    }


    // Suffix product
    let suffix = 1;

    for (let j = size - 1; j >= 0; j--) {
        ans[j] = ans[j] * suffix;
        suffix = suffix * nums[j];
    }

    return ans;
};

productExceptSelf([1, 2, 3, 4]);
