const Employee = require('./Employee');

class Engineer extends Employee {
    constructor (name, id, email, gitH) {
        super(name, id, email,"Engineer");
        this.github = gitH;
    }
    getGithub() {
        return this.github;
    }
    getRole() {
        return "Engineer";
    }
}

module.exports = Engineer;