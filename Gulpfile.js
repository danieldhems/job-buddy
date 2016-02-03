const gulp = require("gulp");
const gutil = require("gulp-util");
const webpack = require("webpack-stream");
const WebpackDevServer = require("webpack-dev-server");
const webpackConfig = require("./webpack.config.js");

// The development server (the recommended option for development)
gulp.task("default", ["build"]);

gulp.task("build", [], function() {
	gulp.src('src/index.html')
	.pipe(gulp.dest('dist/'));

	gulp.src('src/js/application.js')
	.pipe(webpack(require('./webpack.config.js')))
	.pipe(gulp.dest('dist/'));
});
