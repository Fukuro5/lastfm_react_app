import axios from 'axios';

const api = axios.create();
api.defaults.baseURL = 'template';

const auth = window.localStorage.getItem('auth');

if (auth) {
  api.defaults.headers.common.Authorization = `Token ${auth}`;
}

export default api;
