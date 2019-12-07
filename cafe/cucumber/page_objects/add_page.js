'use strict'
var CafePage = function() {

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

    }

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
        element(by.model('selectedEmployee.email')).sendKeys(value);

    };

    this.clickAdd = function () {
        element(by.buttonText('Add')).click()

    };
};
module.exports = CafePage;
