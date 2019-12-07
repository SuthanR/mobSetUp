var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
browser.driver.manage().window().maximize();

var CafeSteps = function() {

  var CafePage = require("../page_objects/add_page.js");

  this.World = function MyWorld() {
    this.page = new CafePage();
  };

  this.Given(/^The cafeTown page is open$/, function (callback) {
    this.page.get();
    callback();
  });

    this.When(/^I enter the login details as (.*) and (.*) and click$/, function (username, password, callback) {
    this.page.enterUser(username);
    this.page.enterPass(password);
    this.page.clickGo();
    callback();
   });

    this.Given(/^I click create to add the employee$/, function (callback) {
        this.page.create();
        callback();
    });


    this.When(/^I enter the details of the employe as (.*) and (.*) and (.*) and (.*)$/, function (firstname, lastname, startdate, email, callback) {
        this.page.enterFirst(firstname);
        this.page.enterLast(lastname);
        this.page.enterDate(startdate);
        this.page.enterEmail(email);
        this.page.clickAdd();
        callback();
    });
};

module.exports = CafeSteps;