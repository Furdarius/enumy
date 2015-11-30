var argv = require('yargs').argv;
var gulp = require('gulp');
var uglify = require('gulp-uglify');
var notify = require('gulp-notify');
var rename = require('gulp-rename');
var browserify = require('gulp-browserify');

var version = require('./package.json').version;

gulp.task('build', function() {
    return gulp.src('index.js')
        .pipe(browserify({
            standalone: 'Enumy',
            insertGlobals : true,
            debug : !argv.production
        }))
        .pipe(rename('enumy-' + version + '.js'))
        .pipe(gulp.dest('./'))
        .on('finish', function () {
            gulp.src('./enumy-' + version + '.js')
                .pipe(uglify())
                .pipe(rename('enumy-' + version + '.min.js'))
                .pipe(gulp.dest('./'))
                .pipe(notify({ message: 'Build finished!'}));
        });
});

gulp.task('default', ['build']);