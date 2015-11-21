//Load the plugins
"use strict";

let gulp = require('gulp'),
    less = require('gulp-less'),
    minifyCSS = require('gulp-minify-css'),
    rename = require('gulp-rename'),
    jshint = require('gulp-jshint'),
    concat = require('gulp-concat'),
    uglify = require('gulp-uglify'),
    ngAnnotate = require('gulp-ng-annotate'),
    nodemon = require('gulp-nodemon');



//Define a task called css
gulp.task('compile-less', () => {
    //Grab the less file, process the LESS, save to style.css

    return gulp.src('public/assets/css/style.less')
    .pipe(less())
    .pipe(minifyCSS())
    .pipe(rename({suffix: '.min'}))
    .pipe(gulp.dest('public/assets/css'));
});

//Task for linting js files
gulp.task('validate-js', () => {
    return gulp.src(['server.js', 'public/app/*.js', 'public/app/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'));
});

//Task to lint, minify and concat front end files
gulp.task('concat-scripts', () => {
    return gulp.src(['public/app/*.js', 'public/app/**/*.js'])
    .pipe(jshint())
    .pipe(jshint.reporter('default'))
    .pipe(concat('all.js'))
    .pipe(uglify())
    .pipe(gulp.dest('public/dist'))
});


//Task to lint, minify, and concat frontend angular files
gulp.task('concat-angular', () => {
    return gulp.src(['public/app/*.js', 'public/app/**/*.js'])
        .pipe(jshint())
        .pipe(jshint.reporter('default'))
        .pipe(ngAnnotate())
        .pipe(concat('app.js'))
        .pipe(uglify())
        .pipe(gulp.dest('public/dist'));
});

//Watcher
gulp.task('watch', () => {
// watch the less file and run the css task
    gulp.watch('public/assets/css/style.less', ['compile-less']);
// watch js files and run lint and run js and angular tasks
    gulp.watch(['server.js', 'public/app/*.js', 'public/app/**/*.js'], ['validate-js', 'concat-angular'])
});

//The nodemon task
gulp.task('nodemon', () => {
    nodemon({
        script: 'server.js',
        ext: 'js less html'
    })
    .on('start', ['watch'])
    .on('change', ['watch'])
    .on('restart', () => console.log("Restarted!"))
});

gulp.task('default', ['nodemon']);