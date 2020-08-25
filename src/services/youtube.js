import axios from 'axios';
import config from './config';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 1,
        key: config.api_key
    },
    headers: {
        'Content-Type': null
    },
})