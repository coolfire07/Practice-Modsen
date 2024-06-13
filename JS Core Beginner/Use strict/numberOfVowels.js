'use strict'
function calcVowels(str) {
    let vowelsAmount = 0
    for (let i = 0; i < str.length; i++) {
        if (str[i].toLowerCase() == 'a' || str[i].toLowerCase() == 'e' ||
            str[i].toLowerCase() == 'i' || str[i].toLowerCase() == 'o' ||
            str[i].toLowerCase() == 'u' || str[i].toLowerCase() == 'y') {
            vowelsAmount += 1
        }
    }
    console.log(vowelsAmount)
    return vowelsAmount
}

// calcVowels('AAaakeyyyjjj')