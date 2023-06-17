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
    "media-feature-name-value-no-unknown": true,
    "media-feature-name-no-vendor-prefix": true,
    "property-no-vendor-prefix": [true, { "ignoreProperties": ["background-clip", "text-fill-color"] }],
    "selector-no-vendor-prefix": true,
    "value-no-vendor-prefix": true,
    "length-zero-no-unit": true,
    "function-name-case": "lower",
    "selector-type-case": "lower",
    "value-keyword-case": "lower",
    "alpha-value-notation": "percentage",
    "color-function-notation": "modern",
    "number-max-precision": 3,
    "color-hex-length": "short",
    "hue-degree-notation": "angle",
    "import-notation": "url",
    "keyframe-selector-notation": "percentage-unless-within-keyword-only-block",
    "media-feature-range-notation": "context",
    "selector-pseudo-element-colon-notation": "double",
    "font-family-name-quotes": "always-where-recommended",
    "function-url-quotes": "always",
    "selector-attribute-quotes": "always",
    "shorthand-property-no-redundant-values": true,
    "comment-whitespace-inside": "always",
    "at-rule-no-vendor-prefix": true,
    "plugin/file-max-lines": [1000, { "ignore": "blankLines" }]
  }
}
