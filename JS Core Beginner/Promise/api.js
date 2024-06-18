async function fetchDataFromMultipleApis(apiUrls) {
    try {
        const promises = apiUrls.map(async (url) => {
            const response = await fetch(url);
            const data = await response.json();
            return data;
        });

        const results = await Promise.all(promises);
        return results.reduce((combinedData, dataFromApi) => {
            return { ...combinedData, ...dataFromApi };
        }, {});
    } catch (error) {
        console.error("Error fetching data from APIs:", error);
        throw error;
    }
}

const apiUrls = [
    "https://jsonplaceholder.typicode.com/posts",
    "https://jsonplaceholder.typicode.com/comments",
    "https://jsonplaceholder.typicode.com/albums",
];

fetchDataFromMultipleApis(apiUrls)
    .then((combinedData) => {
        console.log("Combined data:", combinedData);
    })
    .catch((error) => {
        console.error("Error:", error);
    });