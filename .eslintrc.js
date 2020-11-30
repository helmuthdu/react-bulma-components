module.exports = {
  env: {
    'jest/globals': true,
    'cypress/globals': true
  },
  globals: {
    React: 'writable'
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'plugin:@typescript-eslint/recommended',
    'plugin:cypress/recommended',
    'plugin:prettier/recommended',
    'prettier/@typescript-eslint',
    'prettier/react'
  ],
  plugins: ['prettier', 'jest', 'cypress', 'testing-library'],
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
  ]
};
