// utils/supabase.ts
import { createClient } from '@supabase/supabase-js';
import Constants from 'expo-constants';

// Pull environment variables safely
const supabaseUrl = Constants.expoConfig.extra.EXPO_PUBLIC_SUPABASE_URL;
const supabaseKey = Constants.expoConfig.extra.EXPO_PUBLIC_SUPABASE_KEY;

// Create a single Supabase client instance
export const supabase = createClient(supabaseUrl, supabaseKey);

// Optional helper functions (example)
// Fetch all services
export const getServices = async () => {
  const { data, error } = await supabase.from('services').select('*');
  if (error) throw error;
  return data;
};

// Add a new message from contact form
export const addMessage = async (message: { name: string; email: string; text: string }) => {
  const { data, error } = await supabase.from('messages').insert([message]);
  if (error) throw error;
  return data;
};
