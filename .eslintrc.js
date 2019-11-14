module.exports = {
  'env': {
    'browser': true,
    'es6': true
  },
  'extends': [
    'eslint:recommended',
    'plugin:react/recommended'
  ],
  'globals': {
    'Atomics': 'readonly',
    'SharedArrayBuffer': 'readonly'
  },
  'parserOptions': {
    'ecmaFeatures': {
      'jsx': true
    },
    'ecmaVersion': 2018,
    'sourceType': 'module'
  },
  'plugins': [
    'react'
  ],
  'rules': {
    'linebreak-style': [
      1,
      'unix'
    ],
    'quotes': [
      1,
      'single'
    ],
    'semi': [
      1,
      'always'
    ],
    'react/prop-types': 0,
    "no-multiple-empty-lines": [1, { "max": 1 }],
    "prefer-const": [1, {
      "destructuring": "any",
      "ignoreReadBeforeAssign": false
    }],
    "eol-last": [1, "never"],
    "no-trailing-spaces": 1,
    "no-var": 2,
    "array-bracket-newline": [1, { "multiline": true }],
    "object-curly-spacing": [1, "always"]
  },
};