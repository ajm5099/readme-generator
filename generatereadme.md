module.exports=function generatereadme(response) {
    return `
![License: ${response.license} ](https://img.shields.io/badge/License-${response.license}-yellow.svg)
# ${response.readme_title}

## Authors: 
Alex Milroy  

## Table of contents:
* [Files](#Files)
* [Description](#Description)
* [Installation](#Installation)
* [Uses](#Uses)
* [License](#License)
* [Contributions](#Contributions)
* [Tests](#Tests)
* [Contact](#Contact)

## Files

## Description
${response.readme_description}

## Installation
${response.installation}

## Uses
${response.usage}

## License
This application is goverened by the ${response.license} license.

## Contributions
${response.contribute}

## Tests
${response.tests}
    
## Contact:
github.com/${response.github}
github.com/${response.email}
`
}