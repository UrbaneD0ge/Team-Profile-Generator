const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, schl) {
        super(name, id, email);
        this.schl = schl;
    }
    getRole() {
        return "Intern";
    }
    getSchl() {
        return this.schl;
    }
}

module.exports = Intern;