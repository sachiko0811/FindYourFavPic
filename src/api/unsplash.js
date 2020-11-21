import axios from 'axios';

export default axios.create({
    baseURL: 'https://api.unsplash.com',
    headers: {
        Authorization: 'Client-ID KAAsvFr439mUJAXpPSEe4DOgGGdh98x5uWJWdGv9v7Q'
    }
})