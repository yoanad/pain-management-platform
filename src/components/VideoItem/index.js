import React from 'react';
import { Elevation } from 'rmwc';

export const VideoItem = ({ video, handleVideoSelect }) => {
    return (
        <Elevation z={2} className="Elevation-Video">
            <div onClick={() => handleVideoSelect(video)} className='Video-Item'>
                <img className='Video-Thumbnail' src={video.snippet.thumbnails.medium.url} alt={video.snippet.description} />
                <div className=''>
                    <div className='Video-Title'>{video.snippet.title}</div>
                </div>
            </div>
        </Elevation>
    );
};
