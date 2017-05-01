import React, { Component } from 'react';

class VideoContainer extends Component {
    render() {
        return (
            <iframe
                width="560"
                height="315"
                src={this.buildEmbeddedUrl(this.props.url, this.props.start, this.props.end)}
                frameborder="0"
                allowfullscreen>
            </iframe>
        );
    }

    buildEmbeddedUrl(url, startTime, endTime) {
        const defaultPlayerParameters = "?showinfo=0&modestbranding=1&rel=0&disablekb=1&controls=1&autoplay=1";
        const baseYouTubeUrl = "https://www.youtube.com/embed/";

        let videoId = this.parse(url);

        let start = "&start=" + startTime;
        let end = "&end=" + endTime;

        return baseYouTubeUrl + videoId + defaultPlayerParameters + start + end;
    }

    parse(url) {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);

        return (match && match[7].length === 11) ? match[7] : "dQw4w9WgXcQ";
    }

}

export default VideoContainer;
