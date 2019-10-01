import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {

  state = {
    stringsTracked: [
    {lengthOfString: 0,stringToBeCounted: 'the Current text'}]
  }

  textFieldChangeListener  = (event) => {
    const currentState = [...this.state.stringsTracked];
    const newString = event.target.value;
    const newLengthOfString = newString.length;

    currentState.lengthOfString = newLengthOfString;
    currentState.stringToBeCounted = newString;

    this.setState({stringsTracked: currentState})
  }

  render() {
    return (
      <div className="App">
        <input type = 'text' onChange = {(event) => this.textFieldChangeListener(event)}/>
        <p>{this.state.stringsTracked.stringToBeCounted}</p>
        <p>Length: {this.state.stringsTracked.lengthOfString}</p>
      </div>
    );
  }
}

export default App;
