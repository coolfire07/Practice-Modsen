function repeatEvery(operation, interval) {
    let intervalId;

    function start() {
        intervalId = setInterval(operation, interval);
    }

    function stop() {
        clearInterval(intervalId);
    }

    return {
        start,
        stop
    };
}

const printHello = () => {
    console.log('Hello!');
};

const helloRepeater = repeatEvery(printHello, 2000);
helloRepeater.start();

setTimeout(() => {
    helloRepeater.stop();
}, 10000);