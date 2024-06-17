function safeAccess(obj, prop) {
    try {
        return obj[prop]
    } catch (error) {
        if (error instanceof TypeError) {
            console.error(`Error: ${obj} is not an object or property ${prop} doesn't exist.`);
            return null
        } else {
            throw error
        }
    }
}