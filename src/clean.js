
const path = require("path"),
    fs = require("fs"),
    { spawnSync } = require("child_process");

const target = process.argv[2];
const buildDir = path.join(__dirname, "platforms", target, "build");

var customEnv = process.env;

if (target == "ios") {
}
else if (target == "android") {}

if ([ "ios", "android" ].includes(target)) {
    spawnSync("cordova", [ "clean", target ], {
        cwd: __dirname, env: customEnv,
    });

    if (fs.existsSync(buildDir)) {
        while (true) {
            try {
                fs.unlinkSync(buildDir);
                break;
            }
            catch {}
        }
    }
}
