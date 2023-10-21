// TODO: Include packages needed for this application

const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        type: 'input',
        name: 'title',
        message: 'What is the Title?',
    },
    {
        type: 'input',
        name: 'description',
        message: 'What is the description?',
    },
    {
        type: 'input',
        name: 'install',
        message: 'How is the application installed?',
    },
    {
        type: 'input',
        name: 'usage',
        message: 'How should the application be used?',
    },
    {
        type: 'input',
        name: 'con1',
        message: 'Where there any collaborators?',
    },
    {
        type: 'input',
        name: 'con2',
        message: 'Where there any third-party assets?',
    },
    {
        type: 'input',
        name: 'con3',
        message: 'Did you follow any tutorials?',
    },

];

// TODO: Create a function to write README file
function writeToFile(questions, data) {
    return fs.writeToFileSync(path.join(process.cwd(), questions), data);
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating');
        writeToFile('./readme.md', generateMarkdown(data))
    })
}

// Function call to initialize app
init();
