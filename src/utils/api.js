import axios from 'axios';

const api = axios.create();
api.defaults.baseURL = 'http://ws.audioscrobbler.com/';

export default api;
