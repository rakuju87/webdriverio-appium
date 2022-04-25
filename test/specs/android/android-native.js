const { DriverConfig } = require("appium/build/lib/extension/driver-config");

describe("Android native feature tests", () => {
  xit("Access page directly", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.app.AlertDialogSamples"
    );
    await driver.pause(3000);
    await expect($('//*[@text="App/Alert Dialogs"]')).toBeExisting();
  });
  xit("Alert accept", async () => {
    await $("~OK Cancel dialog with a message").click();
    const alertbox = await $("//*[@resource-id='android:id/alertTitle']");
    await expect(alertbox).toExist();
    // await driver.acceptAlert();
    // await driver.dismissAlert();
    await $("//*[@resource-id='android:id/button1']").click();
    await expect(alertbox).not.toExist();
  });
  xit("vertical scrolling", async () => {
    await $("~App").click();
    await $("~Activity").click();
    //Scroll to end
    // await $("android=new UiScrollable(new UiSelector().scrollable(true)).scrollToEnd(1,5)")
    // scrollTextIntoView - more stable
    await $(
      'android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Secure Surfaces")'
    ).click();
    // await $("~Secure Surfaces").click();
    await expect($("~Secure Dialog")).toExist();
  });
  xit("horizontal scrolling", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.Gallery1"
    );

    // scrollTextIntoView - more stable
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
    ).click();
    await driver.pause(3000);
    await $(
      "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollBackward()"
    ).click();
    await driver.pause(3000);
  });
  it("date picker", async () => {
    await driver.startActivity(
      "io.appium.android.apis",
      "io.appium.android.apis.view.DateWidgets1"
    );
    const date = await $(
      '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
    );
    const currentDate = date.getText();
    // 3 month from today
    await $("~change the date").click();
    for (i = 0; i < 7; i++) {
      await $(
        "android=new UiScrollable(new UiSelector().scrollable(true)).setAsHorizontalList().scrollForward()"
      );
    }
    await $("//*[@text='10']").click();
    await $('//*[@text="OK"]').click();
    const newdate = await $(
      '//*[@resource-id="io.appium.android.apis:id/dateDisplay"]'
    );
    const newCDate = await newdate.getText();
    expect(newCDate).toContain("11-10-2022");
  });
});
