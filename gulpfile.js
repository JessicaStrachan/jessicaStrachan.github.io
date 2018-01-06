// Require Dependancies

var gulp = require('gulp');
var yarn = require('gulp-yarn');
 
// development mode?
devBuild = (process.env.NODE_ENV !== 'production'),
// folders
folder = {
src: 'src/',
build: 'app/'
};

gulp.task('yarn', function() {
    return gulp.src(['./package.json', './yarn.lock'])
        .pipe(gulp.dest('./dist'))
        .pipe(yarn({
            production: true
        }));
});

// create a TASK to compile Sass into CSS using gulp-sass
gulp.task('css', function() {
   gulp.src(['./app/**/*.scss'])
   .pipe($.sass({style: 'expanded'}))
   .pipe(gulp.dest('./public/'));
});

// this will "watch" for any changes in files and rerun gulp if necessary
gulp.task('watch', function() {
   gulp.watch(['./app/**/*.scss'], ['css']);
});

gulp.task('default', ['html', 'js', 'css', 'watch'], function() {});

