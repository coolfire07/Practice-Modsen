function increaseValues(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] += arr[i] * 0.1
    }
    console.log(arr)
    return arr
}

increaseValues([1, 2, 3, 4, 5])