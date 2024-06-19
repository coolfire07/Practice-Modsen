function generateRandomDelay() {
    return new Promise((resolve, reject) => {
        const randomNumber = Math.ceil(Math.random() * 10)

        setTimeout(() => {
            if (randomNumber >= 1 && randomNumber <= 5) {
                resolve(`Success! Generated number: ${randomNumber}`)
            } else {
                reject(`Error! Generated number: ${randomNumber}`)
            }
        }, randomNumber * 1000)
    })
}

generateRandomDelay()
    .then((message) => {
        console.log(message)
    })
    .catch((error) => {
        console.error(error)
    })
