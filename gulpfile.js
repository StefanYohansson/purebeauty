'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('libs', function() {
   gulp.src('./node_modules/animate.css/animate.min.css')
   .pipe(gulp.src('./node_modules/purecss/build/pure-min.css'))
   .pipe(gulp.dest('./lib'));

   gulp.src('./node_modules/jquery/dist/jquery.min.js')
   .pipe(gulp.dest('./lib'));

   gulp.src('./node_modules/purecss/build/grids-responsive-min.css')
   .pipe(gulp.dest('./lib'));
});

gulp.task('sass', function () {
  return gulp.src('./sass/**/*.scss')
  .pipe(sass().on('error', sass.logError))
  .pipe(gulp.dest('./css'));
});

gulp.task('sass:watch', function () {
    gulp.watch('./sass/**/*.scss', ['sass']);
});
