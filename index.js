//npm init
// install dependencies - inquirer

//TODO: require all the dependencies I'll need - inquirer, fs
var fs = require("fs")
var inquirer = require("inquirer");
//TODO: array of questions for user
const questions = [
    //TODO: Title question
    Title: .prompt([
        {
          type: "input",
          message: "What is your user name?",
          name: "username"
        }

    //TODO: Description question

    //TODO: Table of Contents Question

    //TODO: Installation Question

    //TODO: Usage Question

    //TODO: License question

    //TODO: Contributing question

    //TODO: Tests question

    //TODO: Questions
];

//writing a readme in a markdown file

//TODO: Function that will generate the readme template

// function writeToFile(fileName, data) {
// }

//TODO: use inquirer to prompt users with questions

//TODO: Use answers that come back from inquirer - pass those into the generate readme function

//TODO: Write file using template generated from readme function

// function to initialize program
// function init() {

// }

// function call to initialize program
// init();

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your user name?",
      name: "username"
    },
    {
      type: "password",
      message: "What is your password?",
      name: "password"
    },
    {
      type: "password",
      message: "Re-enter password to confirm:",
      name: "confirm"
    }
  ])
  .then(function(response) {

    if (response.confirm === response.password) {
      console.log("Success!");
    }
    else {
      console.log("You forgot your password already?!");
    }
  });