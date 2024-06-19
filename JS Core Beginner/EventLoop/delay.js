function delayCallback(callback) {
    setTimeout(callback, 2000)
}

function myCallback() {
    console.log('Callback is called after a delay of 2 seconds')
}

delayCallback(myCallback);
