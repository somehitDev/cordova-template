
const path = require("path"),
    fs = require("fs"),
    { spawnSync } = require("child_process");

const target = process.argv[2];
const buildDir = path.join(__dirname, "platforms", target, "build");

var customEnv = process.env;
const args = process.argv.slice(3);

// pre-build
if (target == "electron") {
    customEnv["PYTHON_PATH"] = "python2"
}
else if (target == "ios") {
    args.push("--");
    args.push("--automaticProvisioning=false");
    args.push("--packageType=development")
}
else if (target == "android") {}

if (fs.existsSync(buildDir)) {
    while (true) {
        try {
            fs.unlinkSync(buildDir);
            break;
        }
        catch {}
    }
}


// build
spawnSync(
    "cordova",
    [ "build", target, ...args ],
    {
        cwd: __dirname, env: customEnv,
        stdio: [ process.stdin, process.stdout, process.stderr ],
        encoding: "utf-8"
    }
);


// post-build
if (target == "ios") {
    spawnSync(
        "xattr",
        [
            "-w", "com.apple.xcode.CreatedByBuildSystem", "true", buildDir
        ],
        {
            cwd: __dirname, env: customEnv,
            stdio: [ process.stdin, process.stdout, process.stderr ],
            encoding: "utf-8"
        }
    );
}
