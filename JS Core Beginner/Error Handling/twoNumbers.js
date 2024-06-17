function checkNumber(first, second) {
    if (second === 0) {
        throw new Error("The second number is zero")
    }
    return `Numbers: ${first}, ${second}`
}

try {
    let result = checkNumber(4, 9)
    console.log(result)

    result = checkNumber(3, 0)
} catch (error) {
    console.error(error.message)
}