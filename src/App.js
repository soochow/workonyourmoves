import React, { Component } from 'react';
import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Learn from Youtube</h2>
        </div>
        <p className="App-intro">
          LOOK AT THIS ADORABLE TINY PUPPY VIDEO!!!
        </p>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/GYrN1f6jGuk" frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default App;
