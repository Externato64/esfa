import axios from 'axios';

export const api = axios.create({
  baseURL: process.env.NEXT_PUBLIC_ESFA_API_URL,
  headers: {
    'x-api-key': process.env.NEXT_PUBLIC_ESFA_API_TOKEN,
  },
});
