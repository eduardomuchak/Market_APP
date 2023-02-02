import 'react-native-url-polyfill/auto';

import Constants from 'expo-constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { createClient } from '@supabase/supabase-js';
import { SUPABASE_API_URL, SUPABASE_ANON_KEY } from '@env';
import { Platform } from 'react-native';

export const supabase = createClient(SUPABASE_API_URL, SUPABASE_ANON_KEY, {
  auth: {
    storage: AsyncStorage as any,
    autoRefreshToken: true,
    persistSession: true,
    detectSessionInUrl: false,
  },
});

const isBrowser = () => Platform.OS === 'web';
export const supabaseConfig = isBrowser()
  ? { url: SUPABASE_ANON_KEY, publicKey: SUPABASE_ANON_KEY }
  : Constants.manifest?.extra?.supabase;
