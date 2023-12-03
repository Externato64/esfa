import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';
import { IGetProductsResponse } from '@/types/api';

export class GetProductsApi {
  static async execute(token?: string): Promise<IGetProductsResponse> {
    const response = await api
      .get('/v1/products', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err: AxiosError) => {
        apiErrorCatch(err);
      });

    return response.data as IGetProductsResponse;
  }
}
