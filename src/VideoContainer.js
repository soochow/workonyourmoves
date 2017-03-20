import React, { Component } from 'react';

class VideoContainer extends Component {
  constructor(props) {
    super(props);
    this.state = {value: 'https://www.youtube.com/embed/GYrN1f6jGuk'};
  }

  render() {
    return (
      <iframe width="560" height="315" src={this.state.value} frameborder="0" allowfullscreen></iframe>
    );
  }
}

export default VideoContainer;