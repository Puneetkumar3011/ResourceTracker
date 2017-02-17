var gulp = require('gulp'),
watch = require('gulp-watch'),
postcss = require('gulp-postcss'),
autoprefixer = require('autoprefixer'),
cssvars = require('postcss-simple-vars'),
nested = require('postcss-nested'),
cssImport = require('postcss-import'),
browserSync = require('browser-sync').create(),
mixins = require('postcss-mixins');

gulp.task('default', function() {
  console.log("Default Gulp task.");
});

gulp.task('styles', function() {
  return gulp.src('./client/assets/css/styles.css')
    .pipe(postcss([cssImport, mixins, cssvars, nested, autoprefixer]))
    .on('error', function(errorInfo) {
      console.log(errorInfo.toString());
      this.emit('end');
    })
    .pipe(gulp.dest('./public/stylesheets'));
});

gulp.task('watch', function() {
  watch('./client/assets/css/**/*.css', function() {
    gulp.start('styles');
  });

  /* to work with browser sync */
  // browserSync.init({
  //     notify: true,
  //     server: {
  //       baseDir: "./src"
  //     },
  //     port: 4200,
  //   });

  // watch('./src/assets/css/**/*.css', function() {
  //   gulp.start('cssInject');
  // });

});

gulp.task('cssInject', ['styles'], function() {
  return gulp.src('./client/assets/css/styles.css')
    .pipe(browserSync.stream());
});