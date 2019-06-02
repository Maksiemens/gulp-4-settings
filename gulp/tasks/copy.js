module.exports = () => {
  $.gulp.task('copy', () => {
    return $.gulp.src([
      'fonts/**/*.*',
      'img/**',
      'favicon/**/*.*',
      '*.html',
    ], { base: '.' })
    .pipe( $.gulp.dest('build'));
  });
};