module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/prettier',
    '@vue/typescript'
  ],
  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    "camelcase": 2,
    "semi": [0, "never"],
    "quotes": [1, "single"],
    "comma-dangle": [2, "never"]
  },
  parserOptions: {
    parser: 'typescript-eslint-parser'
  }
}
