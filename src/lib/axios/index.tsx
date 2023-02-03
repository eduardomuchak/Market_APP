import { SUPABASE_API_URL } from '@env';
import axios from 'axios';

export const api = axios.create({
  baseURL: SUPABASE_API_URL,
});
