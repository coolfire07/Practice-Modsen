function fetchUrls(urls) {
    return Promise.all(urls.map(fetchUrl));
}

function fetchUrl(url) {
    return fetch(url)
        .then((response) => response.text())
        .catch((error) => {
            console.error(`Error with ${url}:`, error);
            return null;
        });
}

const urls = [
    "https://www.youtube.com",
    "https://www.google.com",
    "https://www.invalid-url.com",
];

fetchUrls(urls)
    .then((contents) => {
        contents.forEach((content, index) => {
            if (content) {
                console.log(`Content ${urls[index]}:`, content)
            } else {
                console.error(`Failed to load ${urls[index]}`)
            }
        });
    })
    .catch((error) => {
        console.error("Error:", error)
    });