function findFirstNonRepeatedChar(str) {
    const charFrequency = {};

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (!(char in charFrequency)) {
            charFrequency[char] = 1;
        } else {
            charFrequency[char]++;
        }
    }

    for (let i = 0; i < str.length; i++) {
        const char = str[i];
        if (charFrequency[char] === 1) {
            console.log(char)
            return char;
        }
    }
    return null;
}

findFirstNonRepeatedChar('abcbbbbrrr')