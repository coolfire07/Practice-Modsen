function checkInteger(num) {
    if (!Number.isInteger(num)) {
        throw new Error("Parameter must be an integer")
    }
    return num
}

try {
    let result = checkInteger(42)
    console.log(result)

    result = checkInteger(3.14)
} catch (error) {
    console.error(error.message)
}