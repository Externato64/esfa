import { IAuthRequest, IAuthResponse, ICreateProductsRequest, ICreateProductsResponse } from "@/types/api";

export type ApiContextType = {
  auth: (input: IAuthRequest) => Promise<IAuthResponse>;
  createProduct: (input: ICreateProductsRequest) => Promise<ICreateProductsResponse>;
  token: string | undefined;
};
