import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { CLIENT_RENEG_LIMIT } from 'tls';

class App extends Component {

  count = 1;

  state = {
    count: 2
  }

  static getDerivedStateFromProps(nextProps, preState) {
    console.log({nextProps, preState})
  }

  // componentWillMount() {
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  // }

  // componentDidMount(){
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  // }

  // componentWillReceiveProps(){
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  //   this.setState({count: this.state.count +1 });
  //   console.log(this.state.count)
  // }

  

  render() {
    return (
      <div className="App">
       <div><span>{this.count}</span></div>
       <div><span>{this.state.count}</span></div>
      </div>
    );
  }
}

export default App;
