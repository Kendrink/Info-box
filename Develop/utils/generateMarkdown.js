// TODO: Create a function that 
//returns a license badge based on which license is passed in
function LicenseBagde(data) {
  
  if (data.license === "Eclipse Public License 1.0") {
    badge = `[![License](https://img.shields.io/badge/License-EPL_1.0-red.svg)](https://opensource.org/licenses/EPL-1.0)`
  }
  
  else if (data.license === `GNU GPL v3`) {
    badge = `[![License: GPL v3](https://img.shields.io/badge/License-GPLv3-blue.svg)](https://www.gnu.org/licenses/gpl-3.0)`
  } 
  
  else if (data.license === `GNU GPL v2`) {
    badge = `[![License: GPL v2](https://img.shields.io/badge/License-GPL_v2-blue.svg)](https://www.gnu.org/licenses/old-licenses/gpl-2.0.en.html)`
  }
  
  else if (data.license === `GNU AGPL v3`) {
    badge = `[![License: AGPL v3](https://img.shields.io/badge/License-AGPL_v3-blue.svg)](https://www.gnu.org/licenses/agpl-3.0)`
  } 
  
  else if (data.license === `GNU LGPL v3`) {
    badge = `[![License: LGPL v3](https://img.shields.io/badge/License-LGPL_v3-blue.svg)](https://www.gnu.org/licenses/lgpl-3.0)`
  }
  
  else if (data. license === `GNU FDL v1.3`) {
    badge = `[![License: FDL 1.3](https://img.shields.io/badge/License-FDL_v1.3-blue.svg)](https://www.gnu.org/licenses/fdl-1.3)`}

    else {
      badge = ''
} 
};
  
  























// If there is no license, return an empty string
function renderLicenseBadge(license) {}

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
    renderLicenseLink(data)
    renderLicenseSection(data)
    renderLicenseBadge(data)
    return `# ${data.title}  

`;
}

module.exports = generateMarkdown;
