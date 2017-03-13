
/**
 * Module Dependencies
 */

const gulp = require('gulp');
const nodemon = require('gulp-nodemon');
sass = require('gulp-sass');

/**
 * Gulp Tasks
 */

gulp.task('nodemon', () => {
  var called = false;
  return nodemon({
    script: 'server/app.js',
    ignore: [
      'gulpfile.js',
      'node_modules/'
    ]
  });
});

gulp.task('sass', function(){
	return gulp.src('./public/**/*.style.sass')
	.pipe(sass().on('error', sass.logError))
	.pipe(gulp.dest('./public/css/'));
});

gulp.task('sass:watch', function(){
	gulp.watch('./public/sass/**/*.sass', ['sass']);
});

gulp.task('default', ['nodemon', 'sass', 'sass:watch']);
