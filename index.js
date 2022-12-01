// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create an array of questions for user input
const questions = ['What is your project title?','What is your project description?', 'What are the installation instructions?', 'What is the usage information?', 'What are the contribution guidelines?', 'What are the test instructions?'];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

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
    type: 'input',
    name: 'contribution',
    message: questions[4],
},
{
    type: 'input',
    name: 'test',
    message: questions[5],
}

])
.then((answers)=> {
    const htmlPageContent = generateHTML(answers);
    fs.writeFile(README.md), htmlPageContent, (err) =>
    err ? console.log(err) : console.log('All set!')
}

)


}

// Function call to initialize app
init();
