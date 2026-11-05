/**
 * @param {number[]} arr1
 * @param {number[]} arr2
 * @param {number} d
 * @return {number}
 */
var findTheDistanceValue = function (arr1, arr2, d) {
    const arr1Length = arr1.length;
    const arr2Length = arr2.length;
    let count = 0;
    let isCheck = false;
    for (let i = 0; i < arr1Length; i++) {
        for (let j = 0; j < arr2.length; j++) {
            if (!(Math.abs(arr1[i] - arr2[j]) > d)) {
                isCheck = true;
            }
        }

        if (!isCheck) {
            count++;
        }
        isCheck = false;
    }

    return count;

};
