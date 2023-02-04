export interface CreateProduct {
  name: string;
  categoryIds: string[];
}

export interface Product {
  id: string;
  name: string;
  checked: boolean;
}

export interface GetAllProducts {
  total: number;
  products: Product[];
}
