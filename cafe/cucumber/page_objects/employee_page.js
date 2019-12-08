'use strict'
const chai = require('chai').use(require('chai-as-promised'));
const expect = chai.expect;
module.exports = function() {

    this.get = function () {
        browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
    };

    this.enterUser = function (value) {
        element(by.model('user.name')).sendKeys(value);
    };

    this.enterPass = function (value) {
        element(by.model('user.password')).sendKeys(value);
    };

    this.clickGo = function () {
        element(by.buttonText('Login')).click()
    };

    this.create = function () {
        element(by.id('bAdd')).click()
    };

    this.enterFirst = function (value) {
        element(by.model('selectedEmployee.firstName')).sendKeys(value);
    };

    this.enterLast = function (value) {
        element(by.model('selectedEmployee.lastName')).sendKeys(value);
    };

    this.enterDate = function (value) {
        element(by.model('selectedEmployee.startDate')).sendKeys(value);
    };

    this.enterEmail = function (value) {
        element(by.model('selectedEmployee.email')).clear();
        element(by.model('selectedEmployee.email')).sendKeys(value);
    };

    this.select = function() {
        element.all(by.css('ul#employee-list>li')).get(0).click();

    };

    this.clickAdd = function () {
        element(by.buttonText('Add')).click()

    };

    this.clickUpdate = function () {
        element(by.buttonText('Update')).click()
    };
    this.edit = function () {
        element(by.id('bEdit')).click()
    };

    this.clickDelete = function () {
        element(by.id('bDelete')).click()
        browser.switchTo().alert().accept();
    };

    this.clickLog = function () {
        element(by.css('.main-button')).click()
    };
};


