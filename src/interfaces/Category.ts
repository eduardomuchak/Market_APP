export interface Category {
  name: string;
  icon: string;
}

export interface FetchCategory extends Category {
  id: number;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
