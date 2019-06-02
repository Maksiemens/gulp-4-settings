const jsFiles = [$.path.jquery, $.path.js];
module.exports = () => {
  $.gulp.task('scripts', () => {
    return $.gulp.src(jsFiles)
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.babel({presets: ['@babel/preset-env']}))
      .pipe($.gp.concat('all.js'))
      .pipe($.gp.uglify())
      .pipe($.gp.rename('script.min.js'))
      .pipe($.gp.sourcemaps.write('.'))
      .pipe($.gulp.dest('build/js'))
      .pipe($.browserSync.stream())
    ;
  });
};