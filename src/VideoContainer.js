import React, { Component } from 'react';

class VideoContainer extends Component {
    render() {
        return (
            <iframe
                width="560"
                height="315"
                src={this.parse(this.props.url)}
                frameborder="0"
                allowfullscreen>
            </iframe>
        );
    }

    parse(url) {
        var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        var match = url.match(regExp);
        return (match && match[7].length === 11) ?
            "https://www.youtube.com/embed/" + match[7] :
            "https://www.youtube.com/embed/dQw4w9WgXcQ";
    }

}

export default VideoContainer;
