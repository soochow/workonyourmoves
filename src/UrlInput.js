import React, { Component } from 'react';
import './Url-input.css';

class UrlInput extends Component {
    constructor(props) {
        super(props);
        this.handleUrlInputChange = this.handleUrlInputChange.bind(this);
        this.handleUrlSubmit = this.handleUrlSubmit.bind(this);
    }

    handleUrlInputChange(e) {
        this.props.onUrlInputChange(e.target.value);
    }

    handleUrlSubmit(e) {
        this.props.onUrlSelected();
        e.preventDefault();
    }

    render() {
        return (
            <form onSubmit={this.handleUrlSubmit}>
                <input
                    className="Url-input"
                    type="text"
                    width="999"
                    placeholder="Enter YouTube video URL"
                    value={this.props.url}
                    onChange={this.handleUrlInputChange}
                />

                <input
                    className="Url-submit"
                    type="submit"
                    value="Load"
                />
            </form>
        );
    }
}

export default UrlInput;
