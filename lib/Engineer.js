const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitH) {
        super(name, id, email);
        this.gitH = gitH;
    }
    getRole() {
        return "Engineer";
    }
    getGitHub() {
        return this.gitH;
    }
}

module.exports = Engineer;