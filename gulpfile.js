const gulp = require('gulp');
const sass = require('gulp-sass');
const browserSync = require('browser-sync').create();

function style(){
	return gulp.src('./app/scss/*.scss')
	.pipe(sass())
	.pipe(gulp.dest('./app/css'))
	.pipe(browserSync.stream());
}

function watch(){
browserSync.init({
	port:8080,
    server: {
      baseDir: './app/',
    },
  });
 	gulp.watch('./app/scss/**/*.scss', style);
	gulp.watch('./index.html').on('change', browserSync.reload);
}

exports.style = style;
exports.watch = watch;