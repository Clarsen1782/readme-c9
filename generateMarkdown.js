const inquirer = require('inquirer');
const fs = require('fs');

// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license, link) {
  const licenseBadge = {
    'MIT': {
      label: 'MIT License',
      imgSrc: `![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`,
    },
    'Apache-2.0': {
      label: 'Apache License 2.0',
      imgSrc: '[![License](https://img.shields.io/badge/License-Apache_2.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)',
    },
    'ISC': {
      label: 'ISC License',
      imgSrc: '[![License: ISC](https://img.shields.io/badge/License-ISC-blue.svg)](https://opensource.org/licenses/ISC)',
    },
  };};


// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license, link) {
  if (license && link) {
    return `<a href="${licenseLink}" target="_blank">${licenseType}</a>`;
  } else {
    return 'No License Information Provided';
  }
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}
// creat a conditional to check if license exists
// Hint - call renderlicense function inside
// Call render badge & link
// return template literal for format


// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.title}`;
}

module.exports = generateMarkdown;
