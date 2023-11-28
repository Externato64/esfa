import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';
import { IGetUsersResponse } from '@/types/api';

export class GetUsersApi {
  static async execute(token?: string): Promise<IGetUsersResponse> {
    if(!token) {
      throw new AuthException();
    }

    const response = await api
      .get('/v1/users', {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err: AxiosError) => {
        console.log('OPS ERROR', err);
        apiErrorCatch(err);
      });

    return response.data as IGetUsersResponse;
  }
}
