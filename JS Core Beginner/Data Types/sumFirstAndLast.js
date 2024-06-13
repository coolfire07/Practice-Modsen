function calcSum(number) {
    let str = String(number)
    let first = str[0]
    let last = str[str.length - 1]
    let sum = Number(first) + Number(last)
    console.log(sum)
    return sum
}
calcSum(123)