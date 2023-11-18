import {AxiosError} from 'axios';
import { AuthException, ClientException, InternalException } from '../exceptions/api-exceptions';

export function apiErrorCatch(res: AxiosError<any, any>): never {
  if (res.response?.status === 401) {
    throw new AuthException();
  }

  if (res.response?.status === 404) {
    throw new ClientException(res.response?.data.message);
  }

  console.debug('INTERNAL ERROR', res.response?.data);
  throw new InternalException();
}
