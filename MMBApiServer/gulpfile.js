// 获取 gulp
var gulp = require('gulp')
// 获取 gulp-less 模块
var less = require('gulp-less');

var sourcemaps = require('gulp-sourcemaps');

// 编译less
// 在命令行输入 gulp less 启动此任务
gulp.task('less', function () {
	// 1. 找到 less 文件
	gulp.src('public/m/less/**/*.less')
		// 2. 编译为css
        .pipe(sourcemaps.init())
		.pipe(less())
        .pipe(sourcemaps.write('./maps'))
		// 3. 另存文件
		.pipe(gulp.dest('public/m/css'))
});

// 在命令行使用 gulp auto 启动此任务
gulp.task('auto', function () {
	// 监听文件修改，当文件被修改则执行 less 任务
	gulp.watch('public/m/less/**/*.less', ['less'])
})

// 使用 gulp.task('default') 定义默认任务
// 在命令行使用 gulp 启动 less 任务和 auto 任务
gulp.task('default', ['less', 'auto'])