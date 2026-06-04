var lengthOfLongestSubstring = function (s) {
    const dict = new Map();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        const char = s[right];
        if (dict.has(char) && dict.get(char) >= left) {
            left = dict.get(char) + 1;
        }

        dict.set(char, right);
        const length = right - left + 1;;
        maxLength = Math.max(maxLength, length);

    }
    return maxLength;

};

let s = "bbbbb";
console.log(lengthOfLongestSubstring(s));