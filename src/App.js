import React, { Component } from 'react';
import Routes from './routes/index.jsx';
// import logo from './logo.svg';
import './App.css';
// import { CLIENT_RENEG_LIMIT } from 'tls';

class App extends Component {

  // static getDerivedStateFromProps(nextProps, preState) {
  //   console.log({nextProps, preState})
  // }

  render() {
    return (
      <div className="App">
        <Routes />
      </div>
    );
  }
}

export default App;
