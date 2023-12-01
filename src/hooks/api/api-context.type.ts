import {
  IAuthRequest,
  IAuthResponse,
  ICreateProductsRequest,
  ICreateProductsResponse,
  IDeleteUserRequest,
  IGetUsersResponse,
  IUpdateUserPermissionRequest
} from "@/types/api";

export type ApiContextType = {
  auth: (input: IAuthRequest) => Promise<IAuthResponse>;
  createProduct: (input: ICreateProductsRequest) => Promise<ICreateProductsResponse>;
  getUsers: () => Promise<IGetUsersResponse>;
  deleteUser: (input: IDeleteUserRequest) => Promise<void>;
  updateUserPermission: (input: IUpdateUserPermissionRequest) => Promise<void>;
  token: string | undefined;
};
