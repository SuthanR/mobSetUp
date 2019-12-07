exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,
  capabilities: {
    browserName: 'chrome',

  },

  specs: [
    'cucumber/features/add.feature',

  ],

  allScriptsTimeout: 150000,
  getPageTimeout: 3000,
  defaultTimeoutInterval: 250000,
  cucumberOpts: {
    require: 'cucumber/step_definitions/add_steps.js',
    Format: 'pretty',
   // tags: '@Check'
  }
}


