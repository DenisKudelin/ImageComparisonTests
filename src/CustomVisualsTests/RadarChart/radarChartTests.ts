///<reference path="../_references.ts"/>

namespace customVisualTests {

    // This actually runs in the browser context. It is used for intellisense.
    declare var visual: ClientVisuals.RadarChart;

    describe("RadarChart", () => {
        beforeEach(() => {
             return browser
                .waitForExist("iframe.visual-sandbox")
                .element("iframe.visual-sandbox").then((res) => browser.frame(res.value)) // switching the frame
                .waitForExist("svg.radarChart g.chartNode > *") // waits while visual is not rendered
                .then(() => jasmine.execClientScripts("./ClientVisuals.js", true).initConsoleLogReader()) // we have to init everything again after switching a frame.
                .execute(function() { // The code bellow runs at the browser context (on the client side).
                    // the global context is the simplest way to define variables and access them from different tests steps.
                    visual = new ClientVisuals.RadarChart();
                });
        });

        it("default", () => {
            return browser
                .execute(function() { // clicks on 2 slices of the Radar Chart visual
                    // access global variables defined in the beforeEach step
                    ClientHelpers.clickElement(visual.chartDotsGrouped[0].eq(0));
                    ClientHelpers.clickElement(visual.chartDotsGrouped[0].eq(1), true);
                })
                .assertAreaScreenshotMatch({ // performs image comparison verification
                    name: "svg.radarChart", // This will be mapped to ./screenshots/chrome/RadarChart/default.svg.radarChart.1920px.baseline.png
                    elem: "svg.radarChart"
                });
        });
    }, [Browser.Firefox, Browser.Chrome]); // IE doesn't support frame switching
}