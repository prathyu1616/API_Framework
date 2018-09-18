module.exports = function(grunt) {


    grunt.initConfig({
        protractor: {
            your_target: {   // Grunt requires at least one target to run so you can simply put 'all: {}' here too.
                options: {
                    configFile: "conf.js", // Target-specific config file
                    args: {} , // Target-specific arguments,
                    directConnect:true,

                }
            },

        },
        clean: {
            content: ["./logFile/logFile.log"]
        },
    });
    grunt.loadNpmTasks('grunt-protractor-runner');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.task.registerTask('local',['clean','mkdir','protractor:local']);
    grunt.registerTask('default',['clean','protractor:your_target']);

};