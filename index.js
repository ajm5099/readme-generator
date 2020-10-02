//TODO: require all the dependencies I'll need - inquirer, fs


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
        name: "tableOfContents",
        type: "input",
        message: "Please provide the table of contents text.",
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
            "MIT License",
            "GNU GPLv3",
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
        name: "questions",
        type: "checkbox",
        message: "Which methods can users use to contact you with questions?",
        choices: [
            "email",
            "phone",
            "github",
            "linkedin",
            "postal mail",
        ]
    },
];

//==============================================================================
//Asking the questions and writing the file
//==============================================================================

async function askQuestions() {
    let answers = await inquirer.prompt(questions);
    let answersString = await generateReadme(answers);
    await writeFileAsync("readme.md", answersString)
}

askQuestions();








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