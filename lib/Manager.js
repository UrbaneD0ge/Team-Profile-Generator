const Employee = require('./Employee');

class Manager extends Employee {
    constructor (name, id, email, offc) {
        super(name, id, email,"Manager");
        this.offc = offc;
    }

    getOfficeNumber() {
        return this.offc;
    }
}

module.exports = Manager;