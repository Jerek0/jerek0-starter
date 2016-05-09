/**
 * Created by jerek0 on 06/05/2015.
 */

var gulp     = require('gulp');
var config   = require('../config');

gulp.task('watch:dev', ['browserSync'], function() {
    gulp.watch(config.scripts.src,['scripts:dev']);
    gulp.watch(config.less.src,   ['less']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src,  ['fonts']);
    gulp.watch(config.markup.src, ['markup']);
    // TODO - Doesn't works for images and fonts additions (works for modifications though)
});

gulp.task('watch:prod', ['browserSync'], function() {
    gulp.watch(config.scripts.src,['scripts:prod']);
    gulp.watch(config.less.src,   ['less']);
    gulp.watch(config.images.src, ['images']);
    gulp.watch(config.fonts.src,  ['fonts']);
    gulp.watch(config.markup.src, ['markup']);
});
