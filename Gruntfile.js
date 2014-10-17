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
        dest: 'dest/js/build.js',
      },
    },

    uglify: {
      options: {
        mangle: false
      },
      my_target: {
        files: {
          'public/js/output.min.js': ['dest/js/build.js']
        },
      },
    },

    imagemin: {
      dynamic: {
          files: [{
              expand: true,
              cwd: 'public/images/',
              src: ['*.{png,jpg,gif}'],
              dest: 'dest/images/build/'
          }]
      },
    },

    watch: {
      scripts: {
        files: ['public/js/*.js'],
        tasks: ['concat','uglify'],
        options: {
          spawn: false,
        },
      },
    },

    jade: {
      compile: {
        options: {
          data: {
            debug: false
          }
        },
        files: {
          "dest/dest.html": ["views/index.jade"]
        },
      },
    },
});

  // WHERE WE TELL GRUNT WE PLAN TO USE THIS PLUG IN
  grunt.loadNpmTasks('grunt-contrib-concat');
  grunt.loadNpmTasks('grunt-contrib-uglify');
  grunt.loadNpmTasks('grunt-contrib-imagemin');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.loadNpmTasks('grunt-contrib-jade');

  /* WHERE WE TELL GRUNT WHAT TO DO WHEN WE TYPE 'GRUNT'
  INTO THE TERMINAL */
  grunt.registerTask('default', ['concat','uglify', 'imagemin', 'jade']);
};