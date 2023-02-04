import { BACKEND_URL } from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: BACKEND_URL,
});
