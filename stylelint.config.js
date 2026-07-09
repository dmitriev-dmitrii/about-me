module.exports = {
  extends: ['stylelint-config-standard'],
  overrides: [
    {
      files: ['*.vue', '**/*.vue'],
      customSyntax: 'postcss-html',
    },
  ],
  rules: {
    'selector-class-pattern': [
      '^[a-z][a-zA-Z0-9-]*(__[a-z][a-zA-Z0-9-]*)?(--[a-z][a-zA-Z0-9-]*)?$',
      {
        message: 'Expected class selector to be in BEM format (block__element--modifier)',
      },
    ],
    'media-feature-range-notation': null,
    'value-keyword-case': ['lower', { camelCaseSvgKeywords: true }],
    'font-family-name-quotes': 'always-unless-keyword',
    'declaration-block-no-shorthand-property-overrides': null,
    'no-descending-specificity': null,
    'custom-property-pattern': null,
    'declaration-block-single-line-max-declarations': null,
    'selector-pseudo-element-no-unknown': null,
    'selector-pseudo-class-no-unknown': null,
    'no-empty-source': null,
    'block-no-empty': null,
  },
}
