function calcSumOfSquares(arr) {
    let sum = 0
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i] * arr[i]
        console.log(sum)
    }
    console.log(sum)
    return sum
}
calcSumOfSquares([1, 2, 3, 4, 5, 6])