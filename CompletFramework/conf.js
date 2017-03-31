/*// conf.js
exports.config = {
  framework: 'jasmine',
  seleniumAddress: 'http://localhost:4444/wd/hub',
  specs: ['RoughTest/Banking.spec.js'],

//Implicitly Wait in protractor
onPrepare: function(){
    browser.manage().timeouts().implicitlyWait(5000);
},

}*/

exports.config = {
		
		directConnect: true,
  
		// Capabilities to be passed to the webdriver instance.
	multiCapabilities: [{
		browserName: 'chrome'
	},
	],
		
		framework: 'jasmine2',
  
	//	seleniumAddress: 'http://localhost:4444/wd/hub',
  
		specs: ['../test_spec/BankManagerLoginTest_spec.js'],

		// Options to be passed to Jasmine.
		  jasmineNodeOpts: {
		    defaultTimeoutInterval: 30000
		  },
		  
	//Creating Allure HTML Report 
	onPrepare: function () {
		//browser.ignoreSynchronization=true;
		// Override the timeout for webdriver.
		browser.driver.manage().timeouts().implicitlyWait(10000);

		var AllureReporter = require('jasmine-allure-reporter');
		jasmine.getEnv().addReporter(new AllureReporter({
			allureReport: {
				resultsDir: 'allure-results'
			}
		}));
		jasmine.getEnv().afterEach(function (done) {
			browser.takeScreenshot().then(function (png) {
				allure.createAttachment('Screenshot', function () {
					return new Buffer(png, 'base64')
				}, 'image/png')();
				done();
			})
		});

	}
}