# ----WebSite------
	http://www.protractortest.org
	
#---WebSite---------
	http://www.way2automation.com/protractor-angularjs-practice-website.html

##------Issue-----------
#Unable to run Protractor - ECONNREFUSED connect ECONNREFUSED
#E/launcher - Process exited with error code 135
	webdriver-manager start --standalone

#Running suite from CMD
	CMD>Project root>protractor conf.js

#Install-Java 
	http://www.oracle.com/technetwork/java/javase/downloads/index-jsp-138363.html
	Set up environment variable 

#Install - nodejs
	https://nodejs.org/en/
	download> Install
	
#http://www.protractortest.org/#/tutorial
# Run npm 
	cmd-> npm install -g protractor
	cmd-> webdriver-manager update
	cmd-> webdriver-manager start

# Python download and install and set up environment variable 
	https://www.python.org/downloads/
	verify: cmd>python
	
# Microsoft visual studio 8 install 
	http://go.microsoft.com/?linkid=9816758
	
# Install node-gyp:
	cmd> nmp install -g node-gyp
	
# Eclipse marketPlace
	-tern.java
	-install tern eclipse ide
	-Create a project java project
	-Delete library and src folder
	-Copy and past spec.js and conf.js file into the folder (http://www.protractortest.org/#/)
	-Convert this project into tern project and select Protractor
	
# Create a runner.bat file
	type - protractor conf.js > save it
	
# Make a executable to eclipse
	click on box with run button > Click on extranal tool configuration> Select program > Click on + mark (add)>
	click on browse workspace and select runner.bat file > click on browse workspace and select project
	Apply>run
	Validation: spec file should be successfully run. 
	
# AutoSuggetion 
	adding package.json file
	cmd> go to the root of the project> npm install > It will install all dependecis 
	node_modules will be added into the project
	
# Create Suite 
	specs: ['./regression/*.spec.js'],
	------OR-------------
	suites:{
	smoke: ['./smoke/*.spec.js'], 	//Only smoke
	regression: ['./regression/*.spec.js'],  //Only regression
	functional: ['./functional/*.spec.js'], //Only functional 
	all: ['./*/*.spec.js'],     //will execute all the test cases
	selected:['./functional/addcustomer.spec.js', './regression/openaccount.spec.js'], //Only selected test cases will execute
	},
	CMD> root of the project>protractor conf.js --suites=smoke  |> enter it will execute only smoke suite
	CMD> root of the project>protractor conf.js --suites=smoke,regression |> enter it will execute only smoke & regression suite
	
# Create/generate a log file 
	https://www.npmjs.com/package/winston
	-add winston library into your package.json file ("winston": "1.0.1",) 
	-add log.js file into your project
				require('winston');
				module.exports = winston;
	-inside the test cases 
					var logger = require('./log');
	-after test cases steps just type
					logger.log('info','Navigating to the website');
					
# Generate the Allure report
	https://www.npmjs.com/package/jasmine-allure-reporter
	need to onPrepare inside of the conf.js file
					onPrepare: function () {
						browser.ignoreSynchronization=true;
					// Override the timeout for webdriver.
						browser.driver.manage().timeouts().implicitlyWait(60000);

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
	cmd>root> npm i jasmine-allure-reporter
	execute test cases > will generate allure-results (xml report) in your project 
# Generate allure html report
  - Install maven into the local machine
  	https://maven.apache.org/download.cgi
  - Configure the environmet and validate CMD>mvn -version
  - Go to the root of the project > allure-results > copy (allure-results folder)> click on 
  		node_modules>Click on jasmine-allure reporter folder > Past it.(allure-results folder over here)
  		and also you will see pom.xml file over here.
  		basically maven execute TC's with help of pom.xml file
  - Copy the directory 
  - CMD> go to the directory> and type (mvn site -Dallure.results_pattern=allure-results) > Hit enter
  - go to the directory> node_modules>jasmine-allure-reporter>target>sit>allure-maven-plugin>index>
  		Open with Firefox > will see the nice result
  
#Emailble Report
	https://www.npmjs.com/package/nodemailer (0.7 is stable version)
	CMD>ROOT>npm install nodemailer@0.7.0
	CMD>ROOT>npm install protractor-jasmine2-screenshot-reporter --save-dev
	- add mail.js file into your project (From the website) 
		- Create a oncomplete function in conf.js file
		- (Host/IP & Port), Authentication
		- From,to,Subject, text, attachments
	CMD>ROOT>node mail.js (If successful then run your test cases)
	
# Get text
	title.then(function(text){
	expect(title).toEqual("Protractor practice");
	
# Multipul Browser command
	multiCapabilities: [{
	browserName: 'chrome'
	},{
	browserName: 'firefox'
	},{
	browserName: 'internext explorer'
	}],

# Jasmine data provider
	https:www.npmjs.com/package/jasmine-data-provider
	CMD>ROOT>npm i jasmine-data-provider
	var using = require('jasmine-data-provider')
	write top of the "it block" (using([{username:Object.userdetails.username1, username:Object.userdetails.password1},
	{username:Object.userdetails.username2, username:Object.userdetails.password2}],function(data){}
	
# Working with Non-Angular based application 
	- By ignoring the browser Synchronization
		browser.ignoreSynchronization = true;
		
# Jenkins Configuration
	CMD>java -jar jenkins.war
	Browser > localhost:8080
	Click on Manage Jenkins > Configure the systeme> 
		- add JDK directory 
		- Maven directroy
	Click on Create new job> MultiConfiguration Project> Build > Execute Window batch command
		-cd\
		- cd (project root till conf.js folder)
		- protractor conf.js s
		- Save it 
		
	
	