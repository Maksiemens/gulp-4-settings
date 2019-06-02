module.exports = () => {
  $.gulp.task('pug', () => {
    return $.gulp.src('pug/*.pug')
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.gp.pug({ pretty: true }))
      // .pipe($.gp.rename('style.min.css'))
      .pipe($.gulp.dest('build/html'))
      .pipe($.browserSync.stream())
    ;
  });
};