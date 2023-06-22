interface Category {
  id: string;
  name: string;
  icon: string;
}

interface CheckedCategory extends Category {
  checked?: boolean;
}

export interface Product {
  name: string;
  categoriesIds: string[];
}

export interface FetchProduct extends Product {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
