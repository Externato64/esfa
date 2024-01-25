import { ProductSegmentType } from "../entities";

export type IUpdateProductRequest = {
  id: string;
  name: string;
  price: number;
  oldPrice?: number;
  type: ProductSegmentType;
};