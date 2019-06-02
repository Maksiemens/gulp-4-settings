module.exports = () => {
  $.gulp.task('build',
    $.gulp.series('clean', 'copy', 'sass', 'pug', 'scripts', 'images', 'webp', 'svg')
  );
};
