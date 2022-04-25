const { DriverConfig } = require("appium/build/lib/extension/driver-config");

describe("ios Elements Tests", () => {
    xit("find element by accessiblity id", async () => {
        await $('~Alert Views').click();
        await $('~Simple').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
        await driver.acceptAlert();
    });
    xit("find element by class chain", async () => {
        //const alertText = '**/XCUIElementTypeStaticText[`label == "Alert Views"`]';
        const alertText = '**/XCUIElementTypeStaticText[`label CONTAINS "Alert"`]';
        await $(`-ios class chain:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
        await driver.acceptAlert();
    });
    xit("find element by predicate strings", async () => {
        // const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "Alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Simple"]').click();
        await expect(await driver.getAlertText()).toContain("A Short Title Is Best");
        await driver.acceptAlert();
    });
    xit("alert box", async () => {
        // const alertText = 'label == "Alert Views"';
        const alertText = 'value BEGINSWITH[c] "Alert"';
        await $(`-ios predicate string:${alertText}`).click();
        await $('//*[@label="Text Entry"]').click();
        await expect(await driver.getAlertText()).toContain("A message should be a short, complete sentence.");
        await $('XCUIElementTypeTextField').addValue("Hello")
        await $('//*[@label="OK"]');
        // await driver.acceptAlert();
    });
    xit("scrollable elements", async () => {
        await $('~Picker View').click();
        const redPicker = await $('~Red color component value');
        const bluePicker = await $('~Blue color component value');
        const greenPicker = await $('~Green color component value');
        redPicker.addValue("125");
        greenPicker.addValue("0");
        bluePicker.addValue("125");
        // await driver.execute('mobile: scroll', {element: redPicker.elementId, direction: "up"});
        // await driver.execute('mobile: scroll', {element: bluePicker.elementId, direction: "down"});
        await driver.pause(3000);
    });
  });