import React from 'react';
import ListItem from './ListItem';

const VideoList = (props) => {
    const item = props.list.map((video, i) => {
        return <ListItem video={video} key={i} />
    });

    return (
        <div>
            <ul className="col-sm-4 list-group">
                {item}
            </ul>
        </div>
    )
}

export default VideoList;