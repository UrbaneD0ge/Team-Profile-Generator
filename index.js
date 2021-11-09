const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');

// classes
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern')

const writeFileAsync = util.promisify(fs.writeFile);
let employees = [];
let ids = [];

// Employee Questions
const EmpQ = [
    {
    type: 'input',
    name: 'name',
    message: 'What is the first employee\'s name?'
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
    type: 'list',
    name: 'role',
    message: 'What role does this employee have?',
    choices: ['Engineer', 'Intern', 'Manager']
    }
];

// Question sets for the specific employee classes
manQ = [
    {
        type: 'input',
        name: 'offc',
        message: 'What is their office number?',
    }
];

engQ = [
    {
        type: 'input',
        name: 'gitH',
        message: 'What is their GitHub u/n?'
    }
];

intQ = [
    {
        type: 'input',
        name: 'scol',
        message: 'What is their school?'
    }
];

function generateHTML(answers) {
    return `<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/css/bootstrap.min.css" integrity="sha384-uWxY/CJNBR+1zjPWmfnSnVxwRheevXITnMqoEIeG1LJrdI0GlVs/9cVSyPYXdcSF" crossorigin="anonymous">
        <link rel="stylesheet" href="style.css">
        <title>Team Profile</title>
    </head>
    <header class="h1 bg-dark text-light text-center">
        Team Profile GO:
    </header>
    <body class="bg-lt">
        <div class="container">
        <div class="row row-cols-3">
            <div class="col my-2">
                <div class="card card-body bg-dark">
                    <h5 class="card-title text-light text-center">${answers.role}</h5>
                    <ul class="list-group list-group">
                    <li class="list-group-item">${answers.name}</li>
                    <li class="list-group-item">${answers.email}</li>
                    <li class="list-group-item">${answers.offc}</li>
                </div>        
            </div>
    
        </div>
        </div>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.1.2/dist/js/bootstrap.min.js" integrity="sha384-PsUw7Xwds7x08Ew3exXhqzbhuEYmA2xnwc8BuD6SEr+UmEHlX8/MCltYEodzWA4u" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
};

// Declare init fn
const init = () => {
    console.log('TeamProfileGO! \n ****************\n')
    newEmpl()
}

// add employees fn
const newEmpl = async () => {
    await inquirer.prompt(EmpQ)
    .then((response) => {
        let name = response.name;
        let id = response.id;
        let email = response.email;
        let role  = response.role;
        let offc;
        let gitH;
        let schl;
        
        if (role === "Manager") {
            inquirer.prompt(manQ).then((response) => {
                offc = response.offc;
                let employee = new Manager(name, id, email, offc);
                employees.push(employee);
                addEmpl(employees);
            });
        }
        if (role === "Engineer") {
            inquirer.prompt(engQ).then((response) => {
                gitH = response.gitH;
                let employee = new Engineer(name, id, email, gitH);
                employees.push(employee);
                addEmpl(employees);
            });
        }
        if (role === "Intern") {
            inquirer.prompt(intQ).then((response) => {
                schl = response.schl;
                let employee = new Intern(name, id, email, schl);
                employees.push(employee);
                addEmpl(employees);
            });
        }
    });
};

// Looping addEmpl questions
const addEmpl = async (array) => {
    await inquirer
        .prompt([
            {
            type: 'list',
            name: 'addl',
            message: 'Would you like to add another team member, or finish building your team?',
            choices: ['Add another team member..', 'I\'m finished!']
            }
        ])
        .then(async (response) => {
        var newEmpl = response.addl;
            if (await newEmpl === 'Add another team member..') {
                newEmpl();
            } else {
                fs.writeFile('./dist/index.html', generateHTML(array), console.error)
                console.log("TeamProfile is GO!");
            }
        });
};

init();