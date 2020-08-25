import React, { useEffect, useState, useCallback } from 'react';
import youtube from '../../services/youtube';
import './Body.css';
import { VideoDetail } from '../VideoDetail';
import { VideoList } from '../VideoList';

const Body = () => {
    const [generalVideos, setGeneralVideos] = useState([]);
    const [physioVideos, setPhysioVideos] = useState([]);
    const [yogaVideos, setYogaVideos] = useState([]);
    const [selectedVideo, setSelectedVideo] = useState(null);
    const [showDialog, setShowDialog] = useState(false);

    let query;
    const problem = localStorage.getItem('mainProblem');

    if (problem) {
        query = `${problem} exercises`;
    } else {
        query = `pain reduction`;
    }

    useEffect(() => {
        const fetchData = async () => {
            const result1 = await youtube.get('/search', {
                params: {
                    q: query
                }
            })

            const result2 = await youtube.get('/search', {
                params: {
                    q: `physiotherapy ${query}`
                }
            })

            const result3 = await youtube.get('/search', {
                params: {
                    q: `yoga ${query}`
                }
            })

            setGeneralVideos(result1.data.items);
            setPhysioVideos(result2.data.items);
            setYogaVideos(result3.data.items);
        };

        fetchData();
    }, []);

    const handleVideoSelect = (video) => {
        setSelectedVideo(video);
    }

    return (
        <div className="Body">
            <div className="Video--Selected">
                {selectedVideo && <VideoDetail video={selectedVideo} open={showDialog} />}
            </div>
            <div className="Exercises">
                {problem ? <h4>Exercises for {problem} </h4> : <h4>Exercises</h4>}
                <VideoList handleVideoSelect={handleVideoSelect} videos={generalVideos} />
            </div>
            <div className="Yoga">
                {problem ? <h4>Yoga for {problem} </h4> : <h4>Yoga</h4>}
                <VideoList handleVideoSelect={handleVideoSelect} videos={physioVideos} />
            </div>
            <div className="Physio">
                {problem ? <h4>Physiotherapy for {problem} </h4> : <h4>Physiotherapy</h4>}
                <VideoList handleVideoSelect={handleVideoSelect} videos={yogaVideos} />
            </div>
        </div>
    )
}

export default Body;