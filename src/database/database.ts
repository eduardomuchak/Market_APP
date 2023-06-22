import * as SQLite from 'expo-sqlite';
import { Category, FetchCategory } from '../interfaces/Category';
import { Product } from '../interfaces/Product';

const database = SQLite.openDatabase('db.db');

export const init = () => {
  const promise = new Promise<void>((resolve, reject) => {
    database.transaction((transaction: SQLite.SQLTransaction) => {
      // User table
      transaction.executeSql(
        `
          CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          email TEXT NOT NULL,
          password TEXT NOT NULL,
          createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP
        )`,
        [],
        () => {
          console.log('Users table created successfully');
          resolve();
        },
        (_: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          console.log('Error creating table', error);
          reject(error);
          return false;
        },
      );

      // Product table
      transaction.executeSql(
        `
          CREATE TABLE IF NOT EXISTS products (
          id INTEGER PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          checked BOOLEAN NOT NULL DEFAULT 0,
          createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          deletedAt TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0,
          categoryId TEXT NOT NULL,
          FOREIGN KEY (categoryId) REFERENCES categories (id)        
        )`,
        [],
        () => console.log('Products table created successfully'),
        (_: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          console.log('Error creating table', error);
          reject(error);
          return false;
        },
      );

      // Category table
      transaction.executeSql(
        `
          CREATE TABLE IF NOT EXISTS categories (
          id INTEGER PRIMARY KEY NOT NULL,
          name TEXT NOT NULL,
          icon TEXT NOT NULL,
          createdAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          updatedAt TEXT NOT NULL DEFAULT CURRENT_TIMESTAMP,
          deletedAt TEXT,
          isDeleted BOOLEAN NOT NULL DEFAULT 0
        )`,
        [],
        () => console.log('Categories table created successfully'),
        (_: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          console.log('Error creating table', error);
          reject(error);
          return false;
        },
      );

      // CategoryProducts table
      transaction.executeSql(
        `
          CREATE TABLE IF NOT EXISTS categoryProducts (
          id INTEGER PRIMARY KEY NOT NULL,
          categoryId INTEGER NOT NULL,
          productId INTEGER NOT NULL,
          FOREIGN KEY (categoryId) REFERENCES categories (id),
          FOREIGN KEY (productId) REFERENCES products (id)
        )`,
        [],
        () => console.log('CategoryProducts table created successfully'),
        (_: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          console.log('Error creating table', error);
          reject(error);
          return false;
        },
      );
    });
  });

  return promise;
};

export const insertCategory = (category: Category) => {
  const promise = new Promise<void>((resolve, reject) => {
    database.transaction((transaction: SQLite.SQLTransaction) => {
      transaction.executeSql(
        `
          INSERT INTO categories (name, icon)
          VALUES (?, ?)
        `,
        [category.name, category.icon],
        () => {
          console.log('Category inserted successfully');
          resolve();
        },
        (_: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          console.log('Error inserting category', error);
          reject(error);
          return false;
        },
      );
    });
  });

  return promise;
};

export const fetchCategories = () => {
  const promise = new Promise<FetchCategory[]>((resolve, reject) => {
    database.transaction((transaction: SQLite.SQLTransaction) => {
      transaction.executeSql(
        `
          SELECT * FROM categories
        `,
        [],
        (_: SQLite.SQLTransaction, result: SQLite.SQLResultSet) => {
          const categories: FetchCategory[] = [];

          for (let i = 0; i < result.rows.length; i++) {
            categories.push(result.rows.item(i));
          }

          resolve(categories);
        },
        (_: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          console.log('Error fetching categories', error);
          reject(error);
          return false;
        },
      );
    });
  });

  return promise;
};

export const insertProduct = (product: Product) => {
  const promise = new Promise<void>((resolve, reject) => {
    database.transaction((transaction: SQLite.SQLTransaction) => {
      transaction.executeSql(
        `
          INSERT INTO products (name, categoryId)
          VALUES (?, ?)
        `,
        [product.name, JSON.stringify(product.categoriesIds)],
        () => {
          console.log('Product inserted successfully');
          resolve();
        },
        (_: SQLite.SQLTransaction, error: SQLite.SQLError) => {
          console.log('Error inserting product', error);
          reject(error);
          return false;
        },
      );
    });
  });

  return promise;
};
