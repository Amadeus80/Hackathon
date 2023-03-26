const { src, dest, watch, series } = require("gulp");
const sass = require("gulp-sass")(require("sass"));
const run = require("gulp-run");

function compilarSass(){
    return src("src/sass/app.scss")
    .pipe( sass() )
    .pipe( dest("build/css") );
}

function purgar(){
    return run("npm run purgar:css").exec();
}


function modo_watch(){
    watch("src/sass/**/*.scss", series(compilarSass, purgar));
}

exports.compilarSass = compilarSass;
exports.purgar = purgar;
exports.modo_watch = modo_watch;