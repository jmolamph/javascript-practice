/**
 * Problem 14: Majority Element
 * 
 * Given a list of numbers, return the majority number.
 * The majority number is the one that appears at least ⌊n/2⌋ times, where n is the size of the list.
 * 
 * @example [3,2,3] -> 3
*/
function problem(numbers) {
    let counts = {};
    for (let x = 0; x < numbers.length; x++) {
        if (numbers[x] in counts) {
            counts[numbers[x]] += 1;
        } else {
            counts[numbers[x]] = 1;
        }

        if (counts[numbers[x]] >= Math.floor(numbers.length / 2)) {
            return numbers[x];
        }
    }
}

const tests = [
    [[3,2,3], 3],
    [[2,2,1,1,3,2,2], 2]
]

module.exports = {problem, tests};