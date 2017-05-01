import React, { Component } from 'react';

class VideoPlaybackControls extends Component {
    constructor(props) {
        super(props);

        this.handleStartInputChange = this.handleStartInputChange.bind(this);
        this.handleEndInputChange = this.handleEndInputChange.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }

    handleStartInputChange(e) {
        this.props.onStartInputChange(e.target.value);
    }

    handleEndInputChange(e) {
        this.props.onEndInputChange(e.target.value);
    }

    handlePlay(e) {
        this.props.onPlay();
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handlePlay}>
                <input
                    type="number"
                    placeholder="Start time seconds"
                    value={this.props.start}
                    onChange={this.handleStartInputChange}
                />
                <input
                    type="number"
                    placeholder="End time seconds"
                    value={this.props.end}
                    onChange={this.handleEndInputChange}
                />
                <input
                    type="submit"
                    value="Play"
                />
            </form>
        );
    }
}

export default VideoPlaybackControls;
