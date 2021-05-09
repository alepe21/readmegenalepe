// TODO: Include packages needed for this application
var inquirer = require('inquirer')
var generateMarkdown = require('./generateMarkdown')
//standard library's fs module has a function to write files
fs = require('fs')

const fileName = 'README.md'

// TODO: Create an array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: "What's the name of your project?",
  },
  {
    type: 'input',
    name: 'description',
    message: 'Enter the description of your project',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Select the license type of your application?',
    choices: [
      'Apache 2.0 License',
      'Boost Software License 1.0',
      'BSD 3-Clause License',
      'BSD 2-Clause License',
      '',
    ],
    filter: function (val) {
      return val
    },
  },
  {
    type: 'input',
    name: 'installation',
    message: 'Enter the installation instructions',
  },
  {
    type: 'input',
    name: 'usage',
    message: 'Enter the usage instructions',
  },
  {
    type: 'input',
    name: 'credits',
    message: 'Enter the contribution guidelines',
  },
  {
    type: 'input',
    name: 'tests',
    message: 'Enter the test instructions',
  },
  {
    type: 'input',
    name: 'username',
    message: 'What is your github username?',
  },
  {
    type: 'input',
    name: 'email',
    message: 'What is your email address?',
  },
]

// TODO: Create a function to write README file
function writeToFile(fileName, data) {
  fs.writeFile(fileName, data, function (err) {
    if (err) return console.log(err)
    console.log(`# ${fileName} created`)
  })
}

// TODO: Create a function to initialize app
function init() {
  inquirer
    .prompt(questions)
    .then((answers) => {
      // Use user feedback for... whatever!!
      console.log(JSON.stringify(answers, null, '  '))
      const markdown = generateMarkdown(answers)
      writeToFile(fileName, markdown)
    })
    .catch((error) => {
      if (error.isTtyError) {
        // Prompt couldn't be rendered in the current environment
      } else {
        // Something else went wrong
      }
    })
}

// Function call to initialize app
init()
