import { ICreateProductsRequest, ICreateProductsResponse } from '@/types/api';
import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';

export class CreateProductApi {
  static async execute(input: ICreateProductsRequest, token?: string): Promise<ICreateProductsResponse> {
    if(!token) {
      throw new AuthException();
    }

    const response = await api
      .post('/v1/products', input, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err: AxiosError) => {
        apiErrorCatch(err);
      });

    return response.data as ICreateProductsResponse;
  }
}
