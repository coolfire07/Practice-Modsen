function calcSumOfHalf(arr) {
    let sum = 0
    for (let i = 0; i < arr.length / 2; i++) {
        sum += arr[i]
    }
    console.log(sum)
    return sum
}
calcSumOfHalf([1, 2, 3, 4, 5, 6])