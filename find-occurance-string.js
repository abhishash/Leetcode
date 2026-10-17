/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack, needle) {
    const haystackLength = haystack.length;
    const needleLength = needle.length;
    if(haystackLength < needleLength) {
        return -1;
    }
    for(let i = 0; i <= haystack.length - needle.length; i++) {
        const substring = haystack.substring(i, i + needle.length);
        if(substring === needle) {
            return i;
        }
    }
    return -1;
};
