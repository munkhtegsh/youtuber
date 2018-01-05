import React from 'react';

const VideoPlayer = (props) => {
    // const video = props.list;
    const video = props.list;
    if(!video) {
        return <div>loading...</div>
    }

    const videoId = video.id.videoId;
    const url = `https://www.youtube.com/embed/${videoId}`;

    console.log(video.snippet)
    return (
        <div className="video-detail col-md-8">
            <div className="embed-responsive embed-responsive-16by9">
                <iframe className="embed-responsive-item" src={url} title={video.snippet.title}></iframe>
            </div>

            <div className="details">
                <div>{video.snippet.title}</div>
                <div>{video.snippet.description}</div>
            </div>
        </div>
    )
}

export default VideoPlayer;