export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  discountPercentage?: number;
  category: string;
  imageUrl: string;
  year: number;
}
