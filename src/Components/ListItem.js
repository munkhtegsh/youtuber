import React from 'react';

const ListItem = (props) => {
    const video = props.video;
    const URL = video.snippet.thumbnails.default.url;

    return (
        <li className="list-group-item">
            <div className="media-body">
                <div media-heading>{video.snippet.title}</div>
            </div>
            <div className="video-list media">
                <div className="media-right">
                    <img className="media-object" alt="img" src={URL} />
                </div>
            </div>
        </li>
    )
}

export default ListItem;