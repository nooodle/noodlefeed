module.exports = function(grunt) {

  var FILE_PATH = 'noodlefeed/static/js/';

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      options: {
        separator: ';'
      },
      dist: {
        src: [FILE_PATH + 'require.js', FILE_PATH + 'build/optimized.js'],
        dest: FILE_PATH + 'build/<%= pkg.name %>.js'
      }
    },
    requirejs: {
      compile: {
        options: {
          baseUrl: FILE_PATH,
          mainConfigFile: FILE_PATH + 'config.js',
          out: FILE_PATH + 'build/optimized.js',
          name: 'config'
        }
      }
    },
    cssmin: {
      compress: {
        files: {
          'detour/static/css/main-min.css': ['detour/static/css/main.css']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-requirejs');
  grunt.loadNpmTasks('grunt-contrib-cssmin');

  grunt.registerTask('default', ['cssmin', 'requirejs', 'concat']);

};
