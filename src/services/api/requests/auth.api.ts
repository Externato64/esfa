import { IAuthRequest, IAuthResponse } from '@/types/api';
import {api} from '../utils/api';
import {apiErrorCatch} from '../utils/api-error-catch';
import {AxiosError} from 'axios';

export class AuthApi {
  static async execute({email}: IAuthRequest): Promise<IAuthResponse> {
    const response = await api
      .post('/v1/auth', {
        email,
      })
      .catch((err: AxiosError) => {
        apiErrorCatch(err);
      });

    return response.data as IAuthResponse;
  }
}
