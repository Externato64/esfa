import { ProductSegmentType, ProductType } from '../entities';

export type ICreateProductsRequest = {
  name: string;
  price: number;
  oldPrice?: number;
  type: ProductSegmentType;
};

export type ICreateProductsResponse = {
  product: ProductType;
};