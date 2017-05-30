import React, { Component } from 'react';
import { Button, Textfield } from 'react-mdc-web';

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
            <div>
                <Textfield
                    style={{ width: "600px" }}
                    floatingLabel="YouTube video URL"
                    value={this.props.url}
                    onChange={this.handleUrlInputChange}
                />&nbsp;&nbsp;&nbsp;
                <Button
                    raised
                    onClick={this.handleUrlSubmit}
                >
                    Load
                </Button>
            </div>
        );
    }
}

export default UrlInput;
