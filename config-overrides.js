const {
  addDecoratorsLegacy,
  useEslintRc,
  override
} = require("customize-cra");

/* config-overrides.js */
module.exports = override(
  addDecoratorsLegacy(),
  useEslintRc()
)
