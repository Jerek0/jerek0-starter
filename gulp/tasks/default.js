/**
 * Created by jerek0 on 06/05/2015.
 */
var gulp = require('gulp');

gulp.task('dev', ['scripts:dev', 'less', 'images', 'fonts', 'markup', 'watch:dev']);
gulp.task('prod', ['scripts:prod', 'less', 'images', 'fonts', 'markup', 'watch:prod']);
gulp.task('default', ['dev']);
