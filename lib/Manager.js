const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, offc) {
        super(name, id, email,"Manager");
        this.officeNumber = offc;
    }

    getRole() {
        return "Manager";
    }
}

module.exports = Manager;