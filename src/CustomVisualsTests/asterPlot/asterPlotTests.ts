///<reference path="../_references.ts"/>

namespace customVisualTests {

    // This actually runs in the browser context. It is used for intellisense.
    declare var visual: clientVisuals.AsterPlot;

    describe("AsterPlot", () => {
        beforeEach(() => {
            return browser
                .waitForVisible("svg.asterPlot g.asterSlices") // waits while visual is not rendered
                .execute(function() { // The code bellow runs at the browser context (on the client side).
                    // the global context is the simplest way to define variables and access them from different tests steps.
                    visual = new clientVisuals.AsterPlot();
                });
        });

        it("default", () => {
            return browser
                .execute(function() { // clicks on 2 slices of the Aster Plot visual
                    // access global variables defined in the beforeEach step
                    clientHelpers.clickElement(visual.slices.eq(0));
                    clientHelpers.clickElement(visual.slices.eq(1), true);
                })
                .assertAreaScreenshotMatch({ // performs image comparison verification
                    name: "svg.asterPlot", // This will be mapped to ./screenshots/originals/chrome/AsterPlot/default.svg.asterPlot.1920px.baseline.png
                    elem: "svg.asterPlot"
                });
        }/*, [Browser.InternetExplorer]*/);
    });
}