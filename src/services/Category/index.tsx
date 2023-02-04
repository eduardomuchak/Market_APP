import { api } from '../../lib/axios';
import { AllCategories, Category } from './interfaces';

// GET REQUESTS
export const getAllCategories = async () => {
  const { data } = await api.get('/categories');
  return data as AllCategories;
};

// POST REQUESTS
export const createCategory = async (payload: Category) => {
  const { data } = await api.post('/category', payload);
  return data;
};

// PATCH REQUESTS
export const updateCategory = async (categoryId: string, payload: Category) => {
  const { data } = await api.patch(`/category/${categoryId}`, payload);
  return data;
};

// DELETE REQUESTS
export const deleteCategory = async (categoryId: string) => {
  const { data } = await api.delete(`/category/${categoryId}`);
  return data;
};
