// TODO: Include packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');

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
            type: 'input',
            name: 'quest8',
            message: 'Link to License',
        },
    ])
    .then((answers) => {
        const readmePageContent = generateREADME(answers);
        fs.writeFile("README.md", readmePageContent, (err) =>
        err ? console.log(err) : console.log('Seccess')
        );
    });
    const generateREADME = (answers) =>
    `#${answers.quest1}
    
    ## Installation
    
    ${answers.quest2}

    ## Usage
    
    ${answers.quest3}

    ## Credits

    ${answers.quest4}
    
    ${answers.quest5}
        
    ${answers.quest6}

    ## Contributing
    
    ${answers.quest7}
    
    ## License

    ${answers.quest8}`;
