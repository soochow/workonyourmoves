import React, {Component} from 'react';

import "./SocialLinks.css"

class SocialLinks extends Component {
    render() {
        return (
            <div className="SocialLinks">
                <a href="https://www.instagram.com/workonyourmoves/" target="_blank">
                    <img className="SocialLink" src="instagramicon.png" alt="Work On Your Moves Instagram Page"/>
                </a>
                <a href="https://www.facebook.com/workonyourmoves" target="_blank">
                    <img className="SocialLink" src="facebookicon.png" alt="Work On Your Moves Facebook Page"/>
                </a>
                <a href="https://tinyletter.com/workonyourmoves" target="_blank">
                    <img className="SocialLink" src="emailicon.png" alt="Email Work On Your Moves"/>
                </a>
            </div>
        )
    }
}

export default SocialLinks;
