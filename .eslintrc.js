module.exports = {
  root: true,
  env: {
    node: true
  },
  'extends': [
    'plugin:vue/essential',
    '@vue/standard'
  ],
  rules: {
    'no-console': 0,
    'no-debugger': 0,
    'no-multiple-empty-lines': 0,
    'brace-style': 0,
    'no-eval': 0
  },
  parserOptions: {
    parser: 'babel-eslint'
  }
}
