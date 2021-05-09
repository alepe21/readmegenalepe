var os = require('os')
// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {
  //
  let licenseLink = ''
  if (license == 'Apache 2.0 License') {
    licenseLink =
      '[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)'
  } else if (license == 'Boost Software License 1.0') {
    licenseLink =
      '[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)'
  } else if (license == 'BSD 3-Clause License') {
    licenseLink =
      '[![License](https://img.shields.io/badge/License-BSD%203--Clause-blue.svg)](https://opensource.org/licenses/BSD-3-Clause)'
  } else if (license == 'BSD 2-Clause License') {
    licenseLink =
      '[![License](https://img.shields.io/badge/License-BSD%202--Clause-orange.svg)](https://opensource.org/licenses/BSD-2-Clause)'
  } else {
    licenseLink = ''
  }
  return licenseLink
}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license) {
    return `# ${license}
${renderLicenseLink(license)}
`
  }
  return ''
}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `${renderLicenseSection(data.license)}# ${data.title}
## Description
${data.description}

## Table of Contents
1. [Installation](## Installation)
2. [Usage](## Usage)
3. [Tests](## Tests)
4. [Credits](## Credits)
5. [Questions](## Questions)

## Installation
${data.installation}

## Usage
${data.usage}

## Tests
${data.tests}

## Credits
${data.credits}

## Questions
What is the Github profile of the author?<br>
[https://github.com/${data.username}](https://github.com/${data.username})<br>
What is the email address of the author?<br>
<${data.email}>
`
}

module.exports = generateMarkdown
