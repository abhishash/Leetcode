/**
 * @param {string} s
 * @return {number}
 */


var myAtoi = function(s) {
    let i = 0;
    const n = s.length;

    // Skip leading spaces
    while (i < n && s[i] === ' ') {
        i++;
    }

    // Check sign
    let sign = 1;
    if (i < n && (s[i] === '+' || s[i] === '-')) {
        sign = s[i] === '-' ? -1 : 1;
        i++;
    }

    let result = 0;

    while (i < n && s[i] >= '0' && s[i] <= '9') {
        const digit = s.charCodeAt(i) - '0'.charCodeAt(0);

        // Overflow check
        if (
            result > Math.floor(2147483647 / 10) ||
            (result === Math.floor(2147483647 / 10) && digit > 7)
        ) {
            return sign === 1 ? 2147483647 : -2147483648;
        }

        result = result * 10 + digit;
        i++;
    }

    return result * sign;
};