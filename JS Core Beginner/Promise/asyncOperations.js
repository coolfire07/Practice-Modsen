function runAsyncOperations(operations) {
    return operations.reduce((promise, operation) => {
        return promise.then(() => operation());
    }, Promise.resolve());
}

function fetchData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data received");
            resolve();
        }, 2000);
    });
}

function processData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data processed");
            resolve();
        }, 1000);
    });
}

function saveData() {
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log("Data saved");
            resolve();
        }, 1500);
    });
}

const operations = [fetchData, processData, saveData];

runAsyncOperations(operations)
    .then(() => {
        console.log("All operations are completed");
    })
    .catch((error) => {
        console.error("Error:", error);
    });