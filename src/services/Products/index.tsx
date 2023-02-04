import { api } from '../../lib/axios';
import { CreateProduct } from './interfaces';

// GET REQUESTS
export const getAllProducts = async () => {
  const { data } = await api.get('/products');
  return data;
};

export const getProductByCategoryId = async (categoryId: string) => {
  const { data } = await api.get(`/products/${categoryId}`);
  return data;
};

// POST REQUESTS
export const createProduct = async (payload: CreateProduct) => {
  const { data } = await api.post('/product', payload);
  return data;
};

// PATCH REQUESTS
export const updateProduct = async (
  productId: string,
  payload: CreateProduct,
) => {
  const { data } = await api.patch(`/product/${productId}`, payload);
  return data;
};

export const getToggleCheckedProduct = async (productId: string) => {
  const { data } = await api.patch(`/products/${productId}/toggle`);
  return data;
};

// DELETE REQUESTS
export const deleteProduct = async (productId: string) => {
  const { data } = await api.delete(`/product/${productId}`);
  return data;
};
