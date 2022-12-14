// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown');


// const generateHTML = ({ title, description, installation, usage }) =>
//   `<!DOCTYPE html>
// <html lang="en">
// <head>
//   <meta charset="UTF-8">
//   <meta http-equiv="X-UA-Compatible" content="ie=edge">
//   <title>Document</title>
// </head>
// <body>
//   <div class="jumbotron jumbotron-fluid">
//   <div class="container">
//     <h1 class="display-4">Hi! My name is ${title}</h1>
//     <p class="lead">I am from ${description}.</p>
//     <h3>Example heading <span class="badge badge-secondary">Contact Me</span></h3>
//     <ul class="list-group">
//       <li class="list-group-item">My GitHub username is ${installation}</li>
//       <li class="list-group-item">LinkedIn: ${usage}</li>
//     </ul>
//   </div>
// </div>
// </body>
// </html>`;

// TODO: Create an array of questions for user input
const questions = ['What is your project title?','What is your project description?', 'What are the installation instructions?', 'What is the usage information?', 'What is the license information?', 'What are the contribution guidelines?', 'What are the test instructions?', 'What is your GitHub Username?', 'What is your email?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
    fs.writeFile('utils/README.md', `${process.argv[2]}\n`, (err) =>
    // TODO: Describe how this ternary operator works
    err ? console.error(err) : console.log('Commit logged!')
  );

}

// TODO: Create a function to initialize app
function init() {
inquirer
.prompt([
    {
    type: 'input',
    name: 'title',
    message: questions[0],

},
{
    type: 'input',
    name: 'description',
    message: questions[1],
},
{
    type: 'input',
    name: 'installation',
    message: questions[2],
},
{
    type: 'input',
    name: 'usage',
    message: questions[3],
},

{
    type: 'list',
    name: 'license',
    message: questions[4],
    choices: [
        'Apache License 2.0',
        'GNU General Public License v3.0',
        'MIT License',
        'BSD 2-Clause "Simplified" License',
        'BSD 3-Clause "New" or "Revised" License',
        'Boost Software License 1.0',
        'Creative Commons Zero v1.0 Universal',
        'Eclipse Public License 2.0',
        'GNU Affero General Public License v3.0',
        'GNU General Public License v2.0',
        'GNU Lesser General Public License v2.1',
        'Mozilla Public License 2.0',
        'The Unlicense',
        'Wallet',
        'Normal Transaction',
        'Arbitrage'
    ]
},

{
    type: 'input',
    name: 'contribution',
    message: questions[5],
},
{
    type: 'input',
    name: 'test',
    message: questions[6],
},

{
    type: 'input',
    name: 'github',
    message: questions[7],
},

{
    type: 'input',
    name: 'email',
    message: questions[8],
}

])
.then((answers)=> {

    fs.writeFile('./utils/README.md', generateMarkdown(answers), (err) =>
    err ? console.error(err) : console.log('Commit logged!')
  );
}
)
}

//     // const htmlPageContent = generateHTML(answers);
//     // fs.writeFile('utils/README.md'), htmlPageContent, (err) =>

//     fs.writeToFile('utils/README.md', 'text', (err) =>
//     err ? console.log(err) : console.log('All set!')
//     )
// }

// )


// }

// Function call to initialize app
init();
