# Protractor Demo
Basic setup to easily start writing automated UI tests for web applications.

### Components:

This setup uses Protractor in combination with Cucumber, Chai as a assertion library, Grunt as a task runner and the protractor-multiple-cucumber-html-reporter as a reporting library.

### Prerequisites: 

1. NodeJs: https://nodejs.org/en/download/

2. Webstorm or any other IDE: https://www.jetbrains.com/webstorm/download/#section=windows

### Getting started:

1. Install NodeJS (and perhaps reboot your system)
2. Clone or download the repository. 
3. In the root folder of the project, open a command prompt and run "npm install". (If you are using Webstorm, open a terminal window in Webstorm after cloning and opening the project and use that one instead of the cmd).
4. Once step 2 is finished, run "npm install -g grunt-cli" in the command prompt. 
5. Run "grunt e2e" in the command line in order to run the tests or use the integrated grunt task runner in Webstorm. 
6. Reports will be generated in a temporary folder in the project root folder. Open the index.html to view them.

### Writing tests:

- Scenarios go in the feature files. 
- Step definitions in the step definition files. 
- Page objects in the page objects files. 

Structure may vary based on the project, number of pages, number of scenarios etc. Use the gherkin reference page in order to find out how to write smarter scenarios: https://cucumber.io/docs/gherkin/reference/

### Documentation:

Protractor API: https://www.protractortest.org/#/api

Chai API: https://www.chaijs.com/api/

Cucumber: https://cucumber.io/docs/gherkin/reference/

Xpath cheatsheet: https://devhints.io/xpath

Async/Await explained: https://levelup.gitconnected.com/understand-async-await-in-typescript-in-only-a-few-minutes-dedb5a18a2c

This keyword explained: https://www.youtube.com/watch?v=Pi3QC_fVaD0

Arrow functions: https://www.youtube.com/watch?v=4N-L3Mmzu0Y

Grunt: https://gruntjs.com/

TypeScript: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

Selenium: https://www.selenium.dev/

