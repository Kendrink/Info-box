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
      ];

// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {}

// Function call to initialize app
init();
