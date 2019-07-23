/*
 * Given two strings, write a method to decide if one is a permutation of the other.
 */

function checkForPermutation(string1, string2) {
    const charsInString1 = string1.split('');
    const charsInString2 = string2.split('');

    const char1HashTable = {};
    const char2HashTable = {};

    let isCountNotMatching = false;

    if(charsInString1.length !== charsInString2.length) {
        return false;
    }

    charsInString1.forEach(i => {
        if(Object.values(char1HashTable).indexOf(char1HashTable[i]) > -1) {
            char1HashTable[i] = char1HashTable[i] + 1;
        } else {
            char1HashTable[i] = 0;
        }

        if(Object.values(char2HashTable).indexOf(char2HashTable[i]) > -1) {
            char2HashTable[i] = char2HashTable[i] + 1;
        } else {
            char2HashTable[i] = 0;
        }
    });

    Object.keys(char1HashTable).forEach(key => {
        if(char1HashTable[key] !== char2HashTable[key]) {
            isCountNotMatching = true;
        }
    });

    Object.keys(char2HashTable).forEach(key => {
        if(char1HashTable[key] !== char2HashTable[key]) {
            isCountNotMatching = true;
        }
    });

    return !isCountNotMatching;
}

checkForPermutation('1pappax1zx', 'ppxapa11zy');
