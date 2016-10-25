const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack-stream");
const webpackConfig = require("./webpack.config.js");
const sass = require("gulp-sass");
const wiredep = require("wiredep").stream;

// The development server (the recommended option for development)
gulp.task("default", ["copy-html", "webpack", "sass", "inject-vendor", "watch"]);

gulp.task("copy-html", [], function() {
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist/'));
});

gulp.task("inject-vendor", function(){
	gulp.src('src/index.html')
	.pipe(wiredep({}))
	.pipe(gulp.dest("dist/"))
})

gulp.task("sass", function(){
	gulp.src(['src/css/sass/**/*.scss'])
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('dist/css'));
})

gulp.task("webpack", function(){
	gulp.src('src/js/main.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('dist/'));
})

gulp.task("watch", [], function(){
	gulp.watch('src/js/**/*', ['webpack']);
	gulp.watch('src/css/sass/**/*', ['sass']);
	gulp.watch('src/index.html', ['copy-html']);
})
