const gulp = require('gulp'); 
const minify = require('gulp-minify'); 
const concat = require('gulp-concat'); 

gulp.task('compress', function() {
  gulp.src(['src/*.js'])
    .pipe(minify())
    .pipe(gulp.dest('dist'))
});

gulp.task('test', function() {
  return gulp.src(['./src/crumbs.js', 'crumbs.tests.js'])
    .pipe(concat('crumbs.test.js'))
    .pipe(gulp.dest('./test/'));
});