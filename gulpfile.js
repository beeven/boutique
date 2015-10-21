var gulp = require('gulp');

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
});

gulp.task('watch', function() {
  gulp.watch(paths.stylus, ['stylus']);
});
