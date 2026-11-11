const { defineConfig } = require('@playwright/test');

module.exports = defineConfig({
  testDir: './tests',
  use: {
    launchOptions: {
      executablePath: process.env.CHROMIUM_PATH,
    },
  },
});
