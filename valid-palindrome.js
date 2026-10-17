/**
 * @param {string} s
 * @return {boolean}
 */

function validChar(char) {
    return /^[a-zA-Z0-9]$/.test(char);
}

var isPalindrome = function (s) {

    let length = s.length;

    let left = 0;
    let right = length - 1;

    while (left <= right) {
        if (!validChar(s[left])) {
            left++;
            continue;
        }

        if (!validChar(s[right])) {
            right--;
            continue;
        }

        if (s[left]?.toLowerCase() != s[right]?.toLowerCase()) {
            console.log(s[left], s[right]);
            return false;
        }

        left++;
        right--;
    }
    
    return true;

};

console.log(isPalindrome("0P"));