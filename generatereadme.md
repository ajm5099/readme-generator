module.exports=function generatereadme(response) {
    return `
![License: ${response.license} ](https://img.shields.io/badge/License-${response.license}-yellow.svg)
# ${response.readme_title}

### Authors: 
Alex Milroy  

## Table of contents:
${response.tableOfContents}

## List of files in this directory




## Project description
${response.readme_description}

## Installation instructions
${response.installation}

## How to use this application
${response.usage}

## Application License
This application is goverened by the ${response.license} license.

## Is this application accepting contributions?
${response.contribute}

## User Stories

## Screenshot of Website

![Site Screenshot]()

![Site Screenshot]()


## Resources and Technologies Used


## Functionality Tests
${response.tests}
    
## How to contact the author:
github.com/${response.github}
github.com/${response.email}
`
}