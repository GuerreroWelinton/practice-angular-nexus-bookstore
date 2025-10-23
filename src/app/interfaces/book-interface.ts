export interface Book {
  id: number;
  title: string;
  author: string;
  price: number;
  category: string;
  imageUrl: string;
  year: number;
  description: string;
  discountPercentage?: number;
  discountedPrice?: number;
}
