var gulp = require('gulp');
var gutil = require('gulp-util');
var concat = require('gulp-concat');
var minifyCss = require('gulp-minify-css');
var rename = require('gulp-rename');
var stylus = require('gulp-stylus');

var paths = {
  stylus: ['./styles/**/*.styl']
};

gulp.task('default', ['stylus']);


gulp.task('stylus', function(done){
    gulp.src('./styles/main.styl')
        .pipe(stylus({
        }))
        .pipe(gulp.dest('./public/css'))
        .on('end',done);
})

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
});
