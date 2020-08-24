import React from 'react';
import { VideoItem } from "../VideoItem";
export const VideoList = ({ videos, handleVideoSelect }) => {
    const renderedVideos = videos.map((video) => {
        return <VideoItem key={video.id.videoId} video={video} handleVideoSelect={handleVideoSelect} />;
    });

    return <div className='Video-List'>{renderedVideos}</div>;
};
