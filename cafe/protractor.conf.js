exports.config = {
  seleniumAddress: 'http://localhost:4444/wd/hub',

  framework: 'custom',
  frameworkPath: require.resolve('protractor-cucumber-framework'),
  ignoreUncaughtExceptions: true,
    specs: [
        'cucumber/features/employee.feature',
    ],
    cucumberOpts: {
        require: ['cucumber/step_definitions/*.js',],
        format: "json:.dashboard/report.json",
    },
    capabilities: {
        browserName: 'chrome',

    },
    plugins: [{
        package: require.resolve('protractor-multiple-cucumber-html-reporter-plugin'),
        options:{
            automaticallyGenerateReport: true,
            removeExistingJsonReportFile: true,
            openReportInBrowser: true
        }
    }],







}


