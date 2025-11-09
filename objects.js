// basic class structure
class Person {
    constructor(name) {
        this.name = name;
    }
    toString() {
        return "You are " + this.name
    }
}

// class inheritance
class Employee extends Person {
    constructor(name, job, salary) {
        super(name);
        this.job = job;
        this.salary = salary;
    }
    toString() {
        return this.name + " works as a " + this.job;
    }
    payday() {
        return this.name + ", you just got paid $" + this.salary;
    }
    raise() {
        this.salary = this.salary += 100;
        return "You got a raise!";
    }

}

const employee = new Employee("Sally", "librarian", 500);
console.log(employee.toString());
console.log(employee.payday());
console.log(employee.raise());
console.log(employee.payday());