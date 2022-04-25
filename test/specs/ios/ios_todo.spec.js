const ToDoScreen = require("../../screenObjects/ios/todo.screen");
describe("todo list", () => {
  it("add todo list", async () => {
    await ToDoScreen.addButton.click();
    await ToDoScreen.listName.addValue("grocery");
    await ToDoScreen.createButton.click();
  });
  it("add items", async () => {
    await $('~grocery').click();
    await ToDoScreen.addItemButton.click();
    await ToDoScreen.itemTitleField.addValue("buy milk");
    // await ToDoScreen.dueField.click();
    // await ToDoScreen.datePicker.click();
    // await $('~Friday, April 29').click();
    // await $('//XCUIElementTypeWindow[@index=2]').click();
    await ToDoScreen.dueField.addValue("April 29, 2022");
    await ToDoScreen.createButton.click();
  });
  it("mark item as done", async () => {});
});
