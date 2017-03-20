import React, { Component } from 'react';
import './App.css';
import LinkForm from './LinkForm';
import VideoContainer from './VideoContainer';

class App extends Component {

  handleUrl(url) {
    alert('A URL was submitted: ' + url);
    event.preventDefault();

  }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <h2>Welcome to Learn from Youtube</h2>
        </div>
        <p className="App-intro">
          LOOK AT THIS ADORABLE TINY PUPPY VIDEO!!!
        </p>
        <LinkForm onUrlSubmitted={this.handleUrl.bind(this)} />
        <VideoContainer url="https://www.youtube.com/embed/GYrN1f6jGuk"/>
      </div>
    );
  }
}

export default App;
