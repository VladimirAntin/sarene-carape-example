type Product = {
  id: string;
  slug: string;
  name: string;
  tagline: string;
  description: string;
  price: number; // RSD
  originalPrice?: number;
  category: string;
  sizes: string[];
  colors: string[];
  image: string;
  images: string[];
  badge?: string;
  inStock: boolean;
  featured?: boolean;
  rating: number;
  reviews: number;
};

type CartItem = {
  product: Product;
  quantity: number;
  size: string;
};

