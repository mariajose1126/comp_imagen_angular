    gulp = require('gulp'),
    ngdocs = require('gulp-ngdocs'),
    connectNgdocs = require('gulp-connect');

gulp.task('ngdocs', [], function() {
    gulpDocs = require('gulp-ngdocs');
  return gulp.src('src/imagen-component.js')
    .pipe(gulpDocs.process())
    .pipe(gulp.dest('./docs'));
});

gulp.task('connectNgdocs', function() {
  connect = require('gulp-connect');
  connect.server({
    root: 'docs',
    livereload: false,
    fallback: 'docs/index.html',
    port: 8083,
  });
});
