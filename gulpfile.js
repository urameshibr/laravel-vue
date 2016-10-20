var gulp = require('gulp'),
    sass = require('gulp-sass'),
    browserSync = require('browser-sync').create(),
    reload = browserSync.reload;

gulp.task('styles', function(){
    gulp.src('./resources/assets/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('./public/css/'))
        .pipe(browserSync.stream());
});
gulp.task('scripts', function(){
    gulp.src('./resources/assets/js/*.js')
        .pipe(gulp.dest('./public/js/'))
        .pipe(browserSync.stream())
});
gulp.task('html', function(){
    gulp.src('./resources/views/**/*.blade.php')
        .pipe(browserSync.stream())
});
gulp.task('serve',['styles','scripts'], function(){
    browserSync.init({
        proxy: 'teste.dev',
        notify:false
    });
    gulp.watch('./resources/views/**/*', ['html'])
        .on('change', reload);
    gulp.watch('./resources/assets//sass/**/*', ['styles'])
        .on('change', reload);
    gulp.watch('./resources/assets/js/app.js' , ['scripts'])
        .on('change' , reload);
});

gulp.task('default', ['serve']);