function isMatch(s, p) {
    const memo = new Map();

    function dp(i, j) {
        console.log(`dp(${i}, ${j})`);
        const key = `${i},${j}`;
        console.log(`Checking memo for key: ${key}`);

        if (memo.has(key))
            return memo.get(key);

        if (j === p.length)
            return i === s.length;

        const firstMatch =
            i < s.length &&
            (s[i] === p[j] || p[j] === ".");

        let ans;

        if (j + 1 < p.length && p[j + 1] === "*") {
            ans =
                dp(i, j + 2) ||
                (firstMatch && dp(i + 1, j));
        } else {
            ans =
                firstMatch &&
                dp(i + 1, j + 1);
        }

        memo.set(key, ans);
        return ans;
    }

    return dp(0, 0);
}

console.log(isMatch("aa", "a")); // false