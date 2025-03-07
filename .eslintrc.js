module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
    "jest/globals": true,
  },
  extends: ["eslint:recommended", "prettier"],
  parser: "@typescript-eslint/parser",
  parserOptions: {
    ecmaVersion: 12,
    sourceType: "module",
  },
  plugins: ["jest", "@typescript-eslint", "prettier"],
  rules: {
    semi: ["error", "always"],
    quotes: ["error", "double"],
    "@typescript-eslint/no-unused-vars": ["warn"],
    "import/no-dynamic-require": 0,
    "global-require": 0,
    "import/prefer-default-export": 0,
    "no-underscore-dangle": 0,
    "no-await-in-loop": 0,
    "no-restricted-syntax": 0,
    "no-return-await": 0,
    "no-console": "warn",
    "prettier/prettier": [
      "error",
      {
        endOfLine: "auto",
      },
    ],
    "jest/no-disabled-tests": "warn",
    "jest/no-focused-tests": "warn",
    "jest/no-identical-title": "error",
    "jest/prefer-to-have-length": "warn",
    "jest/valid-expect": "error",
  },
};
