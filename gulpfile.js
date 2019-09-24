const {watch, src, dest, parallel} = require('gulp');
const sass = require('gulp-sass');
const autoprefixer = require('gulp-autoprefixer');
const minifyCSS = require('gulp-csso');
const concat = require('gulp-concat');
const gulp = require('gulp');

function sassTask() {
	return src('./assets/scss/app.scss')
		.pipe(sass())
		.pipe(autoprefixer({
			browsers: ['last 10 versions'],
			cascade: false,
			remove: false,
			grid: false,
			flexbox: false,
			supports: false
		}))
		.pipe(minifyCSS())
		.pipe(dest('./assets/css'))
}


function js() {
	return src([
		'./assets/js/app.js'
	], { sourcemaps: true })
		.pipe(concat('app.min.js'))
		.pipe(dest('./assets/js/', { sourcemaps: true }))
}

function watcher(){
	watch('./assets/scss/**/*.scss', sassTask);
	watch('./assets/js/app.js', js);
}

exports.watcher = watcher;
exports.js = js;
exports.sassTask = sassTask;
exports.default = parallel(sassTask, js);