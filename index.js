// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./generateMarkdown');

// TODO: Create an array of questions for user input
inquirer
    .prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the Title?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'How is the application installed?',
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
    `# ${answers.title}
  
    ## Description
    ${answers.description}
    
    ## Installation
    ${answers.install}
    
    ## Usage
    ${answers.usage}
    
    
    ## Contributing
    ${answers.con1}
    ${answers.con2}
    ${answers.con3}
    
    ## License
    ${answers.license}`;


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
