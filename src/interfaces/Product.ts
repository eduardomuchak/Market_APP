interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  name: string;
  categoriesIds: string[];
}

export interface FetchProduct extends Product {
  id: string;
  checked: boolean;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
