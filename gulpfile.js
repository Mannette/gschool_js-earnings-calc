var gulp = require('gulp');
var jshint = require('gulp-jshint');
var connect = require('gulp-connect');

// configure connect task
gulp.task('connect', function() {
  connect.server({
    root: '.',
    livereload: true
  });
});

gulp.task('css', function() {
  gulp.src('css/*.css')
    .pipe(connect.reload());
});

gulp.task('html', function() {
  gulp.src('*.html')
    .pipe(connect.reload());
});

// configure jshint task
gulp.task('jshint', function() {
  return gulp.src('js/*.js') // update path!
    .pipe(connect.reload())
    .pipe(jshint())
    .pipe(jshint.reporter('jshint-stylish'));
});

// configure which files to watch and what tasks to use on file changes
gulp.task('watch', function() {
  gulp.watch('js/*.js', ['jshint']);
  gulp.watch('css/*.css', ['css']);
  gulp.watch('*.html', ['html']);
});

// default task!
gulp.task('default', ['watch', 'connect']);
