async function fetchData(url) {
    try {
        const response = await fetch(url)
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }
        const data = await response.json()

        return data
    } catch (error) {
        console.error('Error fetching data:', error)
        throw error
    }
}

//example
(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    try {
        const data = await fetchData(url)
        console.log('Received data:', data)
    } catch (error) {
        console.error('Failed to fetch data:', error)
    }
})()
