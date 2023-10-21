const inquirer = require('inquirer');
const fs = require('fs');


// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license !== 'none') {
    // Use encodeURIComponent to properly encode the license value in the URL
    const encodedLicense = encodeURIComponent(license);
    return `![GitHub license](https://img.shields.io/badge/License-${encodedLicense}-yellow.svg)`;
  }
  return '';
}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function generateLicenseLink() {
  if (license !== 'none') {
    return '\n* [License](#license)\n';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `## License

Licensed under the ${license} license.`;
  }
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}
    ## Description
    ${data.description}
    ## Installation
    ${data.install}
    ## Usage
    ${data.used}
    ## Contributing
    ${data.collaborators}
    ${data.third-party}
    ${data.tutorials}
    ## License
    ${renderLicenseSection(data.license)}`;
}

module.exports = generateMarkdown;