/*
 * Implement an algorithm to determine if a string has all unique characters.
 */

function hasUniqueCharacters(obj) {
    let hasDuplicateChararacters = false;

    const charArray = obj.split('');
    const dictionary = {};

    charArray.forEach(char => {
        console.log(Object.values(dictionary).indexOf(char) > -1);
        if(Object.values(dictionary).indexOf(char) > -1) {
            hasDuplicateChararacters = true;
        }

        dictionary[char] = char;
    });

    return !hasDuplicateChararacters;
}

const result = hasUniqueCharacters('foo');

console.log(result);
