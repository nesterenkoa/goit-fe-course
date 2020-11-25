'use strict';
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	prefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	sourcemaps = require('gulp-sourcemaps'),
	rigger = require('gulp-rigger'),
	cleanCSS = require('gulp-clean-css'),
	rimraf = require('rimraf'),
	browserSync = require('browser-sync'),
	plumber = require('gulp-plumber'),
	replace = require('gulp-replace'),
	htmlmin = require('gulp-htmlmin'),
	spritesmith = require('gulp.spritesmith'),
	fileinclude = require('gulp-file-include'),
	concat = require('gulp-concat'),
	babel = require('gulp-babel'),
	babelify = require('babelify'),
	uglify = require('gulp-uglify'),
	browserify = require('browserify'),
	reload = browserSync.reload;

var path = {
	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/img/',
		fonts:'build/fonts/',
	},
	src: {
		html: ['src/**/*.html','!src/template/**/*.html','!src/template'],
		js: 'src/js/**/*.js',
		style: 'src/style/*.scss',
		img: 'src/img/**/*',
		fonts:'src/fonts/*.*',
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		img: 'src/img/**/*.*',
		style: 'src/style/**/*.scss',
		fonts:'src/fonts/*.*',
	}
};

gulp.task('webserver', function(){
	browserSync({
		server: {
			baseDir:"./build"
		},
		host: "localhost",
		port: 3000,
		tunnel: false
	});
});

gulp.task('html:build',function(){
	var now = new Date().getTime();
	gulp.src(path.src.html)
		.pipe(plumber())
		.pipe(rigger())
		.pipe(fileinclude({
			prefix: '@@',
			basepath: '@file'
		}))
		.pipe(gulp.dest(path.build.html))
		.pipe(reload({stream: true}));
});

gulp.task('html:prod',function(){
	var now = new Date().getTime();
	gulp.src(path.src.html)
		.pipe(plumber())
		.pipe(rigger())
		.pipe(htmlmin({
			collapseWhitespace: true,
			removeComments: true,
			useShortDoctype: true,
		}))
		.pipe(gulp.dest(path.build.html));
});

gulp.task('img:build',function(){
	gulp.src(path.src.img)
		.pipe(plumber())
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
});

gulp.task('js:build',function(){
	gulp.src(path.src.js)
		.pipe(babel())
		.pipe(concat('script.js'))
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream:true}));
});


gulp.task('js:prod',function(){
	gulp.src(path.src.js)
		.pipe(babel())
		.pipe(uglify())
		.pipe(concat("script.js"))
		.pipe(gulp.dest(path.build.js));
});

gulp.task('style:build', function(){
	gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sourcemaps.init())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(sourcemaps.write())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream:true}));
});

gulp.task('style:prod', function(){
	gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(cleanCSS({ level: 1 }))
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream:true}));
});

gulp.task('fonts:build', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
	'html:build',
	'style:build',
	'img:build',
	'fonts:build',
]);

gulp.task('prod', [
	'js:prod',
	'style:prod',
	'html:prod',
	'img:build',
	'fonts:build',
]);

gulp.task('sprite', function() {
	var spriteData =
		gulp.src('src/img/sprite/*.*') // путь, откуда берем картинки для спрайта
			.pipe(spritesmith({
				algorithm: 'left-right',
				algorithmOpts: {sort: false},
				imgName: 'wm_sprite_vivace_L.png',
				cssName: 'sprite.css',
				imgOpts: {
					timeout: 100
				}
			}));

	spriteData.img.pipe(gulp.dest('src/img/sprite/1/')); // путь, куда сохраняем картинку
	spriteData.css.pipe(gulp.dest('src/img/sprite/1/')); // путь, куда сохраняем стили
});

gulp.task('watch', function(){
	watch([path.watch.img], function(ev, callback) {
		gulp.start('img:build');
	});
	watch([path.watch.js], function(ev, callback) {
		gulp.start('js:build');
	});
	watch([path.watch.html], function(ev, callback) {
		gulp.start('html:build');
	});
	watch([path.watch.style], function(ev, callback) {
		gulp.start('style:build');
	});
	watch([path.watch.fonts], function(ev, callback) {
		gulp.start('fonts:build');
	});
});

gulp.task('clean', function(callback){
	rimraf(path.clean, callback);
});

gulp.task('default', ['build', 'webserver', 'watch']);
