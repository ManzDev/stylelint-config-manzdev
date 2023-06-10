module.exports = {
  "extends": [
    "stylelint-config-standard",
    "stylelint-stylistic/config"
  ],
  "overrides": [
    { "files": ["**/*.css"] }
  ],
  "rules": {
    "declaration-property-value-no-unknown": true
  }
}
