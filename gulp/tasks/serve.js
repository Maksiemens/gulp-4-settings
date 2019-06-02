module.exports = () => {
  $.gulp.task('serve', () => {
    $.browserSync.init({server: 'build/'});
    $.gulp.watch('sass/**/*.scss', $.gulp.series('sass'));
    $.gulp.watch('*.html', $.gulp.series('html'));
    $.gulp.watch('pug/**/*.pug', $.gulp.series('pug'));
    $.gulp.watch('js/**/*.js', $.gulp.series('scripts'));
    $.gulp.watch('img/**/*.{png,jpg,svg}', $.gulp.series('allimg'));
  });
};