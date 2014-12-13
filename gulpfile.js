/*-------------------------------------------------------------------
 Required plugins
 -------------------------------------------------------------------*/
var source     = require('vinyl-source-stream'),
    path       = require('path'),
    gulp       = require('gulp'),
    gutil      = require('gulp-util'),
    browserify = require('browserify'),
    reactify   = require('reactify'),
    watchify   = require('watchify'),
    notify     = require('gulp-notify'),
    less       = require('gulp-less');
/*-------------------------------------------------------------------
 Configuration
 -------------------------------------------------------------------*/
var scriptsDir = './src',
    distDir    = './dist/js',
    mui        = ''

/*------DEV TASKS------*/

/*-------------------------------------------------------------------
 Bundle scripts
 -------------------------------------------------------------------*/
function handleErrors() {
  var args = Array.prototype.slice.call(arguments);
  notify.onError({
    title: 'Compile Error',
    message: '<%= error.message %>'
  }).apply(this, args);
  this.emit('end'); // Keep gulp from hanging on this task
}


// Based on: http://blog.avisi.nl/2014/04/25/how-to-keep-a-fast-build-with-browserify-and-reactjs/
function buildScript(file, watch) {
  var props = {entries: [scriptsDir + '/' + file], debug: true};
  var bundler = watch ? watchify(props) : browserify(props);
  bundler.transform(reactify);
  function rebundle() {
    var stream = bundler.bundle();
    return stream.on('error', handleErrors)
      .pipe(source(file))
      .pipe(gulp.dest(distDir + '/'))
      .pipe(notify({ message: 'scripts task complete' }));
  }
  bundler.on('update', function() {
    rebundle()
    .pipe(notify({ message: 'Rebundle...' }));
  });
  return rebundle();
}

/*-------------------------------------------------------------------
 LESS Compilation
 -------------------------------------------------------------------*/
gulp.task('styles', function() {
  return gulp.src('src/style/app.less')
    .pipe(less({paths: ['node_modules/material-ui/src/less']}))
    .pipe(gulp.dest('dist/css'))
    .pipe(notify({ message: 'Styles task complete' }));
});


/*-------------------------------------------------------------------
 Watch
 -------------------------------------------------------------------*/
gulp.task('watch', function() {
  gulp.watch('./src/**/*.js', ['build']);
  gulp.watch('./src/style/**/*.less', ['styles']);
});

gulp.task('build', function() {
  return buildScript('App.js', false);
});

gulp.task('default', ['build', 'styles'], function() {

});