import React, { Component } from 'react';
import Routes from './routes/index.jsx';
import { Provider } from 'react-redux';
import createStore from './store/createStore';
// import logo from './logo.svg';
import './App.css';

const store = createStore();

class App extends Component {

  render() {
    return (
      <div className="App">
        <Provider store={store}>
          <Routes />
        </Provider>
      </div>
    );
  }
}

export default App;
