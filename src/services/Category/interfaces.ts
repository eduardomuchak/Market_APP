export interface Category {
  id: string;
  name: string;
}

export interface AllCategories {
  total: number;
  categories: Category[];
}
