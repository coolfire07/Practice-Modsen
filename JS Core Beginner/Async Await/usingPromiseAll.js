(async () => {
    const fetchModule = await import('node-fetch')
    const fetch = fetchModule.default

    async function fetchDataFromServer(url) {
        try {
            const response = await fetch(url)
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`)
            }
            const data = await response.json()
            return data
        } catch (error) {
            console.error(`Error fetching data from ${url}:`, error)
            throw error
        }
    }

    async function fetchDataFromMultipleServers(urls) {
        try {
            const promises = urls.map(url => fetchDataFromServer(url))
            const results = await Promise.all(promises)
            return results
        } catch (error) {
            console.error('Error fetching data from multiple servers:', error)
            throw error
        }
    }

    const urls = [
        'https://jsonplaceholder.typicode.com/posts/1',
        'https://jsonplaceholder.typicode.com/posts/2',
        'https://jsonplaceholder.typicode.com/posts/3'
    ]

    try {
        const dataFromServers = await fetchDataFromMultipleServers(urls)
        console.log('Received data from servers:', dataFromServers)
    } catch (error) {
        console.error('Failed to fetch data from multiple servers:', error)
    }
})()
