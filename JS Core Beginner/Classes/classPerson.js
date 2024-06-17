class Person {
    constructor(name, age, country) {
        this.name = name
        this.age = age
        this.country = country
    }
    showInfo() {
        return `Name: ${this.name}\nAge: ${this.age}\nCountry: ${this.country}`;
    }
}

const person1 = new Person('Ivan', 22, 'Belarus')
const person2 = new Person('Anna', 20, 'Belarus')

console.log(person1.showInfo())
console.log(person2.showInfo())
