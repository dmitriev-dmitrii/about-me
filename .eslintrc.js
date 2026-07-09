module.exports = {
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
    sourceType: 'module',
  },
  extends: ['plugin:vue/recommended', 'plugin:prettier/recommended'],
  plugins: ['vue'],
  rules: {
    'vue/multi-word-component-names': [
      'error',
      {
        ignores: ['default', 'error', 'index', 'contacts', 'experience', 'projects'],
      },
    ],
    'vue/no-v-html': 'off',
  },
}
