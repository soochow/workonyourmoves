import React, { Component } from 'react';
import YouTube from 'react-youtube';

class VideoContainer extends Component {
    constructor(props) {
        super(props);

        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    render() {
        return (
            <YouTube
                videoId={this.parse(this.props.url)}
                opts={{
                    height: '390',
                    width: '640',
                    playerVars: {
                        autoplay: 1,
                        controls: 0,
                        modestbranding: 1,
                        disablekb: 1,
                        rel: 0,
                        showinfo: 0,
                        start: this.props.start,
                        end: this.props.end,
                        loop: this.props.loop
                    }
                }}
                onStateChange={this.onPlayerStateChange}
            />
        );
    }

    onPlayerStateChange(event) {
        let playerStatus = event.data;
        let player = event.target;

        if (playerStatus === 0 && this.props.loop === true) { // ended
            player.seekTo(this.props.start, true);
        }
    }

    parse(url) {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);

        return (match && match[7].length === 11) ? match[7] : "dQw4w9WgXcQ";
    }
}

export default VideoContainer;
