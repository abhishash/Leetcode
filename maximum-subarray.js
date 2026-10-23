/**
 * @param {number[]} nums
 * @return {number}
 */

// Brute Force Algorithm
// var maxSubArray = function (nums) {
//     const size = nums.length;

//     let maxSum = -Infinity;
//     for (let i = 0; i < size; i++) {
//         let countSum = 0;
//         for (let j = i; j < size; j++) {
//             countSum += nums[j];

//             maxSum = Math.max(countSum, maxSum);
//         }

//     }


//     return maxSum;
// };


// Kadane's Algorithm

/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function (nums) {
    const size = nums.length;

    let maxSum = -Infinity;
    let countSum = 0;

    for (let i = 0; i < size; i++) {
        countSum += nums[i];
        maxSum = Math.max(maxSum, countSum);

        if (countSum < 0) {
            countSum = 0;
        }
    }

    console.log(maxSum);

    return maxSum === -Infinity ? 0 : maxSum;
};


maxSubArray([-2,1,-3,4,-1,2,1,-5,4]);