# Setting up React without create-react-app

##### Create a folder and cd into it
```sh
mkdir my-app
cd my-app
```

##### Create a package.json file by runing
```sh
yarn init
```

##### Install webpack:
```sh
yarn add -D webpack webpack-cli webpack-dev-server html-webpack-plugin
```

##### Install babel:
```sh
yarn add -D @babel/core babel-loader @babel/preset-env @babel/preset-react
```

##### Install react and react-dom
```sh
yarn add react react-dom
```

---

##### Create a `template.html` file in the src folder
```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <title><%= htmlWebpackPlugin.options.title %></title>
  </head>

  <body>
    <div id="root"></div>
  </body>
</html>
```

<br />

##### Create a `index.js` in the src folder

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

class App extends React.Component {
  render() {
    return <div>Hey!</div>;
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
```

<br />

##### Create a `webpack.config.js` in the root of the project

```js
const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const webpack = require('webpack');
const distFolder = path.resolve(__dirname, './dist');

module.exports = {
  mode: 'development',
  entry: {
    main: path.resolve(__dirname, './src/index.js'),
  },
  output: {
    path: distFolder,
    filename: '[name].bundle.js',
    publicPath: '/',
  },
  devServer: {
    port: 9500,
    contentBase: distFolder,
    compress: true, // Enable gzip compression for everything served
    hot: true, // Enable webpack's Hot Module Replacement feature
    open: true, // Tells dev-server to open the browser after server had been started. Set it to true to open your default browser.
    historyApiFallback: true, // Will redirect 404s to /index.html
  },
  plugins: [
    new HtmlWebpackPlugin({
      title: 'Webpack Test',
      template: path.resolve(__dirname, './src/template.html'),
      filename: 'index.html', // output file
    }),
    // Only update what has changed on hot reload
    new webpack.HotModuleReplacementPlugin(),
  ],
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: path.resolve(__dirname, './node_modules/'),
        use: {
          loader: 'babel-loader',
        },
      },
    ],
  },
};
```

<br />

##### Create a `.babelrc` in the root of the project
```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

<br />

##### Edit the `package.json` file adding the scripts:
```json
{
  "scripts": {
    "build": "webpack",
    "dev:build": "webpack serve"
  }
}
```


### Run
```sh
yarn dev:build
```
Instead of building to a dist file, the development mode will just run everything in memory.
