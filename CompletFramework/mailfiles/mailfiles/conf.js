
exports.config = {
    //seleniumAddress: 'http://localhost:4444/wd/hub',

    specs: ['./src/tests/Banking.js'],

    onPrepare: function(){
        // Add a screenshot reporter and store screenshots to `/Reports`:
        var HtmlScreenshotReporter = require('protractor-jasmine2-screenshot-reporter');
        jasmine.getEnv().addReporter(new HtmlScreenshotReporter({
            dest: './Reports',
            filename: 'Results.html'}));

    },

    onComplete:function () {
        console.log("Sending Mail with reports for the test execution.");
        var sys = require('util')
        var exec = require('child_process').exec;
        function puts(error, stdout, stderr) { sys.puts(stdout) }
        exec("node mail.js", puts);
    },


    multiCapabilities : [{
        'browserName' : 'chrome'
    },
        /* {
         'browserName' : 'firefox'
         }*/
    ],


};