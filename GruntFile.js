module.exports = function(grunt) {


    grunt.initConfig({
        protractor: {
            your_target: {   
                options: {
                    configFile: "conf.js",
                    args: {} ,
                    directConnect:true,

                }
            },

        },
        clean: {
            content: ["./logFile/logFileTest.log"]
        },
    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.task.registerTask('local',['clean','mkdir','protractor:local']);
    grunt.registerTask('default',['clean','protractor:your_target']);

};
