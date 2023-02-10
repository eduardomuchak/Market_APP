export interface CreateCategory {
  name: string;
}

export interface Category {
  id: string;
  name: string;
  icon: string;
}

export interface AllCategories {
  total: number;
  categories: Category[];
}
