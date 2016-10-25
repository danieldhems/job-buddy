const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const sass = require("gulp-sass");

// The development server (the recommended option for development)
gulp.task("default", ["copy-html", "webpack", "copy-css-libs", "copy-js-libs", "sass", "watch"]);

gulp.task("copy-html", [], function() {
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist/'));
});

gulp.task("sass", function(){
	gulp.src(['src/css/sass/**/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
})

gulp.task("copy-css-libs", [], function() {
	gulp.src([
		'node_modules/bootstrap/dist/css/bootstrap.min.css'
	])
	.pipe(gulp.dest('dist/css/libs'));
});

gulp.task("copy-js-libs", [], function() {
	gulp.src([
		'node_modules/bootstrap/dist/js/bootstrap.min.js'
	])
	.pipe(gulp.dest('dist/js/libs'));
});

gulp.task("webpack", function(){
	gulp.src('src/js/main.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('dist/'));
})

gulp.task("watch", [], function(){
	gulp.watch('src/js/**/*', ['webpack'])
})
