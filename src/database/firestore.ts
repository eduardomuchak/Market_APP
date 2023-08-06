import firestore from '@react-native-firebase/firestore';
import { Category } from '../interfaces/Category';
import { Product } from '../interfaces/Product';

export const init = async () => {
  // Não é necessário criar as tabelas manualmente no Firebase Firestore

  return Promise.resolve();
};

export const insertCategory = async (category: Category) => {
  try {
    await firestore().collection('categories').add(category);
  } catch (error) {
    console.log('Error inserting category', error);
    throw error;
  }
};

export const fetchCategories = async () => {
  try {
    const snapshot = await firestore().collection('categories').get();
    const categories = snapshot.docs.map((doc) => doc.data());
    return categories;
  } catch (error) {
    console.log('Error fetching categories', error);
    throw error;
  }
};

export const insertProduct = async (product: Product) => {
  try {
    await firestore().collection('products').add(product);
  } catch (error) {
    console.log('Error inserting product', error);
    throw error;
  }
};

export const fetchProducts = async () => {
  try {
    const snapshot = await firestore().collection('products').get();
    const products = snapshot.docs.map((doc) => doc.data());
    return products;
  } catch (error) {
    console.log('Error fetching products', error);
    throw error;
  }
};
