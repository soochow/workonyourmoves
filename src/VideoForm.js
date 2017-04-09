import React, { Component } from 'react';

class VideoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      videoUrl: props.url,
      typedUrl: props.url
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({typedUrl: event.target.value});
  }

  handleSubmit(event) {
    event.preventDefault();
    this.setState({videoUrl: this.state.typedUrl});
  }

  render() {
    return (
      <div>
      <form onSubmit={this.handleSubmit}>
        <label>
          URL:
          <input type="text" value={this.state.typedUrl} onChange={this.handleChange} />
        </label>
        <input type="submit" value="Load" />
      </form>
      <p> </p>
      <iframe width="560" height="315" src={this.state.videoUrl} frameborder="0" allowfullscreen></iframe>
      </div>
    );
  }
}

export default VideoForm;