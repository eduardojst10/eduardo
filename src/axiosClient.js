import axios from 'axios';

export const client = axios.create({
  baseURL: 'https://test-endpoint/portfolio/api/' // Replace with your actual endpoint
});