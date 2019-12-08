const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
browser.driver.manage().window().maximize();
const cafePage = require("../page_objects/employee_page.js");

module.exports = function() {

    this.World = function MyWorld() {
        this.page = new cafePage();
    };

    this.Given(/^The cafeTown page is open$/, function (callback) {
    this.page.get();
    callback();
   });

    this.When(/^I enter the login details as (.*) and (.*) and click login$/, function (username, password, callback) {
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
        callback();
    });

    this.Given(/^I click add to save employee$/, function (callback) {
        this.page.clickAdd();
        callback();
    });

    this.Given(/^I select the employee$/, function (callback) {
        this.page.select();
        callback();
    });

    this.Given(/^I click edit to update the employee$/, function (callback) {
        this.page.edit();
        callback();
    });

    this.When(/^I update the email address of the employee as (.*)$/, function (newEmail, callback) {
        this.page.enterEmail(newEmail);
        callback();
    });

    this.Given(/^I click update to save the employee$/, function (callback) {
        this.page.clickUpdate();
        callback();
    });

    this.Given(/^I click delete and accept to delete the employee$/, function (callback) {
        this.page.clickDelete();
        callback();
    });

    this.Given(/^I finally logout$/, function (callback) {
        this.page.clickLog();
        callback();
    });
};