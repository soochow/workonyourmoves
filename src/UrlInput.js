import React, { Component } from 'react';
import Button from 'react-mdc-web/lib/Button';

import './button.css';
import './input.css';

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
            <table>
                <tbody>
                <tr>
                    <td>
                        <input
                            className="inputField urlInput"
                            type="text"
                            placeholder="Enter YouTube video URL"
                            value={this.props.url}
                            onChange={this.handleUrlInputChange}
                        />
                    </td>

                    <td>
                        <Button
                            raised
                            onClick={this.handleUrlSubmit}
                        >
                            Load
                        </Button>
                    </td>
                </tr>
                </tbody>
            </table>
        );
    }
}

export default UrlInput;
