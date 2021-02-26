module.exports = {
  parser: '@typescript-eslint/parser',
  env: {
    node: true,
    'jest/globals': true,
    'cypress/globals': true
  },
  globals: {
    React: 'writable'
  },
  extends: [
    'eslint:recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:react/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier'
  ],
  plugins: ['@typescript-eslint', 'prettier', 'jest', 'cypress', 'testing-library'],
  rules: {
    '@typescript-eslint/explicit-function-return-type': 0,
    '@typescript-eslint/prefer-interface': 0,
    'react/react-in-jsx-scope': 'off',
    'prettier/prettier': 'error',
    'no-console': 'off'
  },
  overrides: [
    {
      files: ['**/*.tsx'],
      rules: {
        'react/prop-types': 'off'
      }
    }
  ],
  settings: {
    react: {
      version: 'detect'
    }
  }
};
