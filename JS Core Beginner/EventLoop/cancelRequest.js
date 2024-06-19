async function fetchDataWithTimeout(url, timeout) {
    const controller = new AbortController()
    const signal = controller.signal

    const timeoutId = setTimeout(() => {
        controller.abort()
    }, timeout)

    try {
        const { default: fetch } = await import('node-fetch')
        const response = await fetch(url, { signal })

        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`)
        }

        const data = await response.json()
        return data
    } catch (error) {
        if (error.name === 'AbortError') {
            console.error('Request aborted due to timeout:', error)
        } else {
            console.error('Error fetching data:', error)
        }
        throw error
    } finally {
        clearTimeout(timeoutId)
    }
}

(async () => {
    const url = 'https://jsonplaceholder.typicode.com/posts/1'
    const timeout = 2000

    try {
        const data = await fetchDataWithTimeout(url, timeout)
        console.log('Received data:', data)
    } catch (error) {
        console.error('Failed to fetch data:', error)
    }
})()
