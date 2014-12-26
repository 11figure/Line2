module.exports = function (grunt) {

   require('load-grunt-tasks')(grunt);

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    connect:{
        server:{
            options:{
                port:9100,
                hostname:'localhost',
                base:'.' ,
                livereload:true
                // open:{
                //     target:'http://localhost:9100'
                // }
            }

        }

    },

    watch:{
        files:['*.html','imgs/*','js/*','css/*'],
        options:{
            livereload:true,
              open: {
            target:'http://localhost:9100'
            }
        }
    }
}),
//插件加载
  // grunt.loadNpmTasks('connect-livereload');
  // grunt.loadNpmTasks('grunt-contrib-uglify');
  // grunt.loadNpmTasks('grunt-contrib-connect');
  // grunt.loadNpmTasks('grunt-contrib-watch');
  // grunt.loadNpmTasks('grunt-express');

//设置任务组合及默认任务
  // grunt.registerTask('server',['express','watch']);
  grunt.registerTask('server',['connect','watch']);
}