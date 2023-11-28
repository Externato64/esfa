import { ReactNode, createContext, useContext, useState } from "react";
import { ApiContextType } from "./api-context.type";
import { useToast } from "../toast";
import { ApiException, AuthException, InternalException } from "@/services/api/exceptions/api-exceptions";
import { IAuthRequest, ICreateProductsRequest } from "@/types/api";
import { AuthApi } from "@/services/api";
import { CreateProductApi } from "@/services/api/requests/create-product.api";
import { GetUsersApi } from "@/services/api/requests/get-users.api";

const ApiContext = createContext({} as ApiContextType);

type ApiProviderType = {
  children: ReactNode;
};

const ApiProvider = ({children}: ApiProviderType): JSX.Element => {
  const {toastError, toastWarning} = useToast();
  const [token, setToken] = useState<string>();

  const errorHandler = (input: Error): void => {
    if (input instanceof AuthException) {

      setToken(undefined);
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
      setToken(response.token);
      return response;
    } catch (err: any) {
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

  return (
    <ApiContext.Provider
      value={{
        auth,
        createProduct,
        getUsers,
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

export {ApiProvider, useApi};
