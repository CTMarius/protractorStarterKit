# Protractor Demo (deprecated)

### Disclaimer 

As of April 2023 Protractor has reached end of life and no support or updates will be offered by the developers. 
This means this repo is also deprecated, I will start working on a Playwright version of this project is available on my profile. 

### Description:

This is basic setup to easily start writing automated UI tests for web applications and to integrate it into your pipeline.

### Components:

This setup uses Protractor in combination with Cucumber, Grunt as a task runner and the
protractor-multiple-cucumber-html-reporter as a reporting library. Chai was also added as an extra assertion library.

Protractor is an end-to-end test framework for Angular applications, but it can also be used for non-angular applications
by simply disabling the wait for angular. When used for Angular applications, protractor will
automatically wait until the page is fully loaded and will automatically execute the next step once all pending tasks
are done. Obviously this advantage is lost when using it to test non-angular applications, and you will have to revert
to using old-fashioned browser-waits.

### Prerequisites:

1. NodeJs: https://nodejs.org/en/download/

2. Any IDE of your choice

### Getting started:

1. Install NodeJS (and perhaps reboot your system)
2. Clone or download this repository.
3. In the root folder of the project, open a command prompt with admin rights and run "npm install".
4. Once step 3 is finished, run "npm i @types/node" followed by the "npm install grunt-cli -g" in the command prompt. You might need to restart your
   terminal after this is finished.
5. Run "grunt e2e --baseUrl= https://yoururl.com" in the command line terminal in order to run the tests or use the
   integrated grunt task runner your IDE.
6. Reports will be generated in a temporary folder in the project root folder. Open the index.html to view them.

   You can test this repo with the example tests againts a simple note taking app like this: grunt e2e --baseUrl=https://keen-ardinghelli-99a36b30.netlify.app/

### Writing tests:

- Scenarios and tests in the feature files.
- Step definitions in the step definition files.
- Page interactions in the page actions files.
- Page objects in the page objects files.

### Configuring the tests:

Configurations are available in the protractorConf.js and Gruntfile.js. You can decide how to configure your tests,
either using tags, or creating different grunt tasks to run different tests. You can choose to run on firefox or chrome
based on the protractorConf.js file.

One way of configuring it is by creating different protractorConf.js for each browser and then configuring separate
tasks in the Gruntfile.js that make use of the two protractor config files. You can then call those grunt tasks from the
command line in your pipeline. Should work the same way in TeamCity, Azure etc.

Structure may vary based on the project, number of pages, number of scenarios etc. Use the gherkin reference page in
order to find out how to write smarter scenarios: https://cucumber.io/docs/gherkin/reference/

### Documentation:

Protractor API: https://www.protractortest.org/

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
