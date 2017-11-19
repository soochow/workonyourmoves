import React, { Component } from 'react';
import UrlInput from "./UrlInput";
import VideoContainer from './VideoContainer';
import VideoPlaybackControls from "./VideoPlaybackControls";

import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredUrl: 'https://www.youtube.com/embed/hkJX4fC0w68',
            selectedUrl: 'https://www.youtube.com/embed/hkJX4fC0w68',

            enteredStartTime: '',
            selectedStartTime: '',

            enteredEndTime: '',
            selectedEndTime: '',

            enteredLoop: false,
            enteredRate: 1.0,
        };

        this.handleUrlInput = this.handleUrlInput.bind(this);
        this.handleUrlSelection = this.handleUrlSelection.bind(this);

        this.handleStartTimeChange = this.handleStartTimeChange.bind(this);
        this.handleEndTimeChange = this.handleEndTimeChange.bind(this);
        this.handleLoopChange = this.handleLoopChange.bind(this);
        this.handleRateChange = this.handleRateChange.bind(this);
        this.handlePlay = this.handlePlay.bind(this);
    }

    handleUrlInput(url) {
        this.setState({
            enteredUrl: url
        });
    }

    handleUrlSelection() {
        this.setState({
            selectedUrl: this.state.enteredUrl
        });
    }

    handleStartTimeChange(start) {
        this.setState({
            enteredStartTime: start
        })
    }

    handleEndTimeChange(end) {
        this.setState({
            enteredEndTime: end
        })
    }

    handleLoopChange(checked) {
        this.setState({
            enteredLoop: checked
        })
    }

    handleRateChange(rate) {
        this.setState({
            enteredRate: rate
        })
    }

    handlePlay() {
        this.setState({
            selectedStartTime: this.state.enteredStartTime,
            selectedEndTime: this.state.enteredEndTime,
        })
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Work On Your Moves</h2>
                </div>

                <UrlInput
                    url={this.state.enteredUrl}
                    onUrlInputChange={this.handleUrlInput}
                    onUrlSelected={this.handleUrlSelection}
                />

                <VideoContainer
                    url={this.state.selectedUrl}
                    start={this.state.selectedStartTime}
                    end={this.state.selectedEndTime}
                    loop={this.state.enteredLoop}
                    rate={this.state.enteredRate}
                />

                <VideoPlaybackControls
                    start={this.state.enteredStartTime}
                    end={this.state.enteredEndTime}
                    loop={this.state.enteredLoop}
                    rate={this.state.enteredRate}

                    onStartInputChange={this.handleStartTimeChange}
                    onEndInputChange={this.handleEndTimeChange}
                    onLoopInputChange={this.handleLoopChange}
                    onRateInputChange={this.handleRateChange}
                    onPlay={this.handlePlay}
                />
            </div>
        );
    }
}

export default App;
