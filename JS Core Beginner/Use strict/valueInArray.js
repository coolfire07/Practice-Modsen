'use strict'

function isInArray(array, value) {
    for (let i = 0; i < array.length; i++) {
        if (array[i] == value) return true
        if (i == array.length - 1) return false
    }
}

//isInArray([1, 2, 3, 4, 5], 6)