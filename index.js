const inquirer = require('inquirer');
const jest = require('jest');

inquirer
    .prompt[
        {
        type: 'input',
        name: 'name',
        message: 'What is the team manager\'s name?'
        },
        {
        type: 'input',
        name: 'id',
        message: 'What is their ID?',
        },
        {
        type: 'input',
        name: 'email',
        message: 'What is their email address?',
        },
        {
        type: 'input',
        name: 'offc',
        message: 'What is their office number?',
        },
        {
        type: 'list',
        name: 'addl',
        message: 'Would you like to add an engineer or an intern, or finish building your team?',
        choices: ['Add an intern..', 'Add an engineer..', 'I\'m finished!']
        }
    ]