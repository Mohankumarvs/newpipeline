const { defineConfig } = require("cypress");
const allureWriter = require('@shelex/cypress-allure-plugin/writer');
module.exports = defineConfig({
  e2e: {
      setupNodeEvents(on, config) {
          allureWriter(on, config);
          return config;
      }
    },
 "defaultCommandTimeout":20000,
"pageLoadTimeout":20000,
"chromeWebSecurity":false,
"viewportWidth":1366,
"viewportHeight":768
  
});