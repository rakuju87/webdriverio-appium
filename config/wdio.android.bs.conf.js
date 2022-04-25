const { config } = require("./wdio.shared.conf");

//
// ============
// BrowserStack Credentials
// ============
config.user = process.env.BROWSERSTACK_USER;
config.key = process.env.BROWSERSTACK_KEY;

//
// ============
// Specs
// ============
config.specs = ["./test/specs/android/*.spec.js"];

//
// ============
// Capabilities
// ============
// Devices available in Free plan are Google Pixel 3-9.0,Samsung Galaxy S10e-9.0,iPhone 11 Pro-13.2,iPhone 11 Pro Max-13.4
config.capabilities = [
  {
    platformName: "Android",
    "appium:platformVersion": "9.0",
    "appium:deviceName": "Google Pixel 3",
    "appium:automationName": "UIAutomator2",
    "appium:app": "bs://f101d707f6a6f1146542221ec40d26e9d972e25b",
    "appium:autoGrantPermissions": true,
  },
];

//
// Test runner services
// Services take over a specific job you don't want to take care of. They enhance
// your test setup with almost no effort. Unlike plugins, they don't add new
// commands. Instead, they hook themselves up into the test process.
config.services = ["browserstack"];

exports.config = config;
