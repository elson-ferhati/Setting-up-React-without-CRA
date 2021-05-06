module.exports = {
  env: {
    es6: true,
    node: false,
    browser: true,
  },
  extends: [
    'eslint:recommended',
    'plugin:react/recommended',
    'airbnb-base',
    // If you use eslint-plugin-prettier, all you need is plugin:prettier/recommended:
    'plugin:prettier/recommended',
  ],
  plugins: ['react', 'prettier'],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
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
