import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';
import { IUpdateProductRequest } from '@/types/api';

export class UpdateProductApi {
  static async execute({
    id,
    name,
    price,
    type,
    oldPrice
  }: IUpdateProductRequest, token?: string): Promise<void> {
    if(!token) {
      throw new AuthException();
    }
    
    await api
      .put(`/v1/products/${id}`, {
        name,
        price,
        type,
        oldPrice
      }, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err: AxiosError) => {
        apiErrorCatch(err);
      });
  }
}
