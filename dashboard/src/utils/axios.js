import axios from 'axios';
axios.defaults.withCredentials = true;
axios.defaults.headers.common['Authorization'] = `Bearer ${localStorage.getItem("accessToken")}`;
axios.defaults.headers.post['panel'] = `true`;
axios.defaults.baseURL = 'http://localhost:8080/api';
export default axios;
