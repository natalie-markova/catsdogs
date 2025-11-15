import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5001';

export const $api = axios.create({
   baseURL: 'https://catsdogs-backend-rqo8.onrender.com',
   withCredentials: true
});
