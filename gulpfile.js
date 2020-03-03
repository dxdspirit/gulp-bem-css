var gulp = require('gulp');
var minifyCss = require('gulp-minify-css');

gulp.task('sass', function(){
    return gulp.src('css/**/*.css')
    .pipe((minifyCss()))
    .pipe(gulp.dest('dist/'));
});

gulp.task('watch', function(){
    gulp.watch('css/**/*.css', gulp.series('sass'));
})

