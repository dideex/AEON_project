/* eslint-disable @typescript-eslint/no-var-requires */
/* config-overrides.js */

const rewireInlineImportGraphqlAst = require('react-app-rewire-inline-import-graphql-ast')

module.exports = function override(config, env) {
  config = rewireInlineImportGraphqlAst(config, env)
  return config
}
