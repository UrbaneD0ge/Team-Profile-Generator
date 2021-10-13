const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, offc) {
        super(name, id, email)
        this.offc = offc;
    }
}

const Manager = new Employee