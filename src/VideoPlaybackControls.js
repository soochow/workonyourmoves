import React, { Component } from 'react';

class VideoPlaybackControls extends Component {
    constructor(props) {
        super(props);

        this.handleStartInputChange = this.handleStartInputChange.bind(this);
        this.handleEndInputChange = this.handleEndInputChange.bind(this);

        this.handleLoopChange = this.handleLoopChange.bind(this);

        this.handleRateChange = this.handleRateChange.bind(this);

        this.handlePlay = this.handlePlay.bind(this);
    }

    handleStartInputChange(e) {
        this.props.onStartInputChange(e.target.value);
    }

    handleEndInputChange(e) {
        this.props.onEndInputChange(e.target.value);
    }

    handleLoopChange(e) {
        this.props.onLoopInputChange(e.target.checked);
    }

    handleRateChange(e) {
        this.props.onRateInputChange(e.target.checked);
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
                &nbsp;&nbsp;
                <input
                    type="number"
                    placeholder="End time seconds"
                    value={this.props.end}
                    onChange={this.handleEndInputChange}
                />
                &nbsp;&nbsp;

                <input type="checkbox" value="loop" checked={this.props.loop} onChange={this.handleLoopChange} /> Loop
                &nbsp;&nbsp;&nbsp;

                <input type="checkbox" value="rate" checked={this.props.rate} onChange={this.handleRateChange} /> Slow Motion
                &nbsp;&nbsp;&nbsp;

                <input
                    type="submit"
                    value="Set"
                />
            </form>
        );
    }
}

export default VideoPlaybackControls;
