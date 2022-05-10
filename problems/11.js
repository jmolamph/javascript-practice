/**
 * Problem 11: Palindrome
 * 
 * Given a string, return true if it is a palindrome.
 * A palindrome is a string that is the same forward and backwards.
 * Only consider letters, ignore spaces and cases.
 * 
 * @example "racecar" -> true
*/
function problem(str) {
    const new_str = str.replace(/[^a-zA-Z]/gm,"");
    for (let i = 0, j = new_str.length-1; i < j; i++, j--) {
        if (new_str.charAt(i).toLowerCase() !== new_str.charAt(j).toLowerCase()) return false;
    }
    return true;
}

const tests = [
    ["racecar", true],
    ["icssc", false],
    ["dont nod", true],
    ["Was it a cat I saw", true],
    ["how are you", false]
]

module.exports = {problem, tests};