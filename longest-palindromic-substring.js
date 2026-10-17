/**
 * @param {string} s
 * @return {string}
 */

// Brute Force Approach
var checkPalidrom = (s, i, j) => {

    if (i >= j) {
        return true
    }

    if (s[i] === s[j]) {
        return checkPalidrom(s, i + 1, j - 1);
    }

    return false;
}

var longestPalindrome = function (s) {
    const size = s.length;
    let sp = 0
    let maxLength = -Infinity;
    for (let i = 0; i < size; i++) {
        for (j = i; j < size; j++) {

            if (checkPalidrom(s, i, j) && j - i + 1 > maxLength) {
                maxLength = j - i + 1;
                sp = i;
            }
        }
    }

    return s.substring(sp, sp + maxLength);

};

console.log(longestPalindrome("cbbd"));