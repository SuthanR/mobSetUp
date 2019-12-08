Protractor and Cucumber overview

Protractor
Protractor is an end-to-end test framework for Angular and AngularJS applications. Protractor runs tests against
your application running in a real browser, interacting with it as a user would.

Cucumber
Cucumber is a framework for writing high-level specifications of an application's functionality using plain text.
It can be written and understood by non-technical people involved in a project. Cucumber’s language, Gherkin,
lets you describe software’s behaviour without detailing implementation details.

Set up :
 1. Install Node
 2. git clone https://github.com/SuthanR/mobTest.git
 3. From your project root directory: npm install then check the respective version of modules installed
 4. Go to the project location in terminal: webdriver-manager start
 5. Go to project location in another terminal: protractor "yourConfig.js" / protractor protractor.conf.js

Folder and config:

Conf.js: The file defines spec patterns relative to the location of the feature and step file path. Here,
we also define browser capabilities, tags, cucumber options etc.

The folder(cucumber) contains three parts 1. Features, where all the feature file can contain a scenario
or can contain many scenarios in a single feature file but it usually contains a list of scenarios.
2. Step definitions: Is the place where all the cucumber steps are defined in this file and help to reuse
most of the steps wherever necessary.
3.Page objects: This helps to arrange the test logic and elements and this makes scripts more organized
and helps to maintain easily.



