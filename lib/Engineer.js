const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitH) {
        super(name, id, email,"Engineer");
        this.gitH = gitH;
    }
    getGitHub() {
        return this.gitH;
    }
}

module.exports = Engineer;