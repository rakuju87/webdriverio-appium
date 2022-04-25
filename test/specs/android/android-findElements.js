describe("Android Elements Tests", () => {
  it("Find element by accessibility ID", async () => {
    //find element using accessibility id
    const appOption = await $("~App");
    // click on the element
    await appOption.click();
    //assertion
    const actionBar = await $("~Action Bar");
    await expect(actionBar).toBeExisting();
  });
  it("Find element by class name", async () => {
    //find element using class name
    const className = await $("android.widget.TextView");
    //assertion
    await expect(className).toHaveText("API Demos");
  });
  xit("Find element by xpath", async () => {
    //find element using xpath
    const alertDialogs = await $(
      "//android.widget.TextView[@content-desc='Alert Dialogs']"
    );
    await alertDialogs.click();
    // find element by resource id
    await $(
      "//android.widget.Button[@resource-id='io.appium.android.apis:id/select_button']"
    ).click();
    // find by text
    await $("//android.widget.TextView[@text='Command one']").click();
    // find by class
    const headerTitle = await $("//android.widget.TextView");
    await expect(headerTitle).toHaveText("You selected: 0 , Command one");
  });
  xit("find element by UIAutomator", async () => {
    //find element by test contains
    await $('android=new UiSelector().textContains("Alert")').click();
  });
  it.only("find multiple elements", async () => {
    const expectedList = ["Views"];
    const actuallist = [];
    const textlist = await $$("android.widget.TextView");
    for (const element of textlist) {
    //   actuallist.push(await element.getText());
    }
    expect(actuallist).toHaveTextContaining(expectedList);
  });
});
