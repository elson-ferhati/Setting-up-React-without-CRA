# Setting up alias on webpack, eslint and vscode

#### Edit the `webpack.config.js` file adding the alias section:
```js
{
   resolve: {
    ...
    alias: {
      '@Components': path.resolve(__dirname, './src/components/'),
      '@Pages': path.resolve(__dirname, './src/pages/'),
      '@Assets': path.resolve(__dirname, './src/assets/'),
    },
  },
}
```

#### Install `eslint-import-resolver-alias`
```sh
yarn add -D eslint-import-resolver-alias
```

#### Edit the `.eslintrc.js` file adding the alias section:
```js
{
  ...
  settings: {
    ...
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
}
```

#### Edit the `jsconfig.json` file adding the paths section:
```json
{
  "compilerOptions": {
    ...
    "paths": {
      // Assuming your components/assets live in ./src
      // Update this path as necessary
      "@Components/*": ["./src/components/*"],
      "@Assets/*": ["./src/assets/*"],
      "@Pages/*": ["./src/pages/*"]
    }
  },
}
```