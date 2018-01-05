import React, {Component} from 'react';

class VideoPlayer extends Component {
    
    render() {
        if (!this.props.list) {
            <div> Loading... </div>
        }
        
        const video = this.props.list;
        const URL = video.snippet;
        console.log(URL)

        return (
            <div className="video-detail col-md-8">
                <div className="embed-responsive embed-responsive-16by9">
                    <iframe src={URL} frameborder="0" className="embed-responsive-item"></iframe>
                </div>

                <div className="details">
                    <div></div>
                    <div></div>
                </div>
            </div>
        )
    }
}

export default VideoPlayer;