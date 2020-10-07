# Protractor Demo
Basic setup to easily start writing automated UI tests for Angular applications.

Prerequisites: NodeJs, Webstorm or any other IDE

Components:

This setup uses Protractor in combination with Cucumber, Chai as a assertion library, Grunt as a task runner and the protractor-multiple-cucumber-html-reporter as a reporting library.

Getting started:

- Install NodeJS. 
- Clone or download the repository. 
- In the root folder run "npm install" and "npm install -g grunt-cli". 
- Run "grunt e2e" in the command line in order to run the tests or use the integrated grunt runner. 
- Reports will be generated in a temporary folder in the project root folder. Open the index.html to view them.

Writing tests:

- Scenarios in the feature files. 
- Step definitions in the step definition files. 
- Page objects in the page objects files. 

Structure may vary based on the project, number of pages, number of scenarios etc. Use the gherkin reference page in order to find out how to write smarter scenarios: https://cucumber.io/docs/gherkin/reference/


TODO: configure variables for baseUrl and login credentials that can be passed via the command line.
----------------------------



