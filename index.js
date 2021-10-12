const inquirer = require('inquirer');
const jest = require('jest');
const fs = require('fs');
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const inquirify = () => {
    return inquirer
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
                      <h5 class="card-title text-center">Manager</h5>
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
        `
    }