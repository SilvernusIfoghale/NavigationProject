import axios from 'axios';

const BASE_URL = 'https://lauhub.onrender.com/api/v1';

const client = axios.create({ baseURL: BASE_URL });

export default client;
