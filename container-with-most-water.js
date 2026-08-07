/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function (height) {
    const n = height.length - 1;
    let left = 0;
    let right = n;
    let maxWater = 0;
    while (left < right) {

        const width = right - left;
        const currentHeight = Math.min(height[left], height[right]);
        const area = width * currentHeight;
        maxWater = Math.max(maxWater, area);

        if (height[left] < height[right]) {
            left = left + 1;
        } else {
            right = right - 1;
        }

    }

    return maxWater;
};
const height = [1, 1];
console.log(maxArea(height));