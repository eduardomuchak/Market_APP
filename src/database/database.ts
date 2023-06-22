import * as SQLite from 'expo-sqlite';

const database = SQLite.openDatabase('db.db');

export const init = () => {
  const promise = new Promise<void>((resolve, reject) => {
    database.transaction((transaction) => {
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
          categoryId TEXT,
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
