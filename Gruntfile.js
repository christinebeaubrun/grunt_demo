module.exports= function(grunt) {
  // NOTE TO SELF:
  // ALL CONFIGURATION GOES HERE
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),

    concat: {
      options: {
        separator: ';',
      },
      dist: {
        src:['public/js/global.js','public/js/bootstrap.js','public/js/prefixfree.js'],
        dest: 'dist/build.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'dest/output.min.js': ['dist/build.js']
        }
      }
    }
});

  // WHERE WE TELL GRUNT WE PLAN TO USE THIS PLUG IN
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');

  /* WHERE WE TELL GRUNT WHAT TO DO WHEN WE TYPE 'GRUNT'
  INTO THE TERMINAL */
  grunt.registerTask('default', ['concat','uglify']);
};