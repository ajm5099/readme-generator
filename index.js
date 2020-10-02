//==============================================================================
//Global Variables & Dependencies
//==============================================================================

//Dependencies
var fs = require("fs");
var inquirer = require("inquirer");
const util = require("util");
var generateReadme = require("./generatereadme.md");

//variables
const writeFileAsync = util.promisify(fs.writeFile);


//==============================================================================
//Questions to ask the user
//==============================================================================

//This holds all of the questions for the inquirer
const questions = [
    {
        name: "readme_title",
        type: "input",
        message: "What would you like the title of your document to be?",
    },
    {
        name: "readme_description",
        type: "input",
        message: "Please provide the description for your readme file.",
    },
    {
        name: "installation",
        type: "input",
        message: "Please provide the installation instructions for your application?",
    },
    {
        name: "usage",
        type: "input",
        message: "Please provide a description of how to use your application",
    },
    {
        name: "license",
        type: "list",
        message: "What type of license do you wish to utilize with your application",
        choices: [
            "MIT",
            "GPLv3",
        ]
    },
    {
        name: "contribute",
        type: "list",
        message: "Would you like to allow other developers to contribute to your application?",
        choices: [
            "Yes",
            "No",
        ]
    },
    {
        name: "tests",
        type: "input",
        message: "What tests can your users run to ensure your application is running correctly?",
    },
    {
        name: "github",
        type: "input",
        message: "What is your Github username?",
    },
    {
        name: "email",
        type: "input",
        message: "What is your email?",
    },
];

//==============================================================================
//Asking the questions and writing the file
//==============================================================================

async function askQuestions() {
    //tells the application to wait for all dependencies before asking questions
    let answers = await inquirer.prompt(questions);
    //waits for all answers to be complete before it starts the readme build function
    let answersString = await generateReadme(answers);
    //waits for previous process to complete before it writes user data to the readme file
    await writeFileAsync("readme.md", answersString)
}

askQuestions();