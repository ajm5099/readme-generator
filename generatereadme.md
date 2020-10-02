module.exports=function generatereadme(response) {
    return `
# ${response.readme_title}

### Authors: 
Alex Milroy  
github: https://github.com/ajm5099/

## Table of contents:
${response.tableOfContents}

## List of Contents in this directory




## Project description
${response.readme_description}

## Installation instructions
${response.installation}

## How to use this application
${response.usage}

## Application License
${response.license}

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
${response.questions} 
    `
}