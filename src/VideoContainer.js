import React, { Component } from 'react';

class VideoContainer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <iframe width="560" height="315" src="https://www.youtube.com/embed/GYrN1f6jGuk" frameborder="0" allowfullscreen></iframe>
    );
  }
}

export default VideoContainer;