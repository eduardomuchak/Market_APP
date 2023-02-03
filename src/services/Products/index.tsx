import { api } from '../../lib/axios';

export const getAllProducts = async () => {
  const response = await api.get('/products');
  return response.data;
};

export const getProductById = async (id: string) => {
  const response = await api.get(`/products/${id}`);
  return response.data;
};

export const getProductsByCategory = async (category: string) => {
  const response = await api.get(`/products?category=${category}`);
  return response.data;
};
