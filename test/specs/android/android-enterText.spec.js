describe("Android Elements Tests", () => {
  it("Go to animation", async () => {
    //find element using accessibility id
    const appOption = await $("~Views");
    // click on the element
    await appOption.click();
    //assertion
    const animation = await $("~Animation");
    await expect(animation).toBeExisting();
  });
  it("Go to country text field", async () => {
    //find element using accessibility id
    await $("//android.widget.TextView[@content-desc='Auto Complete']").click();
    //assertion
    await $("//android.widget.TextView[@content-desc='1. Screen Top']").click();
  });
  it("enter text", async () => {
    const textfld = await $(
      "//*[@resource-id='io.appium.android.apis:id/edit']"
    );
    await textfld.addValue("Hello");
    await expect(textfld).toHaveText("Hello");
  });
});
