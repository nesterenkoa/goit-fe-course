const { src, dest, parallel } = require('gulp');
const concat = require('gulp-concat');
const browserify = require('browserify');
const babelify = require('babelify');
const source = require('vinyl-source-stream');
const imagemin = require('gulp-imagemin');
const path = require('path');
const gulp = require('gulp');
const wrap = require('gulp-wrap');
const declare = require('gulp-declare');
const merge = require('merge-stream');
const handlebars = require('gulp-handlebars');
const buffer = require('vinyl-buffer');
const sourcemaps = require('gulp-sourcemaps');
const util = require('gulp-util');
const del = require('del');
const browsersync = require("browser-sync").create();

function browserSync(done) {
  browsersync.init({
    server: {
      baseDir: './build/'
    },
    port: 3000
  });
  done();
}

function browserSyncReload(done) {
  browsersync.reload();
  done();
}

function html() {
  return src('src/**/*.html')
    .pipe(concat('index.html'))
    .pipe(dest('build'))
}

function css() {
  return src('src/**/*.css')
    .pipe(concat('styles.css'))
    .pipe(dest('build/css'))
    .pipe(browsersync.stream());
}

function js() {
  const bundler = browserify({
    entries: './src/App.js',
    debug: true,
    transform: [babelify.configure({
      presets: ['@babel/preset-env']
    })]
  });

  return bundler.bundle()
    .pipe(source('./src/App.js'))
    .pipe(buffer())
    .pipe(sourcemaps.init({ loadMaps: true }))
    .pipe(concat('app.js'))
    .on('error', util.log)
    .pipe(sourcemaps.write('./'))
    .pipe(gulp.dest('./build/js/'))
    .pipe(browsersync.stream());
}

function images() {
  return gulp.src('src/assets/*.png')
      .pipe(imagemin())
      .pipe(gulp.dest('build/assets'));
}

function templates() {
  const partials = gulp.src(['src/**/*.hbs'])
    .pipe(handlebars())
    .pipe(wrap(
      'Handlebars.registerPartial(<%= processPartialName(file.relative) %>, Handlebars.template(<%= contents %>));',
      {},
      {
        imports: {
          processPartialName: function(fileName) { return JSON.stringify(path.basename(fileName, '.js').substr(1));}
      }
    }));

  const templates = gulp.src('src/**/*.hbs')
    .pipe(handlebars())
    .pipe(wrap('Handlebars.template(<%= contents %>)'))
    .pipe(declare({
      namespace: 'MyApp.templates',
      noRedeclare: true
    }));

  return merge(partials, templates)
    .pipe(concat('templates.js'))
    .pipe(gulp.dest('build/js/'))
    .pipe(browsersync.stream());
};

function watchFiles() {
  gulp.watch('./src/**/*.css', css);
  gulp.watch('./src/**/*.js', js);
  gulp.watch('./src/**/*.hbs', templates);
}

function clean() {
  return del(['./build']);
}

const build = gulp.series(clean, parallel(html, css, js, images, templates));
const watch = gulp.parallel(watchFiles, browserSync);

exports.js = js;
exports.css = css;
exports.html = html;
exports.images = images;
exports.templates = templates;
exports.clean = clean;
exports.default = build;
exports.build = build;
exports.watch = watch;
exports.start = gulp.series(build, watch);
