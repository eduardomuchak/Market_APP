import { api } from '../../lib/axios';
import { AllCategories, Category, CreateCategory } from './interfaces';

// GET REQUESTS
export const getAllCategories = async () => {
  const { data } = await api.get('/categories');
  return data as AllCategories;
};

// POST REQUESTS
export const createCategory = async (payload: CreateCategory) => {
  const { data } = await api.post('/categories', payload);
  return data;
};

// PATCH REQUESTS
export const updateCategory = async (categoryId: string, payload: Category) => {
  const { data } = await api.patch(`/categories/${categoryId}`, payload);
  return data;
};

// DELETE REQUESTS
export const deleteCategory = async (categoryId: string) => {
  const { data } = await api.delete(`/categories/${categoryId}`);
  return data;
};
