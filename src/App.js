import React, { Component } from 'react';
import './App.css';
import VideoContainer from './VideoContainer';
import UrlInput from "./UrlInput";

class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            typedUrl: 'https://www.youtube.com/embed/6peHtgK0-tM',
            selectedUrl: 'https://www.youtube.com/embed/6peHtgK0-tM'
        };

        this.handleUrlInput = this.handleUrlInput.bind(this);
        this.handleUrlSelection = this.handleUrlSelection.bind(this);
    }

    handleUrlInput(url) {
        this.setState({
            typedUrl: url
        });
    }

    handleUrlSelection() {
        this.setState({
            selectedUrl: this.state.typedUrl
        });
    }

    render() {
        return (
            <div className="App">
                <div className="App-header">
                    <h2>Welcome to Learn from Youtube</h2>
                </div>
                <p className="App-intro">
                    Paste in an embeddable youtube link to play it below!!!
                </p>
                <UrlInput
                    url={this.state.typedUrl}
                    onUrlInputChange={this.handleUrlInput}
                    onUrlSelected={this.handleUrlSelection}
                />
                <VideoContainer
                    url={this.state.selectedUrl}
                />
            </div>
        );
    }
}

export default App;
