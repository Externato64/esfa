import {
  IAuthRequest,
  IAuthResponse,
  ICreateProductsRequest,
  ICreateProductsResponse,
  ICreateUserRequest,
  IDeleteProductRequest,
  IDeleteUserRequest,
  IGetProductsResponse,
  IGetUsersResponse,
  IUpdateProductRequest,
  IUpdateUserPermissionRequest
} from "@/types/api";

export type ApiContextType = {
  auth: (input: IAuthRequest) => Promise<IAuthResponse>;
  createUser: (input: ICreateUserRequest) => Promise<void>;
  createProduct: (input: ICreateProductsRequest) => Promise<ICreateProductsResponse>;
  updateProduct: (input: IUpdateProductRequest) => Promise<void>;
  deleteProduct: (input: IDeleteProductRequest) => Promise<void>;
  getUsers: () => Promise<IGetUsersResponse>;
  getProducts: () => Promise<IGetProductsResponse>;
  deleteUser: (input: IDeleteUserRequest) => Promise<void>;
  updateUserPermission: (input: IUpdateUserPermissionRequest) => Promise<void>;
  token: string | undefined;
};
