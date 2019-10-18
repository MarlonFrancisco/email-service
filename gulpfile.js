const { watch, src, task, dest, series } = require("gulp");
const gulpTs = require("gulp-typescript");
const clean = require("gulp-clean");

const tsProject = gulpTs.createProject("./tsconfig.json");

task("compile", () => {
    return src("./lib/**/*.ts")
        .pipe(tsProject())
        .pipe(dest("./dist"));
});

task("clean", () => {
    return src("./dist")
        .pipe(clean());
});

const tasks = series(["clean", "compile"]);

task("watch", () => {
    return watch("./lib/**/*.*", { event: "change" }, tasks);
});