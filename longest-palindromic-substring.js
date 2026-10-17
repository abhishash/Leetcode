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

// var longestPalindrome = function (s) {
//     const size = s.length;
//     let sp = 0
//     let maxLength = -Infinity;
//     for (let i = 0; i < size; i++) {
//         for (j = i; j < size; j++) {

//             if (checkPalidrom(s, i, j) && j - i + 1 > maxLength) {
//                 maxLength = j - i + 1;
//                 sp = i;
//             }
//         }
//     }

//     return s.substring(sp, sp + maxLength);

// };



/**
 * @param {string} s
 * @return {string}
 */

var longestPalindrome = function (s) {
    let start = 0;
    let maxLength = 0;

    const expand = (left, right) => {
        while (
            left >= 0 &&
            right < s.length &&
            s[left] === s[right]
        ) {
            left--;
            right++;
        }

        // Length of the valid palindrome
        const length = right - left - 1;

        if (length > maxLength) {
            maxLength = length;
            start = left + 1;
        }
    };

    for (let i = 0; i < s.length; i++) {
        // Odd-length palindrome: "bab"
        expand(i, i);

        // Even-length palindrome: "abba"
        expand(i, i + 1);
    }

    return s.substring(start, start + maxLength);
};

console.log(longestPalindrome("babad")); // "bab"
console.log(longestPalindrome("cbbd"));  // "bb"
console.log(longestPalindrome("a"));     // "a"
console.log(longestPalindrome("ac"));    // "a"


console.log(longestPalindrome("cbbd"));