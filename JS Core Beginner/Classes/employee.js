//Создайте класс «Сотрудник» со свойствами имени и зарплаты. Включите метод расчета
//годовой зарплаты. Создайте подкласс под названием «Менеджер», который
//наследуется от класса «Сотрудник» и добавляет дополнительное свойство для
//отдела. Переопределить метод расчета годовой зарплаты, чтобы включить бонусы
//для менеджеров. Создайте два экземпляра класса «Менеджер» и рассчитайте их годовую зарплату.

class Employee {
    constructor(name, salary) {
        this.name = name
        this.salary = salary
    }
    calcYearSalary() {
        return (this.salary * 12)
    }
}

class Manager extends Employee {
    constructor(name, salary, department) {
        super(name, salary)
        this.department = department
    }
    calcYearSalary() {
        return (this.salary * 12 * 1.15)
    }
}

const manager1 = new Manager('Alex', 5000, 'Management')
const manager2 = new Manager('John', 6000, 'Management')
console.log(manager1.calcYearSalary())
console.log(manager2.calcYearSalary())