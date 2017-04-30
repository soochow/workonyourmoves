import React, { Component } from 'react';

class VideoContainer extends Component {
    render() {
        return (
            <iframe
                width="560"
                height="315"
                src={this.props.url}
                frameborder="0"
                allowfullscreen>
            </iframe>
        );
    }
}

export default VideoContainer;
