import React from 'react';
import ListItem from './ListItem';

const VideoList = (props) => {
    const item = props.list.map((e, i) => {
        return <ListItem video={e} key={i} 
                         onSelected={props.onSelected} />
    });

    return (
        <div>
            <ul className="col-md-4 list-group">
                {item}
            </ul>
        </div>
    )
}

export default VideoList;