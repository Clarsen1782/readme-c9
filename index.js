// TODO: Include packages needed for this application

const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');
const inquirer = require('inquirer');
// TODO: Create an array of questions for user input
const questions = [
    {
        question: 'What is the Title?',
        variable: 'title',
    },
    {
        question: 'What is the description?',
        variable: 'description',
    },
    {
        question: 'How is the application installed?',
        variable: 'installed',
    },
    {
        question: 'How should the application be used?',
        variable: 'used',
    },
    {
        question: 'Where there any collaborators?',
        variable: 'collaborators',
    },
    {
        question: 'Where there any third-party assets?',
        variable: 'third-party',
    },
    {
        question: 'Did you follow any tutorials?',
        variable: 'tutorials',
    },
];

// TODO: Create a function to write README file
function writeToFile(questions) {
    return fs.writeToFileSync(path.join(process.cwd(), questions));
}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then((responses) => {
        console.log('Creating');
        writeToFile('./readme.md', generateMarkdown(data.title))
    })
}

// Function call to initialize app
init();
