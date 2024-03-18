// TODO: Include packages needed for this application
const fs = require("fs");
const inquirer = require("inquirer");
const generateMarkdown = require("./utils/generateMarkdown");




// TODO: Create an array of questions for user input
const InquirerQuestions = [

       
        {
          type: 'input',
          message: 'Your-Project-Title?',
          name: 'project title',
        },
        {
            type: 'input',
            message: 'What was your motivation?',
            name: 'motivation',
          },
        {
          type: 'input',
          message: 'Provide a short description explaining the what, why, you built this project?',
          name: 'Description',
        },
        {
            type: 'input',
            message: 'What problem does it solve?',
            name: 'solution',
          },
          {
            type: 'input',
            message: 'What are the steps required to install your project?',
            name: 'installation process',
          },
          {
            type: 'input',
            message: 'what are the features of this app?',
            name: 'features',
          },
          {
            type: 'input',
            name: 'githubUsername',
            message: 'What is your GitHub username?',
        },
        {
            type: 'input',
            name: 'linkedin',
            message: 'What is your linkedin username?',
        },

        {
            type: "list",
            name: "licensecategory",
            message: "pick a license",
            choices: 
            [
            "Eclipse Public License 1.0",
            "GNU GPL v3",
            "GNU GPL v2",
            "GNU AGPL v3",
            "GNU LGPL v3",
            "GNU FDL v1.3",
           
        ]
        },
      ];

// TODO: Create a function to write README file
function writeToFile(file, data) {
    fs.writeFile('readME', 'generateMarkdown', (error, data) =>
  error ? console.error(error) : console.log(data)
);
}


// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(InquirerQuestions)
    .then((data) => generateMarkdown(data));
        
}

// Function call to initialize app
init();


