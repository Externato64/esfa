import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';
import { AuthException } from '../exceptions/api-exceptions';
import { IUpdateUserPermissionRequest } from '@/types/api';

export class UpdateUserPermissionApi {
  static async execute(input: IUpdateUserPermissionRequest, token?: string): Promise<void> {
    if(!token) {
      throw new AuthException();
    }
    
    await api
      .put(`/v1/users/${input.email}`, {
        isAdmin: input.isAdmin
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
