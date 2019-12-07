'use strict'
var CalculatorPage = function() {

  this.get = function() {
    browser.get('http://cafetownsend-angular-rails.herokuapp.com/login');
  };

};

module.exports = CalculatorPage;
