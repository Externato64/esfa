import { IUser, Storage } from '@/types';
import { makeAutoObservable, makeObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

export class AuthStorage {
  user?: IUser;
  authenticated: boolean = false;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, { name: 'AuthStorage', properties: [] } );
  }

  getUser = () => {
    return this.user;
  };

  setUser = (user: IUser | undefined) => {
    this.user = user;
  };

  setAuthenticated = (authenticated: boolean) => {
    this.authenticated = authenticated;
  };

  hydrate = (data: any) => {
    if (!data) return;

    this.authenticated = data.authenticated !== null ? data.authenticated : false;
    this.user = data.user !== null ? data.user : undefined;
  };
}