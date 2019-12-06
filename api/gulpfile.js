const { series, src, dest, watch } = require('gulp');
const ts = require('gulp-typescript');
const tsProject = ts.createProject('tsconfig.json');

function defaultTask(cb) {
  // place code for your default task here
  console.log('hello');
  cb();
}

function copyJSON(cb) {
  cb();
  return src('./src/**/*.json').pipe(dest('./dist/'));
}

function tsc(cb) {
  cb();
  return tsProject
    .src()
    .pipe(tsProject())
    .js.pipe(dest('dist'));
}

exports.default = series(tsc, copyJSON);

// function watcher(done) {
//   series(tsc, copyJSON)
//   watch('./src/**/*', () => series(tsc, copyJSON));
//   done();
// }

// exports.watch = watcher;

// // version ^3.9.1
// gulp.task('compileTS', function(done) {
//   gulp
//     .src('./src/**/*')
//     .pipe(tsProject())
//     .pipe(gulp.dest('./dist/'));
//   done();
// });

// gulp.task('watch', ['compileTS'], function() {
//   // gulp.watch('./src/**/*', ['compileTS']);
// });

// gulp.task('default', ['compileTS']);

// version ^4.0.2
// function copyJSON(cb) {
//   cb();
//   return src('./src/**/*.json').pipe(dest('./dist/'));
// }

// gulp.task('compileTS', function() {
//   return gulp
//     .src('./src/**/*')
//     .pipe(tsProject())
//     .pipe(gulp.dest('./dist/'));
// });

// gulp.task('watch', gulp.series('compileTS'))
// gulp.task('default', gulp.series('compileTS'))
