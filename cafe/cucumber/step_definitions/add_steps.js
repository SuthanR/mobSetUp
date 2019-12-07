var chai = require('chai').use(require('chai-as-promised'));
var expect = chai.expect;
browser.driver.manage().window().maximize();

var CalculatorSteps = function() {

  var CalculatorPage = require("../page_objects/add_page.js");

  this.World = function MyWorld() {
    this.page = new CalculatorPage();
  };

  this.Given('The cafeTown page is open', function (callback) {
    this.page.get();
    callback();
  });

};

module.exports = CalculatorSteps;