module.exports = () => {
  $.gulp.task('sass', () => {
    return $.gulp.src('sass/style.scss')
      .pipe($.gp.plumber({errorHandler: $.gp.notify.onError("Error: <%= error.message %>")}))
      .pipe($.gp.sourcemaps.init())
      .pipe($.gp.sass())
      .pipe($.gp.autoprefixer({browsers: ['last 2 versions']}))
      .pipe($.gp.csso())
      .pipe($.gp.rename('style.min.css'))
      .pipe($.gp.sourcemaps.write('.'))
      .pipe($.gulp.dest('build/css'))
      .pipe($.browserSync.stream())
    ;
  });
};