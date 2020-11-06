module.exports = {
  extends: [
    "eslint:recommended",
    "plugin:import/errors",
    "plugin:jsx-a11y/recommended"
  ],
  rules: {
    "react/prop-types": 0,
    "no-console": 1
  },
  plugin: ["react", "import", "jsx-a11y"],
  parserOptions: {
    ecmaVersion: 2017
  },
  env: {
    node: true,
    es6: true
  },
  setting: {
    react: {
      version: "detect"
    }
  }
};
