import React, { Component } from 'react';
import './App.css';
import VideoForm from './VideoForm';

class App extends Component {

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Learn from Youtube</h2>
        </div>
        <p className="App-intro">
          Paste in an embeddable youtube link to play it below!!!
        </p>
        <VideoForm url="https://www.youtube.com/embed/6peHtgK0-tM" />
      </div>
    );
  }
}

export default App;
