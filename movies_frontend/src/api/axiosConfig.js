import axios from 'axios';

export default axios.create({
    baseURL: 'https://580d-171-250-164-137.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});