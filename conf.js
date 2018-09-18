var Jasmine2HtmlReporter = require('protractor-jasmine2-html-reporter');

exports.config = {
    capabilities: {
        'browserName': 'chrome',
        'chromeOptions': {
            'args': ['disable-infobars']
        }
    },
    framework: 'jasmine2',
    specs: ['C:\\Users\\prathyusha.buram\\Desktop\\API_Framework\\test.js'],
    directConnect:true,
    seleniumAddress: 'http://localhost:4444/wd/hub',


    jasmineNodeOpts: {
        defaultTimeoutInterval: 140000

    },


    onPrepare: function() {
        jasmine.getEnv().addReporter(
            new Jasmine2HtmlReporter({
                savePath: 'target'
            })
        );
    },
};