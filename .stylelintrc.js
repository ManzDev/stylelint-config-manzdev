module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-stylistic/config",
    "stylelint-config-clean-order"
  ],
  "overrides": [
    { "files": ["**/*.css"] }
  ],
  "plugins": [
    "stylelint-file-max-lines"
  ],
  "rules": {
    "declaration-property-value-no-unknown": true,
    "plugin/file-max-lines": [1000, { "ignore": "blankLines" }]
  }
}
