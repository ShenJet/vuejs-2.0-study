var gulp = require('gulp');    // Get Gulp
// var uglify = require('gulp-uglify');    // Get uglify module
// var minifyCss = require('gulp-minify-css');    // Get minify-css module
// var imageMin = require('gulp-imagemin');    // Get imagemin module
// var less = require('gulp-less');    // Get less module
// var sass = require('gulp-ruby-sass');    // Get ruby-sass module
// var jshint = require('gulp-jshint');    // Get jshint module
var notify = require('gulp-notify');    // Get notify module
var connect = require('gulp-connect');  //auto refresh component

gulp.task('connect',function(){
    connect.server({
        root:'./',
        ip:'localhost',
        livereload:true,
        port:4000
    })
})

gulp.task('html', function(){
    console.log("html is modfied~")
    gulp.src('./*.html')
        .pipe(connect.reload());
});

// Listening the changes, run 'gulp auto' in command line
gulp.task('auto', function() {
    // Listen to the changes in templates source folder, log event when change happens
    gulp.watch('./*.html', ['html']);
});
//,function(event){
//  		console.log('Event type: ' + event.type); // added, changed, or deleted
//  		console.log('Event path: ' + event.path); // The path of the modified file
//  }
// Define the default task, run 'gulp' in command line, it will run both 'script' and 'auto' tasks
gulp.task('default', [ 'connect', 'auto']);


