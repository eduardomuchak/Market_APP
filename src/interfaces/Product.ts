interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface Product {
  name: string;
  categoriesIds: any;
}

export interface FetchProduct extends Product {
  id: string;
  checked: boolean | number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
