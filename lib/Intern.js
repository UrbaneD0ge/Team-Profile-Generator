const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, schl) {
        super(name, id, email,"Intern");
        this.schl = schl;
    }
    getSchl() {
        return this.schl;
    }
}

module.exports = Intern;