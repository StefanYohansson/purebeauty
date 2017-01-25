'use strict';

var gulp = require('gulp');
var sass = require('gulp-sass');
var cleanCSS = require('gulp-clean-css');
var rename = require('gulp-rename');
var uglify = require('gulp-uglify');
var pump = require('pump');

gulp.task('libs', function() {
   gulp.src('./node_modules/purecss/build/pure-min.css')
   .pipe(gulp.dest('./lib'));

   gulp.src('./node_modules/whatwg-fetch/fetch.js')
   .pipe(gulp.dest('./lib'));

   gulp.src('./node_modules/promise-polyfill/promise.min.js')
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

gulp.task('minify', function () {
  gulp.src('./css/*.css')
    .pipe(cleanCSS({compability: 'ie8'}))
    .pipe(rename({
      suffix: '.min'
    }))
    .pipe(gulp.dest('./css/dist'));
});

gulp.task('compress', function (cb) {
  pump([
    gulp.src('lib/main.js'),
    uglify({ mangle: true, compress: true }),
    gulp.dest('./lib/dist')
  ],
    cb
  );
});
