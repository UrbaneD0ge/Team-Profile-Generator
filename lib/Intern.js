const Employee = require('./Employee');

class Intern extends Employee {
    constructor (name, id, email, schl) {
        super(name, id, email,"Intern");
        this.school = schl;
    }
    getSchool() {
        return this.school;
    }
    getRole() {
        return "Intern";
    }
}

module.exports = Intern;