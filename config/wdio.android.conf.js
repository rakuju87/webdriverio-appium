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
config.specs = ["./test/specs/android/*.spec.js"];

//
// ============
// Capabilities
// ============
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "12.0",
    "appium:deviceName": "Pixel 5",
    "appium:automationName": "UIAutomator2",
    "appium:app": path.join(process.cwd(), "app/android/ApiDemos-debug.apk"),
  },
];
config.services = ["appium"];
exports.config = config;
