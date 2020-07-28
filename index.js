const themekit = require('@shopify/themekit')
const yaml = require('js-yaml')
const fs = require('fs')

module.exports.new = () => {
  const doc = yaml.safeLoad(fs.readFileSync('./config.yml', 'utf8'))

  themekit.command('new', {
    password: doc.development.password,
    store: doc.development.store,
    name: process.argv[1] || 'Basic Theme'
  })
}
