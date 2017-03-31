/**
 * Created by Selenium on 24-12-2015.
 */
var sendMail = function() {

    var sys = require('util')
    var exec = require('child_process').exec;
    function puts(error, stdout, stderr) { sys.puts(stdout) }
    exec("node mail.js", puts);


}

module.exports = new sendMail();