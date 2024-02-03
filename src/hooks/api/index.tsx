import { ReactNode, createContext, useContext, useEffect, useState } from "react";
import { ApiContextType } from "./api-context.type";
import { useToast } from "../toast";
import { ApiException, AuthException, InternalException } from "@/services/api/exceptions/api-exceptions";
import { IAuthRequest, ICreateProductsRequest, ICreateUserRequest, IDeleteProductRequest, IDeleteUserRequest, IUpdateProductRequest, IUpdateUserPermissionRequest } from "@/types/api";
import { AuthApi } from "@/services/api";
import { CreateProductApi } from "@/services/api/requests/create-product.api";
import { GetUsersApi } from "@/services/api/requests/get-users.api";
import { DeleteUserApi } from "@/services/api/requests/delete-user.api";
import { UpdateUserPermissionApi } from "@/services/api/requests/update-user-permission.api";
import { CreateUserApi } from "@/services/api/requests/create-user.api";
import { GetProductsApi } from "@/services/api/requests/get-products.api";
import { UpdateProductApi } from "@/services/api/requests/update-product.api";
import { DeleteProductApi } from "@/services/api/requests/delete-product.api";
import { inject, observer } from "mobx-react";
import { Storage } from "@/types";
import { AuthStorage } from "@/storages";

const ApiContext = createContext({} as ApiContextType);

type ApiProviderType = {
  children: ReactNode;
  authStorage: AuthStorage;
};

const ApiProviderComponent = ({children, authStorage }: ApiProviderType): JSX.Element => {
  const {toastError, toastWarning} = useToast();
  const [token, setToken] = useState<string | undefined>();

  useEffect(() => {
    const nToken = localStorage.getItem('@esfa-token');
    if(nToken) {
      setToken(nToken);
    }
  }, []);

  const errorHandler = (input: Error): void => {
    if (input instanceof AuthException) {

      authStorage.setToken(undefined);
      return;
    }

    if (input instanceof InternalException) {
      toastError(input.message);
      return;
    }

    if (input instanceof ApiException) {
      toastWarning(input.message);
      return;
    }

    console.debug(input);
    toastError('Ocorreu um erro, tente novamente');
  };

  const auth = async (input: IAuthRequest) => {
    try {
      const response = await AuthApi.execute(input);

      localStorage.setItem('@esfa-token', response.access_token);
      setToken(response.access_token);
      return response;
    } catch (err: any) {
      console.log('err', err);
      errorHandler(err);
      throw err;
    }
  };

  const createProduct = async (input: ICreateProductsRequest) => {
    try {
      return await CreateProductApi.execute(input, token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  const getUsers = async () => {
    try {
      return await GetUsersApi.execute(token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  const getProducts = async () => {
    try {
      return await GetProductsApi.execute(token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  const deleteUser = async (input: IDeleteUserRequest) => {
    try {
      await DeleteUserApi.execute(input, token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  const updateUserPermission = async (input: IUpdateUserPermissionRequest) => {
    try {
      await UpdateUserPermissionApi.execute(input, token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  const createUser = async (input: ICreateUserRequest) => {
    try {
      await CreateUserApi.execute(input, token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  const updateProduct = async (input: IUpdateProductRequest) => {
    try {
      await UpdateProductApi.execute(input, token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  const deleteProduct = async (input: IDeleteProductRequest) => {
    try {
      await DeleteProductApi.execute(input, token);
    } catch (err: any) {
      errorHandler(err);
      throw err;
    }
  };

  return (
    <ApiContext.Provider
      value={{
        auth,
        createProduct,
        getProducts,
        updateProduct,
        deleteProduct,
        createUser,
        getUsers,
        updateUserPermission,
        deleteUser,
        token,
      }}>
      {children}
    </ApiContext.Provider>
  );
};

function useApi() {
  const context = useContext(ApiContext);
  return context;
}

const ApiProvider = inject(Storage.AUTH)(observer(ApiProviderComponent));
export {
  ApiProvider,
  useApi
};
