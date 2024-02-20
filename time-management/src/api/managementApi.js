import axios from 'axios';
import { getEnvirormentVariables } from '../utils/getEnvirormentVariables';

const { VITE_API_URL } = getEnvirormentVariables();

const managementApi = axios.create({
    baseURL: VITE_API_URL
});

//interceptors
managementApi.interceptors.request.use(config => {
    config.headers = {
        ...config.headers,
        'x-token': localStorage.getItem('token')
    }
    return config;
})

export default managementApi;