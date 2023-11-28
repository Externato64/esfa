import {
  IAuthRequest,
  IAuthResponse,
  ICreateProductsRequest,
  ICreateProductsResponse,
  IGetUsersResponse
} from "@/types/api";

export type ApiContextType = {
  auth: (input: IAuthRequest) => Promise<IAuthResponse>;
  createProduct: (input: ICreateProductsRequest) => Promise<ICreateProductsResponse>;
  getUsers: () => Promise<IGetUsersResponse>;
  token: string | undefined;
};
