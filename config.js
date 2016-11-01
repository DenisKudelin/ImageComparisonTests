module.exports = {
    jasmine: {
        defaultTimeoutInterval: 30000
    },
    specs: [
        "./lib/**/*.js",
        "!./lib/CustomVisualsTests/ClientScripts/**/*Tests.js" // excludes client scripts.
    ],
    capabilities: [
        { browserName: "chrome" },
        { browserName: "internet explorer" },
        {
            browserName: "firefox",
            firefox_binary: getBrowserBinPath("firefox")
        }
    ],
    webdrivercss: {
        screenshotRoot: "./screenshots/",
        failedComparisonsRoot: "./screenshots/"
    },
    defaultTestPageUrl: "https://app.powerbi.com/view?r=eyJrIjoiNjU3ZTkwNGEtNjE0YS00YmRiLWE4MGYtOTc4OTQ2NGU4MTllIiwidCI6IjM3MjQ4MTdmLTU1YzktNDEzOC05M2Y4LTg2N2EzNTAzYmYxMSIsImMiOjZ9", // it's only for one visual.
    execFiles: [
        "./lib/CustomVisualsTests/ClientScripts/**/*.js"
    ]
}

function getBrowserBinPath(name) {
    var browsersConfig = require("browsers-binaries-standalone").create(__dirname + "/browsersConfig.js");
    var browser = browsersConfig.filter(x => x.name.toLowerCase() === name)[0];
    return browser && browser.getExecutablePath();
}