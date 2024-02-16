import axios from 'axios';
import { getEnvirormentVariables } from '../utils/getEnvirormentVariables';

const { VITE_API_URL } = getEnvirormentVariables();

const managementApi = axios.create({
    baseURL: VITE_API_URL
})

export default managementApi;