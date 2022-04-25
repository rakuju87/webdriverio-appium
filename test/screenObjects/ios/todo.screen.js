class ToDoScreen {
  get addButton() {
    return $("~Add");
  }
  get listName() {
    const listName = 'value == "List Name"';
    return $(`-ios predicate string:${listName}`);
  }
  get createButton() {
    return $("~Create");
  }
  get addItemButton() {
    return $('//XCUIElementTypeStaticText[@name="Create item"]');
  }
  get itemTitleField() {
    const itemTitle = '**/XCUIElementTypeTextField[`value == "Title"`]';
    return $(`-ios class chain:${itemTitle}`);
  }
  get dueField(){
      const dueDate = '**/XCUIElementTypeTextField[`value == "Due"`]';
      return $(`-ios class chain:${dueDate}`)
  }
  get datePicker(){
      return $('~Date Picker');
  }
}
module.exports = new ToDoScreen();
