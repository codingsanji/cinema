import axios from 'axios';

export default axios.create({
    baseURL: 'https://30e5-171-243-63-248.ngrok-free.app',
    headers:{"ngrok-skip-browser-warning": "true"}
});