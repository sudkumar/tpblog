const gulp = require("gulp"),
      webpack = require("webpack-stream"),
      webpackConfig = require("./webpack.config.js"),
      // sass = require("gulp-sass"),
      browserSync = require("browser-sync").create();

gulp.task("serve", ["webpack"], function(){
  browserSync.init({
    server:{
      baseDir: "./src"
    },
    notify: false
  })

  watch_tasks();
});

gulp.task("webpack", function(){
  return gulp.src("./src/app/app.module.js")
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest("./src/assets/js/"))
    .pipe(browserSync.stream());
});

// gulp.task("sass", function(){
//   return gulp.src("./src/assets/css/sass/app.scss")
//     .pipe(sass().on("error", sass.logError))
//     .pipe(gulp.dest("./src/assets/css/"))
//     .pipe(browserSync.stream());
// });

gulp.task("default", ["serve"]);

function watch_tasks(){
  // gulp.watch("./src/assets/sass/**/*.scss", ["sass"]);
  gulp.watch(["./src/app/**/*.js", "./src/**/*.html"], ["webpack"]);
}
