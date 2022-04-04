const { defineConfig } = require('@vue/cli-service')

module.exports = defineConfig({
  transpileDependencies: true,
  proxy : 'https://www.afrihost.com/resources/'
})

