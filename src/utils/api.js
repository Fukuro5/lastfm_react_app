import axios from 'axios';

const api = axios.create();
api.defaults.baseURL = 'http://ws.audioscrobbler.com/';
api.defaults.headers.common.ApiKey = 'c46d1b0cd38b51dcfca1753a8a42ea20';

export default api;
