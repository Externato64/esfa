import { ProductType } from '../entities';

export type IGetProductsResponse = {
  products: Array<ProductType>;
};