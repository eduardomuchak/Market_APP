export interface Category {
  name: string;
  icon: string;
}

export interface FetchCategory extends Category {
  id: string;
  createdAt: string;
  updatedAt: string;
  deletedAt: string;
}
