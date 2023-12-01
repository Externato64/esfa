import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';
import { IDeleteUserRequest } from '@/types/api';

export class DeleteUserApi {
  static async execute(input: IDeleteUserRequest, token?: string): Promise<void> {
    if(!token) {
      throw new AuthException();
    }
    
    await api
      .delete(`/v1/users/${input.email}`, {
        headers: {
          Authorization: `Bearer ${token}`
        }
      })
      .catch((err: AxiosError) => {
        apiErrorCatch(err);
      });
  }
}
