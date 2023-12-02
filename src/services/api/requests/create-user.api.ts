import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';
import { ICreateUserRequest } from '@/types/api';

export class CreateUserApi {
  static async execute(input: ICreateUserRequest, token?: string): Promise<void> {
    if(!token) {
      throw new AuthException();
    }
    
    await api
      .post('/v1/users', input, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err: AxiosError) => {
        apiErrorCatch(err);
      });
  }
}
