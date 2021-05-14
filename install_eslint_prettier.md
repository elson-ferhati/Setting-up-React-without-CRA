# Setting up eslint and prettier for react

#### Install eslint and prettier:
```sh
yarn add -D eslint eslint-plugin-react eslint-config-airbnb-base eslint-plugin-import eslint-config-prettier eslint-plugin-prettier prettier
```

#### Create a `.prettierrc.js` in the root of the project
```js
module.exports = {
  printWidth: 80, // Specify the line length that the printer will wrap on. Default 80
  tabWidth: 2, // Specify the number of spaces per indentation-level. Default 2
  semi: true, // Print semicolons at the ends of statements. Default true
  singleQuote: true, // Use single quotes instead of double quotes. Default false
  /*
    trailingComma options:
        > "es5" - Trailing commas where valid in ES5 (objects, arrays, etc.)
        > "none" - No trailing commas.
        > "all" - Trailing commas wherever possible
  */
  trailingComma: "es5", // Print trailing commas wherever possible when multi-line. (A single-line array, for example, never gets trailing commas.)
  bracketSpacing: true, // Print spaces between brackets in object literals. Default true Example: { foo: bar } | false - Example: {foo: bar}
  endOfLine: "lf", // "<lf|crlf|cr|auto>". Default lf
};
```

#### Create a `.eslintrc.js` in the root of the project
```js
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
  },
};
```

#### Create a `.eslintignore` in the root of the project
```
/node_modules
```