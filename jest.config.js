module.exports = {
  moduleFileExtensions: ["js", "json", "vue"],
  transform: {
    ".*\\.(vue)$": "vue-jest",
    "^.+\\.js$": "<rootDir>/node_modules/babel-jest"
  },
  collectCoverageFrom: ["**/*.{js,vue}", "!**/node_modules/**"],
  snapshotSerializers: ["jest-serializer-vue"]
}
