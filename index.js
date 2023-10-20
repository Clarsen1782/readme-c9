// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'quest1',
            message: 'What is the Title?',
        },
        {
            type: 'input',
            name: 'quest2',
            message: 'How is the application installed?',
        },
        {
            type: 'input',
            name: 'quest3',
            message: 'How should it be used?',
        },
        {
            type: 'input',
            name: 'quest4',
            message: 'Where there any collaborators?',
        },
        {
            type: 'input',
            name: 'quest5',
            message: 'Where there any third-party assets?',
        },
        {
            type: 'input',
            name: 'quest6',
            message: 'Did you follow any tutorials?',
        },
        {
            type: 'input',
            name: 'quest7',
            message: 'Contributor Covenant?',
        },
        {
            type: 'checkbox',
            name: 'license',
            message: 'Check which License',
            choices: ['MIT', 'NONE'],
            validate: (generateMarkdown) => {
                if (generateMarkdown) {
                    return true;
                }
            }
        },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);
        fs.writeFile("README.md", readmePageContent, (err) =>
        err ? console.log(err) : console.log('Seccess')
        );
    });
    const generateREADME = (answers) =>
    `# ${answers.quest1}
  
    ## Description
    ${ }
    
    ## Installation
    ${answers.quest2}
    
    ## Usage
    ${answers.quest3}
    
    
    ## Contributing
    ${answers.quest4}
    ${answers.quest5}
    ${answers.quest6}
    ${answers.quest7}
    
    ## License
    ${data.license}`;


    /*const questions = [];
//Add type, name, and message for each question
//add questions: added sections (discription, usage, license, ect)

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}
//Use FS module to write data and file 

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();*/
