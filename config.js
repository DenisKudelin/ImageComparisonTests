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
        //{ browserName: "firefox" },
        /*{
            name: "chromium",
            browserName: "chrome",
            chromeOptions: {
                binary: "D:/ChromiumPortable/App/Chromium/64/Chrome.exe",
            }
        }*/
    ],
    defaultTestPageUrl: "https://msit.powerbi.com/view?r=eyJrIjoiZGVmNjUyZmItODIxMC00MzI0LWE4ZDAtNzIxZGY5NzhjZGFlIiwidCI6IjcyZjk4OGJmLTg2ZjEtNDFhZi05MWFiLTJkN2NkMDExZGI0NyIsImMiOjV9",
    execFiles: [
        "./lib/CustomVisualsTests/ClientScripts/**/*.js"
    ]
}