var gulp = require('gulp');
var sass = require('gulp-sass');
var autoprefixer = require("gulp-autoprefixer"); // ベンダープレフィックス
var cmq = require('gulp-combine-media-queries');

// SassとCssの保存先を指定
gulp.task('sass', function(){
  gulp.src('./sass/**/*.scss')
    .pipe(sass({outputStyle: 'expanded'}))
    .pipe(autoprefixer()) // ここがautoprefixer
    .pipe(gulp.dest('./css/'));
});

//自動監視のタスクを作成(sass-watchと名付ける)
gulp.task('sass-watch', ['sass'], function(){
  var watcher = gulp.watch('./sass/**/*.scss', ['sass']);
  watcher.on('change', function(event) {
  });
});


// gulp-combine-media-queries

gulp.task('cmq', function () {
  gulp.src('css/**/*.css') // 見て欲しいファイルを指定

    .pipe(cmq({
      log: true
    })) // その名の通りlogを残すか否か

    .pipe(gulp.dest('./css')); // コンパイルしてほしい場所を指定
});

// タスク"task-watch"がgulpと入力しただけでdefaultで実行されるようになる
gulp.task('default', ['sass-watch', 'cmq']);
