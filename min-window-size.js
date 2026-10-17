/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    let strLength = s.length;
    let targetLenth = t.length;
    if(strLength < targetLenth){
        return "";
    }
    const targetMap = new Map();
    // Start the key values in Hash Map with frequency counts.
    for(const char of t){
        targetMap.set(char, (targetMap.get(char) || 0) + 1);
    }

    let left = 0;
    let start = 0;
    let minWindowSize = Infinity;
    let requiredCount = targetLenth;
    // Iterare the String
    for(let right = 0; right < strLength; right++){
        const currentChar = s[right];

        if(targetMap.has(currentChar)){
            if(targetMap.get(currentChar) > 0){
                requiredCount--;
            }
            targetMap.set(currentChar, targetMap.get(currentChar) - 1);
        }
        // Write the logic for window sliding
        while (requiredCount === 0){
            const windowLenth = right - left + 1;
            if(windowLenth < minWindowSize ){
                minWindowSize = windowLenth;
                start = left;
            }

            const leftChar = s[left];
            if(targetMap.has(leftChar)){
                targetMap.set(leftChar, targetMap.get(leftChar) + 1);
                if(targetMap.get(leftChar) > 0) {
                    requiredCount++;
                }
            }

            left++;
        }
    }

    return minWindowSize === Infinity ? "" : s.substring(start, start + minWindowSize)
};
