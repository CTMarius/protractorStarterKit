# Protractor Demo
Basic setup to easily start writing automated UI tests for web applications and to integrate it into your pipeline.

### Components:

This setup uses Protractor in combination with Cucumber, Chai as a assertion library, Grunt as a task runner and the protractor-multiple-cucumber-html-reporter as a reporting library.

### Prerequisites: 

1. NodeJs: https://nodejs.org/en/download/

2. Webstorm or any other IDE: https://www.jetbrains.com/webstorm/download/

### Getting started:

1. Install NodeJS (and perhaps reboot your system)
2. Clone or download this repository. 
3. In the root folder of the project, open an command prompt with admin rights and run "npm install". 
4. Once step 2 is finished, run "npm install -g grunt-cli" in the command prompt. 
5. Run "grunt e2e" in the command line in order to run the tests or use the integrated grunt task runner in Webstorm. 
6. Reports will be generated in a temporary folder in the project root folder. Open the index.html to view them.

### Writing tests:

- Scenarios in the feature files. 
- Step definitions in the step definition files. 
- Page objects in the page objects files. 

### Configuring the tests:

Configurations are available in the protractorConf.js and Gruntfile.js. You can decide how to configure your tests, either using tags, or creating different grunt tasks to run different tests. You can choose to run on firefox or chrome based on the protractorConf.js file.

One way of configuring it is by creating different protractorConf.js for each browser and then configuring separate tasks in the Gruntfile.js that make use of the two protractor config files. You can then call those grunt tasks from the command line in your pipeline. Should work the same way in TeamCity, Azure etc.

Structure may vary based on the project, number of pages, number of scenarios etc. Use the gherkin reference page in order to find out how to write smarter scenarios: https://cucumber.io/docs/gherkin/reference/

### TODO:
- turn username and password into command line parameters.
- setup more example configurations.
- add a helper functions or utils layer and page actions to enable users to write cleaner step definitions.
- add functions for the following utilities: pdf, xml, json, xls reading and comparisson.
- add multi browser support.
- log performance metrics.
- add mobile integration.
- expand the testing examples.

### Documentation:

Protractor API: https://www.protractortest.org/#/api

Chai API: https://www.chaijs.com/api/

Cucumber: https://cucumber.io/docs/gherkin/reference/

Xpath cheatsheet: https://devhints.io/xpath

Classes, properties, constructors explained: https://www.typescriptlang.org/docs/handbook/classes.html

Async/Await explained: https://levelup.gitconnected.com/understand-async-await-in-typescript-in-only-a-few-minutes-dedb5a18a2c

This keyword explained: https://www.youtube.com/watch?v=Pi3QC_fVaD0

Arrow functions: https://www.youtube.com/watch?v=4N-L3Mmzu0Y

Grunt: https://gruntjs.com/

TypeScript: https://www.typescriptlang.org/docs/handbook/typescript-from-scratch.html

Selenium: https://www.selenium.dev/
