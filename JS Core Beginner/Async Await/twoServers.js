async function fetchDataFromFirstServer(firstUrl) {
    try {
        const fetch = await import('node-fetch')
        const response = await fetch.default(firstUrl)

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        console.error('Error fetching data from first server:', error)
        throw error
    }
}

async function sendDataToSecondServer(secondUrl, data) {
    try {
        const fetch = await import('node-fetch')
        const response = await fetch.default(secondUrl, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(data)
        })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const responseData = await response.json()
        return responseData
    } catch (error) {
        console.error('Error sending data to second server:', error)
        throw error
    }
}

(async () => {
    const firstUrl = 'https://jsonplaceholder.typicode.com/posts/1'
    const secondUrl = 'https://jsonplaceholder.typicode.com/posts'

    try {
        const dataFromFirstServer = await fetchDataFromFirstServer(firstUrl)
        console.log('Received data from first server:', dataFromFirstServer)

        const responseDataFromSecondServer = await sendDataToSecondServer(secondUrl, dataFromFirstServer)
        console.log('Received response from second server:', responseDataFromSecondServer)
    } catch (error) {
        console.error('Failed to complete the operation:', error)
    }
})()
