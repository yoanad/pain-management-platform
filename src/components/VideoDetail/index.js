import React, { useState } from 'react';
import { Dialog, DialogTitle, DialogContent, DialogActions, DialogButton } from 'rmwc';

export const VideoDetail = ({ video }) => {
    const [open, setOpen] = useState(true);
    // const [videoSrc, setVideoSrc] = useState('');

    // if (!video) {
    //     setOpen(false);
    //     return "Your video will apear here."
    // } else {
    //     setVideoSrc(`https://www.youtube.com/embed/${video.id.videoId}`);
    //     setOpen(true);
    // }
    const videoSrc = `https://www.youtube.com/embed/${video.id.videoId}`;

    return (
        <div className="Video-Detail">
            <Dialog
                open={open}
                onClose={evt => {
                    setOpen(false);
                }}
                onClosed={evt => console.log(evt.detail.action)}
            >
                <DialogTitle>{video.snippet.title}</DialogTitle>
                <DialogContent>
                    <div className="Video-Thumbnail">
                        <iframe src={videoSrc} allowFullScreen title='Video player' />
                    </div>
                    <div className=''>
                        <h4 className="Video-Title">{video.snippet.title}</h4>
                        <p>{video.snippet.description}</p>
                    </div>

                </DialogContent>
                <DialogActions>
                    <DialogButton action="close">Cancel</DialogButton>
                </DialogActions>
            </Dialog>
        </div>
    );
};
