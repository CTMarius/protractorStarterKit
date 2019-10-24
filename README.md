# Protractor Demo
Basic setup to easily start writing automated tests for Angular applications.

Prerequisites: NodeJs, Webstorm or any other IDE

Components:

This setup uses Protractor in combination with Cucumber, Chai as a assertion library, Grunt as a task runner and the protractor-multiple-cucumber-html-reporter as a reporting library.

Getting started:

Install NodeJS. Clone or download the repository. In the root folder run "npm install" and "npm install -g grunt-cli". Run grunt e2e in the cli in order to run the tests. Reports will be generated in a temporary folder in the project root folder. Open the index.html to view them.

Writing tests:

Scenarios in the feature files. Step definitions in the step definition files. Page objects in the page objects files. Structure may vary based on the project, number of pages, number of scenarios etc.
