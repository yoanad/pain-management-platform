import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogButton } from 'rmwc';
import YouTube from 'react-youtube';

export const VideoDetail = ({ video }) => {
    const [_open, _setOpen] = useState(true);
    const opts = {
        height: '390',
        width: '640',
        playerVars: {
            // https://developers.google.com/youtube/player_parameters
            autoplay: 1,
        },
    }

    return (
        <div className="Video-Detail">
            <div className="Video-Thumbnail">
                <YouTube
                    videoId={video.id.videoId}
                    opts={opts}
                />
            </div>
            <div className=''>
                <h4 className="Video-Title">{video.snippet.title}</h4>
                <p>{video.snippet.description}</p>
            </div>
        </div>
    );
};
