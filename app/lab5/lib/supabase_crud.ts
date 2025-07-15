import { supabase } from './supabase';

export const getUsers = async () => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .select('*')
    .order('id', { ascending: true });
  if (error) throw error;
  return data;
};

export const addUser = async (user: { age: number; name: string }) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .insert([user]);
  if (error) throw error;
  return data;
};

export const updateUser = async (id: number, updates: { age?: number; name?: string }) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .update(updates)
    .eq('id', id);
  if (error) throw error;
  return data;
};


export const deleteUser = async (id: number) => {
  const { data, error } = await supabase
    .from('sampledatabase')
    .delete()
    .eq('id', id);
  if (error) throw error;
  return data;
};