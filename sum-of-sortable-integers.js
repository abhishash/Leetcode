/**
 * @param {number[]} nums
 * @return {number}
 */

var sortableIntegers = function (nums) {
    const n = nums.length;
    const sorted = [...nums].sort((a, b) => a - b);
    let answer = 0;

    // Check whether pattern is a cyclic rotation of arr
    function isRotation(arr, pattern) {
        const k = arr.length;

        // Build KMP LPS array
        const lps = new Array(k).fill(0);
        for (let i = 1, len = 0; i < k;) {
            if (pattern[i] === pattern[len]) {
                lps[i++] = ++len;
            } else if (len > 0) {
                len = lps[len - 1];
            } else {
                lps[i++] = 0;
            }
        }

        // Search pattern inside arr + arr, scanning 2k - 1 elements
        let j = 0;

        for (let i = 0; i < 2 * k - 1; i++) {
            const value = arr[i % k];

            while (j > 0 && value !== pattern[j]) {
                j = lps[j - 1];
            }

            if (value === pattern[j]) {
                j++;
            }

            if (j === k) return true;
        }

        return false;
    }

    // Only divisors of n can be sortable
    for (let k = 1; k <= n; k++) {
        if (n % k !== 0) continue;

        let valid = true;

        for (let start = 0; start < n; start += k) {
            const arr = nums.slice(start, start + k);
            const pattern = sorted.slice(start, start + k);

            if (!isRotation(arr, pattern)) {
                valid = false;
                break;
            }
        }

        if (valid) answer += k;
    }

    return answer;
};

// console.log(sortableIntegers([3, 1, 2, 4]));



const sortableIntegers1 = (nums) => {
    const n = nums.length;
    const sortedArray = [...nums].sort((a, b) => a - b);
    let ans = [];
    
    function isRotation(arr, pattern){
        const k = arr.length;
        const lps = new Array(k).fill(0);
        for (let i = 1; len = 0; i < k ){
            console.log(i);
            i++;
        }

    }

    for (let i = 0; i < n; i++) {
        let k = nums[i];
        if (n % k !== 0) {
            continue;
        }

        for (let start = 0; start < n; start += k) {
            // console.log(start, k);
            const targetedArray = nums.slice(start, start + k);
            const orginalArray = sortedArray.slice(start, start + k);

            isRotation(targetedArray, orginalArray);
            // ans.push(targetedArray);

        }
    }
    console.log(sortedArray, ans);

}

console.log(sortableIntegers1([3, 1, 2, 4]));