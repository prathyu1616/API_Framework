
var log4js = require('log4js');
log4js.configure({
    appenders: [
        { type: 'console' },
        { type: 'file', filename: 'logFile/logFile.log', category: 'log' }
    ]
});
var logger = log4js.getLogger('log');
//var fs = require('fs');
var request = require('request');
var city = 'Hyderabad';
var country = 'IND';

describe('API framework',function () {

    xit('some title',function (done) {



        request('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' +country+ '&appid=5b7a91f50513e3e9455732d7a871ba7b', function (error, response, body) {



            var res = JSON.parse(body);
            logger.info('hello');
            console.log('error:', error); // Print the error if one occurred.
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received.
            console.log('body:', body);// Print the HTML for the Google homepage.
             console.log('humidity:', res.main.humidity);// Print the HTML for the Google homepage.
            expect( res.main.humidity).toBe(74);
            expect( res.main.humidity).toBeLessThan(100);
             done();// Print the HTML for the Google homepage.
        });
    });
    it('some title',function (done) {
        request.post('https://api.openweathermap.org/data/2.5/weather?q=' + city + ',' +country+ '&appid=5b7a91f50513e3e9455732d7a871ba7b', function (error, response, body) {



            var res = JSON.parse(body);
            console.log('error:', error); // Print the error if one occurred.
            console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received.
            console.log('body:', body);// Print the HTML for the Google homepage.
            console.log('humidity:', res.main.humidity);// Print the HTML for the Google homepage.
            expect( res.main.humidity).toBeGreaterThan(50);
            done();// Print the HTML for the Google homepage.
        });
    });
    it('some title',function (done) {
        request({
            url: 'https://www.googleapis.com/gmail/v1/users/me/profile',
            headers: {
                'Authorization': 'Bearer ya29.GlscBue-c2u3p3tKQEGVdT3ZA6xM-Skpehi864b8m3Bd69Dzu62QA1IOzJEq5mvTUvPTsj2lvxbtw1bMXtzR5nsloVdPFf4RV5Ldrw9-xg81QboKAjUKV6WrYZ-n'
            },
            //rejectUnauthorized: false
        }, function(err, res) {
            if(err) {
                console.error(err);
            } else {
                console.log(res.body);
            }

        });
    });
});