const { defineConfig } = require('cypress')

module.exports = defineConfig({
  projectId: 'hy2cdj',  // This is your Cypress project ID
  e2e: {
    baseUrl: 'https://automationexercise.com',  // This is the base URL for your tests
  },
})
