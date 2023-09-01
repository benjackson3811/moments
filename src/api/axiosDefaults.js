import axios from 'axios';

axios.defaults.baseURL = 'https://project-drf-api-5febd367257d.herokuapp.com/'
axios.defaults.headers.post['Content-Type'] = 'multipart/form-data'
axios.defaults.withCredentials = true