import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import './ValidationComponent/ValidationComponent'
import './CharComponent/CharComponent'
import OutputTextLenght from './ValidationComponent/ValidationComponent';

class App extends Component {

  state = {
    stringsTracked: [
    {
      lengthOfString: 0,
      stringToBeCounted: ''},
    ],
    stringToArray:[]
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
        <OutputTextLenght textLength = {this.state.stringsTracked.lengthOfString}></OutputTextLenght>
      </div>
    );
  }
}

export default App;
