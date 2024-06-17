class Recrangle {
    constructor(length, width) {
        this.length = length
        this.width = width
    }
    calcPerimeter() {
        return ((this.length + this.width) * 2)
    }
    calcArea() {
        return (this.length * this.width)
    }
}

const recrangle1 = new Recrangle(10, 15)
console.log(recrangle1.calcArea())
console.log(recrangle1.calcPerimeter())