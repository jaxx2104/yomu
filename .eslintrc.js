module.exports = {
  root: true,
  env: {
    es6: true,
    node: true
  },
  extends: [
    "plugin:@typescript-eslint/recommended",
    "plugin:vue/essential",
    "plugin:import/recommended",
    "plugin:import/typescript",
    "@vue/prettier",
    "@vue/typescript"
  ],
  rules: {
    "@typescript-eslint/camelcase": "off",
    "@typescript-eslint/explicit-function-return-type": "off",
    "@typescript-eslint/explicit-member-accessibility": "off",
    "@typescript-eslint/indent": "off",
    "@typescript-eslint/member-delimiter-style": "off",
    "@typescript-eslint/no-var-requires": "off",
    "@typescript-eslint/prefer-interface": "off",
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "prettier/prettier": "error",
    complexity: "error",
    "import/order": [
      "error",
      {
        groups: [
          ["builtin", "external", "internal"],
          ["parent", "sibling", "index"]
        ],
        "newlines-between": "always-and-inside-groups"
      }
    ]
  },
  parserOptions: {
    parser: "@typescript-eslint/parser"
  }
}
