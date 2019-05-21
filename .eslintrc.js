const isProduction = process.env.NODE_ENV === 'production';

module.exports = {
  parser: 'babel-eslint',
  env: {
    browser: true,
  },
  extends: [
    'airbnb',
    'plugin:jest/recommended',
    'plugin:jsx-a11y/recommended',
    'plugin:prettier/recommended',
    'prettier/react',
    'plugin:react/recommended',
  ],
  plugins: ['jsx-a11y', 'jest'],
  rules: {
    'import/no-extraneous-dependencies': 'off',
    'no-console': isProduction ? 'error' : 'warn',
    'no-unused-expressions': isProduction ? 'error' : 'warn',
    'no-unused-vars': isProduction ? 'error' : 'warn',
    'prettier/prettier': isProduction ? 'error' : 'off',
    'react/destructuring-assignment': 'off',
    'react/forbid-prop-types': 'off',
    'react/jsx-closing-bracket-location': isProduction ? 'error' : 'off',
    'react/jsx-filename-extension': 'off',
    'react/jsx-indent': isProduction ? 'error' : 'off',
    'react/jsx-indent-props': isProduction ? 'error' : 'off',
    'react/jsx-one-expression-per-line': 'off',
    'react/no-array-index-key': 'off',
    'react/require-default-props': 'off',
    'spaced-comment': isProduction ? 'error' : 'warn',
    'no-param-reassign': ['error', { ignorePropertyModificationsFor: ['result', 'accumulator'] }],
    'func-names': ['warn', 'never'],
  },
};
