const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, offc) {
        super(name, id, email);
        this.offc = offc;
    }
    getRole() {
        return "Manager";
    }

    getOfficeNumber() {
        return this.offc;
    }
}

module.exports = Manager;