export interface Category {
  id: string;
  name: string;
  description: string;
  image: string;
}

export interface Brand {
  id: string;
  name: string;
  categoryId: string;
}

export const categories: Category[] = [
  {
    id: 'mobiles',
    name: 'Mobile Phones',
    description: 'Latest smartphones from top brands',
    image: '/assets/generated/category-mobiles.dim_512x512.png',
  },
  {
    id: 'electronics',
    name: 'Electronics & Accessories',
    description: 'Headphones, chargers, power banks, and more',
    image: '/assets/generated/category-electronics.dim_512x512.png',
  },
];

export const brands: Brand[] = [
  { id: 'samsung', name: 'Samsung', categoryId: 'mobiles' },
  { id: 'apple', name: 'Apple', categoryId: 'mobiles' },
  { id: 'xiaomi', name: 'Xiaomi', categoryId: 'mobiles' },
  { id: 'oppo', name: 'Oppo', categoryId: 'mobiles' },
  { id: 'vivo', name: 'Vivo', categoryId: 'mobiles' },
  { id: 'realme', name: 'Realme', categoryId: 'mobiles' },
  { id: 'oneplus', name: 'OnePlus', categoryId: 'mobiles' },
  { id: 'huawei', name: 'Huawei', categoryId: 'mobiles' },
  { id: 'headphones', name: 'Headphones', categoryId: 'electronics' },
  { id: 'chargers', name: 'Chargers', categoryId: 'electronics' },
  { id: 'powerbanks', name: 'Power Banks', categoryId: 'electronics' },
  { id: 'speakers', name: 'Speakers', categoryId: 'electronics' },
  { id: 'accessories', name: 'Accessories', categoryId: 'electronics' },
];

export function getCategoryById(id: string): Category | undefined {
  return categories.find((cat) => cat.id === id);
}

export function getBrandsByCategory(categoryId: string): Brand[] {
  return brands.filter((brand) => brand.categoryId === categoryId);
}

export function getBrandById(id: string): Brand | undefined {
  return brands.find((brand) => brand.id === id);
}
