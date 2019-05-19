'use strict';
 
var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps'); 
sass.compiler = require('node-sass');
 
gulp.task('sass', function () {
  return gulp.src('./assets/scss/**/*.scss')
  .pipe(sourcemaps.init())
    .pipe(sass({outputStyle: 'compressed'}).on('error', sass.logError))
    .pipe(sourcemaps.write('./sourcemaps'))
    .pipe(gulp.dest('./assets/css'));
});
 
gulp.task('default', function () {
    gulp.watch('./assets/scss/**/*.scss', gulp.series('sass'));    
  });