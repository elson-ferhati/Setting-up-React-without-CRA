import React from 'react';
import ReactDOM from 'react-dom';

import Home from '@Pages/Home';

import '@Assets/App.css';

class App extends React.Component {
  render() {
    return (
      <div class="title">
        <Home />
      </div>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('root'));
