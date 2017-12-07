import React, { Component } from 'react';
import UrlInput from "./UrlInput";
import VideoContainer from './VideoContainer';
import VideoPlaybackControls from "./VideoPlaybackControls";

import './App.css';
import SocialLinks from "./SocialLinks";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            enteredUrl: 'https://youtu.be/MKZpPew3G2E',
            selectedUrl: 'https://youtu.be/MKZpPew3G2E',

            enteredStartTime: '0:36',
            selectedStartTime: '0:36',

            enteredEndTime: '0:41',
            selectedEndTime: '0:41',

            enteredLoop: true,
            enteredRate: 0.75,
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

               <img className="AppLogo" src="workonyourmoveslogo.png" alt="work on your moves logo"/>

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

                <SocialLinks/>
            </div>
        );
    }
}

export default App;
