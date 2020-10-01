//TODO: require all the dependencies I'll need - inquirer, fs
var fs = require("fs")
var inquirer = require("inquirer");
//npm init
// install dependencies - inquirer

//==============================================================================
//Global Variables
//==============================================================================
let content = [];

//==============================================================================
//Application initilization
//==============================================================================

const startApp = () => {
    inquirer
        .prompt([
            {
                type: "list",
                message: "Would you like to create a new readme file?",
                name: "start",
                choices: ["Create new readme", "Exit"]
            },
        ])
        .then((res) => {
            if (res.start === "exit") {
                return;
            } else {
                getTitle();
            }
        });
};

//==============================================================================
//Questions and user input
//==============================================================================

//get the title of the document
const getTitle = () => {
    inquirer
        .prompt([
            {
                name: "readme_title",
                type: "input",
                message: "What would you like the title of your document to be?",
            },
        ])
        .then((res) => {
            content.title = res.readme_title;
            getDescription();
        });
};

//get the description of the document
const getDescription = () => {
    inquirer
        .prompt([
            {
                name: "readme_description",
                type: "input",
                message: "Please provide the description for your readme file.",
            },
        ])
        .then((res) => {
            content.description = res.readme_description;
            getTableContent();
        });
};

//get the table of contents
const getTableContent = () => {
    inquirer
        .prompt([
            {
                name: "tableOfContents",
                type: "input",
                message: "Please provide the table of contents text.",
            },
        ])
        .then((res) => {
            content.toc = res.tableOfContents;
            getInstallQuestions();
        });
};

const getInstallQuestions = () => {
    inquirer
        .prompt([
            {
                name: "installation",
                type: "input",
                message: "Please provide the installation instructions for your application?",
            },
        ])
        .then((res) => {
            content.installation = res.installation;
            getUsage();
        });
};

const getUsage = () => {
    inquirer
        .prompt([
            {
                name: "howToUse",
                type: "input",
                message: "Please provide a description of how to use your application",
            },
        ])
        .then((res) => {
            content.usage = res.howToUse;
            getLicense();
        });
};

const getLicense = () => {
    inquirer
        .prompt([
            {
                name: "license",
                type: "list",
                message: "What type of license do you wish to utilize with your application",
                choices: [
                    "MIT License",
                    "GNU GPLv3",
                ]
            },
        ])
        .then((res) => {
            content.license = res.license;
            getContributing();
        });
};

const getContributing = () => {
    inquirer
        .prompt([
            {
                name: "contribute",
                type: "list",
                message: "Would you like to allow other developers to contribute to your application?",
                choices: [
                    "Yes",
                    "No",
                ]
            },
        ])
        .then((res) => {
            content.contributing = res.contribute;
            getTests();
        });
};

const getTests = () => {
    inquirer
        .prompt([
            {
                name: "howToUse",
                type: "input",
                message: "What tests can your users run to ensure your application is running correctly?",
            },
        ])
        .then((res) => {
            content.tests = res.howToUse;
            getQuestions();
        });
};

const getQuestions = () => {
    inquirer
        .prompt([
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
        ])
        .then((res) => {
            content.questions = res.questions;
            console.log(content);
        });
};
startApp();





/*
inquirer.prompt([
    //TODO: Title question
    {
        type: "input",
        message: "What would you like the title of your document to be?",
        name: "title",
    },

    //TODO: Description question
    {
        type: "input",
        message: "Please provide the description for your readme file.",
        name: "readmeDescription",
    },
    //TODO: Table of Contents Question
    {
        type: "input",
        message: "Please provide the table of contents text.",
        name: "tableOfContents",
    },
    //TODO: Installation Question
    {
        type: "input",
        message: "Please provide the installation instructions for your application?",
        name: "installation",
    },
    //TODO: Usage Question
    {
        type: "input",
        message: "Please provide a description of how to use your application",
        name: "howToUse",
    },
    //TODO: License question
    {
        type: "list",
        message: "What type of license do you wish to utilize with your application",
        name: "license",
        choices: [
            "MIT License",
            "GNU GPLv3",
        ]
    },
    //TODO: Contributing question
    {
        type: "list",
        message: "Would you like to allow other developers to contribute to your application?",
        name: "contribute",
        choices: [
            "Yes",
            "No",
        ]
    },
    //TODO: Tests question
    {
        type: "input",
        message: "What tests can your users run to ensure your application is running correctly?",
        name: "howToUse",
    },

    //TODO: Questions
    {
        type: "checkbox",
        message: "Which methods can users use to contact you with questions?",
        name: "questions",
        choices: [
            "email",
            "phone",
            "github",
            "linkedin",
            "postal mail",
        ]
    }

    //writing a readme in a markdown file
]).then(function (data) {

    var filename = data.title.toLowerCase().split(' ').join('') + ".md";

    fs.writeFile(filename, JSON.stringify(data, null, '\t'), function (err) {

        if (err) {
            return console.log(err);
        }

        console.log("Success!");

    });
});
*/


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