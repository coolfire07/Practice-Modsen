function hasEquivals(obj1, obj2) {
    const keys1 = Object.keys(obj1);
    const keys2 = Object.keys(obj2);
    let result
    if (keys1.length !== keys2.length) {
        return false;
    }

    for (let key of keys1) {
        if (obj1[key] == obj2[key]) {
            result = true
            console.log(result)
            return true;
        }
    }
    result = false
    console.log(result)
    return false;
}
const obj1 = { 'z': 'zzz', 'number': 3, 'yes': true }
const obj2 = { 'z': 'zz', 'number': 3, 'yes': false }

hasEquivals(obj1, obj2)
