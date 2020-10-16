const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const chalk = require("chalk");
const generateMarkdown = require('./utils/generateMarkdown.js');

const writeFileAsync = util.promisify(fs.writeFile);

// Object constructor function for the user input questions
function Question(message, name) {
    this.type = "input";
    this.prefix = chalk.yellow('✨');
    this.message = message;
    this.name = name;
}

// Creating instances of the Question object
let titleQ = new Question("What is the title of your project?", "title");
let descriptionQ = new Question("Description of your project:", "description");
let installQ = new Question("What are the installation instructions?", "installInfo");
let usageQ = new Question("What does the user need to know about running your app?", "usage");
let contribQ = new Question("What does the user need to know about contributing?", "contrib");
let testQ = new Question("What are the test instructions?", "test");
let gitHubUserQ = new Question("What is your GitHub username?", "username");
let emailQ = new Question("What is your email address?", "email");
// Create the license question from a list
let licenseQ = {
    type: "list",
    prefix: chalk.yellow('✨'),
    message: "Which license applies to your app?",
    name: "license",
    choices: [
        "Apache 2.0 License",
        "Boost Software License 1.0",
        "Eclipse Public License 1.0"
    ]
}

// array of questions for user
const questions = [
    titleQ, descriptionQ, installQ, usageQ, contribQ, testQ, gitHubUserQ, emailQ, licenseQ
];

function promptUser() {
    return inquirer.prompt(questions);
}

// function to initialize program
async function init() {
    console.log(chalk.green.inverse("Welcome to the good readme generator."));
    try {
        const answers = await promptUser();
        const mdGenerated = generateMarkdown(answers);
        await writeFileAsync("./utils/README.md", mdGenerated);
        console.log(chalk.green.inverse("Successfully created a readme file located in the utils folder!"));
    } catch (err) {
        console.log(err);
    }
}

// function call to initialize program
init();