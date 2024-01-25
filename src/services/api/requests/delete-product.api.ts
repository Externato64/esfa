import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';
import { IDeleteProductRequest } from '@/types/api';

export class DeleteProductApi {
  static async execute(input: IDeleteProductRequest, token?: string): Promise<void> {
    if(!token) {
      throw new AuthException();
    }
    
    await api
      .delete(`/v1/products/${input.id}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err: AxiosError) => {
        apiErrorCatch(err);
      });
  }
}
