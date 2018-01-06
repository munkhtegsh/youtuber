import React from 'react';

const ListItem = (props) => {
    const video = props.video;
    const onSelected = props.onSelected;
    const URL = video.snippet.thumbnails.default.url;

    return (
        <li onClick={() => onSelected(video)} className="list-group-item"> 
            <div className="video-list media">
                <div className="media-left">
                    <img className="media-object" alt="img" src={URL} />
                </div>
                <div className="media-body">
                    <div media-heading>{video.snippet.title}</div>
                </div>
            </div>
        </li>
    )
}

export default ListItem;