module.exports= function(grunt) {
  // NOTE TO SELF:
  // ALL CONFIGURATION GOES HERE
  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    concat: {
      // CONFIGURATION FOR CONCATINATING FILES GOES HERE
    }
  });
  // WHERE WE TELL GRUNT WE PLAN TO USE THIS PLUG IN
  grunt.loadNpmTasks('grunt-contrib-concat');

  /* WHERE WE TELL GRUNT WHAT TO DO WHEN WE TYPE 'GRUNT'
  INTO THE TERMINAL */
  grunt.registerTask('default', ['concat']);
};