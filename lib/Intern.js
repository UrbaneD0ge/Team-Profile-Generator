const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, schl) {
        super(name, id, email)
        this.schl = schl;
    }
}

const Intern = new Employee