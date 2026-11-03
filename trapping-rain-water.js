/**
 * @param {number[]} height
 * @return {number}
 */
var trap = function(height) {
    const size = height.length;
    let left = 0;
    let right = size - 1;
    let lMax = 0;
    let rMax = 0;
    let ans = 0;

    while(left < right){
        lMax = Math.max(lMax, height[left]);
        rMax = Math.max(rMax, height[right]);

        if(lMax < rMax){
            ans += (lMax - height[left]);
            left ++;
        } else {
            ans += (rMax - height[right]);
            right --;
        }
    }

    return ans;

};
