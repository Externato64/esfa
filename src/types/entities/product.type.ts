export type ProductSegmentType = 'drink' | 'food' | 'both';

export type ProductType = {
  name: string;
  price: number;
  oldPrice?: number;
  type: ProductSegmentType;
  id: string;
};

export type CreateProductType = {
  name: string;
  price: number;
  oldPrice?: number;
  type: ProductSegmentType;
};
