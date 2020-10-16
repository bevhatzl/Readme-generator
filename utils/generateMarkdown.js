// To get the correct license icon based on user selection
function getLicenseIcon(license) {
    const apache = "[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)";
    const boost = "[![License](https://img.shields.io/badge/License-Boost%201.0-lightblue.svg)](https://www.boost.org/LICENSE_1_0.txt)";
    const eclipse = "[![License](https://img.shields.io/badge/License-EPL%201.0-red.svg)](https://opensource.org/licenses/EPL-1.0)";

    if (license === "Apache 2.0 License") {
        return apache;
    } else if (license === "Boost Software License 1.0") {
        return boost;
    } else {
        return eclipse;
    }
}

// function to generate markdown for README
function generateMarkdown(data) {
    return `# ${data.title}
${getLicenseIcon(data.license)}
## Description
${data.description}
# Table of Contents
* [Installation](#installation)
* [Usage](#usage)
* [License](#license)
* [Contributing](#contributing)
* [Tests](#tests)
* [Questions](#questions)
               
## Installation
${data.installInfo}
## Usage
${data.usage}
## License
${data.license}
## Contributing
${data.contrib}
## Tests
${data.test}
## Questions
View my GitHub profile at: <a href="https://github.com/${data.username}">https://github.com/${data.username}/</a>
Contact me by email for additional questions with ${data.title} in the subject line: ${data.email}`;
}

module.exports = generateMarkdown;
