var config = require('../config');
var gulp = require('gulp');
var babelify = require('babelify');
var browserify = require('browserify');
var uglify = require('gulp-uglify');
var gutil = require('gulp-util');
var sourcemaps = require('gulp-sourcemaps');
var buffer = require('vinyl-buffer');
var source = require('vinyl-source-stream');
var clean = require('gulp-clean');
var browserSync  = require('browser-sync');
var handleErrors = require('../util/handleErrors');

gulp.task('cleanJs', function() {
    gulp.src(config.scripts.dest, {read: false})
        .pipe(clean());
});

gulp.task('scripts:dev', ['cleanJs'], function() {
  return browserify({ entries: config.scripts.main, debug: false })
    .transform(babelify.configure({"presets": ["es2015"]}))
    .bundle().on('error', handleErrors)
    .pipe(source('min.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(sourcemaps.write("."))
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.reload({stream:true}));
});


gulp.task('scripts:prod', ['cleanJs'], function() {
  return browserify({ entries: config.scripts.main, debug: false })
    .transform(babelify.configure({"presets": ["es2015"]}))
    .bundle().on('error', handleErrors)
    .pipe(source('min.js'))
    .pipe(buffer())
    .pipe(uglify())
    .pipe(gulp.dest(config.scripts.dest))
    .pipe(browserSync.reload({stream:true}));
});
