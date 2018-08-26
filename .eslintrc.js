module.exports = {
  env: { browser: true, node: true },
  root: true,
  extends: [
    'eslint:recommended',
    'plugin:prettier/recommended',
    'plugin:vue/recommended',
    "plugin:jest/recommended"
  ],
  parserOptions: {
    ecmaVersion: 2017
  }
}
