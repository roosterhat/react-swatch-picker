const gulp   = require('gulp');
const babel  = require('gulp-babel');
const clean  = require('gulp-clean');
const concat = require('gulp-concat');
const rename = require('gulp-rename');
const uglify = require('gulp-uglify');
const minifyCSS = require('gulp-minify-css');

var mainjs = [ 'src/SwatchPicker.js'],
    subsjs = [ 'src/SwatchPickerIcon.js'],
    jsDest = 'build';
var cssSources = ['src/SwatchPicker.css'],
    cssDest = 'build';

gulp.task('clean-build', function () {
    return gulp.src('build/*', {read: false})
               .pipe(clean());
});

gulp.task('sub-components', function() {
    return gulp.src( subsjs )
               .pipe( babel({
                    "presets": ["env", "react"],
                    "plugins": [
                        "transform-object-rest-spread",
                        "transform-react-jsx"
                    ]
               }))
               .pipe( gulp.dest(jsDest) )
});

gulp.task('main-component', function() {
    return gulp.src( mainjs )
                .pipe( babel({
                    "presets": ["env", "react"],
                    "plugins": [
                        "transform-object-rest-spread",
                        "transform-react-jsx"
                    ]
                }))
                .pipe( rename('index.js') )
                .pipe( gulp.dest(jsDest) );
    });
   
gulp.task('scripts', ['sub-components', 'main-component']);

gulp.task('styles', function() {
    return gulp.src( cssSources )
               .pipe( minifyCSS() )
               .pipe( gulp.dest(cssDest) );
});

gulp.task('dist', ['clean-build', 'scripts', 'styles']);