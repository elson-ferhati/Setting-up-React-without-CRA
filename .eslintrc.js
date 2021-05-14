module.exports = {
  env: {
    es6: true,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 6,
  },
  rules: {
    'no-eval': 1,
    'no-console': 1, // Means warning
    'prettier/prettier': 2, // Means error
  },
  settings: {
    react: {
      version: '17.0.2',
    },
    'import/resolver': {
      alias: {
        map: [
          ['@Components', './src/components'],
          ['@Pages', './src/pages'],
          ['@Assets', './src/assets'],
        ],
      },
    },
  },
};
