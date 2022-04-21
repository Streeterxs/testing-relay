// relay.config.js
module.exports = {
  src: "./src",
  language: 'typescript',
  schema: "./data/schema.graphql",
  exclude: ["**/node_modules/**", "**/__mocks__/**", "**/__generated__/**"],
}