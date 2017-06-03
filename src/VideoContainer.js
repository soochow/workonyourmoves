import React, { Component } from 'react';
import PropTypes from 'prop-types';
import YouTube from 'react-youtube';

class VideoContainer extends Component {
    constructor(props) {
        super(props);

        this.state = {height: 390};

        this.onPlayerReady = this.onPlayerReady.bind(this);
        this.onPlayerStateChange = this.onPlayerStateChange.bind(this);
    }

    updateHeight() {
        this.setState({ height: window.innerHeight - 220 + 'px' });
    }

    componentWillMount() {
        this.updateHeight();
    }

    render() {
        this.playerRate(this.props.rate);

        return (
            <YouTube
                videoId={VideoContainer.parse(this.props.url)}
                opts={{
                    height: this.state.height,
                    width: '75%',
                    playerVars: {
                        autoplay: 1,
                        controls: 1,
                        modestbranding: 1,
                        disablekb: 1,
                        rel: 0,
                        showinfo: 0,
                        start: VideoContainer.hmsToSeconds(this.props.start),
                        end: VideoContainer.hmsToSeconds(this.props.end)
                    }
                }}
                onReady={this.onPlayerReady}
                onStateChange={this.onPlayerStateChange}
            />
        );
    }

    onPlayerReady(event) {
        this.player = event.target;

        this.player.setPlaybackRate(this.props.rate);
    }

    onPlayerStateChange(event) {
        this.player = event.target;
        let playerStatus = event.data;

        this.player.setPlaybackRate(this.props.rate);

        if (playerStatus === 0 && this.props.loop === true) { // ended
            this.player.seekTo(VideoContainer.hmsToSeconds(this.props.start), true);
        }
    }

    playerRate(rate) {
        if (typeof this.player !== "undefined") {
            this.player.setPlaybackRate(rate);
        }
    }

    static parse(url) {
        let regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
        let match = url.match(regExp);

        return (match && match[7].length === 11) ? match[7] : "dQw4w9WgXcQ";
    }

    static hmsToSeconds(str) {
        if (str.length === 0) {
            return str;
        }

        var p = str.split(':'),
            s = 0, m = 1;

        while (p.length > 0) {
            s += m * parseInt(p.pop(), 10);
            m *= 60;
        }

        return s;
    }
}

VideoContainer.propTypes = {
    url: PropTypes.string.isRequired,
    start: PropTypes.string.isRequired,
    end: PropTypes.string.isRequired,
    loop: PropTypes.bool.isRequired,
    rate: PropTypes.number.isRequired
};

export default VideoContainer;
