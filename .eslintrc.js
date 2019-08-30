const path = require('path');

module.exports = {
  env: {
    'jest/globals': true
  },
  extends: [
    'react-app',
    'plugin:jest/recommended',
    'plugin:prettier/recommended',
    'prettier/react'
  ],
  plugins: ['jest', 'prettier'],
  rules: {
    'react/display-name': 0,
    'prettier/prettier': 'error',
    'react-hooks/rules-of-hooks': 'error',
    'no-console': 'off'
  },
  overrides: [
    {
      files: ['**/__tests__/**'],
      settings: {
        'import/resolver': {
          jest: {
            jestConfigFile: path.join(__dirname, './jest.config.js')
          }
        }
      }
    }
  ]
};
