const path = require("path");
const { config } = require("./wdio.shared.conf");

// ====================
// Runner Configuration
// ====================
//
config.port = 4723;

//
// ============
// Specs
// ============
config.specs = ["./test/specs/ios/*.spec.js"];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "ios",
    "appium:platformVersion": "15.4",
    "appium:deviceName": "iPhone 13 Pro",
    "appium:automationName": "XCUITest",
    "appium:app": path.join(process.cwd(), "app/ios/MVCTodo.app"),
  },
];

config.services = ["appium"];
exports.config = config;
