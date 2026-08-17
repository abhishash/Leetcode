/**
 * @param {number} n
 * @return {string[]}
 */

// Mathod : 1
// var generateParenthesis = function (n) {
//     let result = [];

//     // Checked function to valid parenthesis
//     function isValidParenthesis(str) {
//         let count = 0;
//         for (let stin of str) {
//             if (stin === "(") {
//                 count++;
//             } else {
//                 count--;
//             }

//             if (count < 0) {
//                 return false
//             }
//         }
//         if (count == 0) return true;
//     }

//     function BackTracking(current, open, close) {

//         if (current.length === 2 * n) {
//             if (isValidParenthesis(current)) {
//                 result.push(current);
//             }
//             return;
//         }

//         BackTracking(current + "(", open + 1, close);
//         BackTracking(current + ")", open, close + 1);
//     }

//     BackTracking("", 0, 0);

//     return (result);
// };

// Method : 2
var generateParenthesis = function (n) {
    let result = [];
    function BackTracking(current, open, close) {

        if( close === n && open === n){
            result.push(current);
            return ;
        }

        if(open < n){
            BackTracking(current + "(", open + 1, close);
        }

        if(open > close){

            BackTracking(current + ")", open, close + 1);
        }

    }

    BackTracking("", 0, 0);

    return (result);
};

console.log(generateParenthesis(3))