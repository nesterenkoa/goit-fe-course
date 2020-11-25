'use strict';
var gulp = require('gulp'),
	watch = require('gulp-watch'),
	prefixer = require('gulp-autoprefixer'),
	sass = require('gulp-sass'),
	rigger = require('gulp-rigger'),
	cleanCSS = require('gulp-clean-css'),
	browserSync = require('browser-sync'),
	plumber = require('gulp-plumber'),
	replace = require('gulp-replace'),
	fileinclude = require('gulp-file-include'),
	reload = browserSync.reload;

var path = {
	build: {
		html: 'build/',
		js: 'build/js/',
		css: 'build/css/',
		img: 'build/images/',
		fonts:'build/fonts/',
	},
	src: {
		html: ['src/**/*.html','!src/templates/**/*.html','!src/templates'],
		js: 'src/js/*.js',
		style: 'src/style/*.scss',
		img: 'src/images/**/*.*',
		fonts:'src/fonts/**/*',
	},
	watch: {
		html: 'src/**/*.html',
		js: 'src/js/**/*.js',
		img: 'src/images/**/*.*',
		style: 'src/style/**/*.scss',
		fonts:'src/fonts/**/*',
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

gulp.task('js:build', function () {
	gulp.src(path.src.js)
		.pipe(rigger())
		.pipe(gulp.dest(path.build.js))
		.pipe(reload({stream: true}));
});

gulp.task('img:build',function(){
	gulp.src(path.src.img)
		.pipe(plumber())
		.pipe(gulp.dest(path.build.img))
		.pipe(reload({stream: true}));
});

gulp.task('style:build', function(){
	gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream:true}));
});
gulp.task('style:build_prod', function(){
	gulp.src(path.src.style)
		.pipe(plumber())
		.pipe(sass())
		.pipe(prefixer())
		.pipe(cleanCSS({
			level: 0,
			format: {
				breaks: {
					afterAtRule: true,
					afterBlockBegins: false,
					afterBlockEnds: false,
					afterComment: false,
					afterProperty: false,
					afterRuleBegins: false,
					afterRuleEnds: true,
					beforeBlockEnds: false,
					betweenSelectors: true
				}
			}
		}))
		.pipe(gulp.dest(path.build.css))
		.pipe(reload({stream:true}));
});

gulp.task('fonts:build', function() {
	gulp.src(path.src.fonts)
		.pipe(gulp.dest(path.build.fonts))
});

gulp.task('build', [
	'html:build',
	'js:build',
	'style:build',
	'fonts:build',
	'img:build',
]);
gulp.task('build_prod', [
	'html:build',
	'js:build',
	'style:build_prod',
	'fonts:build',
	'img:build',
]);

gulp.task('watch', function(){
	watch([path.watch.html], function(ev, callback) {
		gulp.start('html:build');
	});
	watch([path.watch.js], function(ev, callback) {
		gulp.start('js:build');
	});
	watch([path.watch.style], function(ev, callback) {
		gulp.start('style:build');
	});
	watch([path.watch.img], function(ev, callback) {
		gulp.start('img:build');
	});
	watch([path.watch.fonts], function(ev, callback) {
		gulp.start('fonts:build');
	});
});

gulp.task('default', ['build', 'webserver', 'watch']);
