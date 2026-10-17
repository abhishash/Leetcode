/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    const size = s.length;
    let stack = [];
    const map = { "(": ")", "[": "]", "{": "}" };
    for (let i = 0; i < size; i++) {
        const char = s[i];
        if (map[char]) {
            stack.push(char);
        } else {
            const lastIn = stack.pop();
            if (map[lastIn] != char) {
                return false;
            }
        }

    }

    return stack.length === 0;

};

console.log(isValid("[()]]"))
