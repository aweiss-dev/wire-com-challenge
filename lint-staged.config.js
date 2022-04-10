module.exports = {
  "*.{json, md}": ["prettier --write"],
  "src/**/*.{js,ts,tsx}": [
    "eslint --fix",
    "stylelint",
    "prettier --write",
    "yarn test:findRelatedTests",
  ],
};
