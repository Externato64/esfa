import { IUser, Pages, Storage } from '@/types';
import { makeAutoObservable, makeObservable } from 'mobx';
import { makePersistable } from 'mobx-persist-store';

export class AuthStorage {
  user?: IUser;
  authenticated: boolean = false;
  route: Pages = Pages.LOGIN;
  token: string | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
    makePersistable(this, {
      name: 'AuthStorage',
      properties: ['token'],
    });
  }

  getUser = () => {
    return this.user;
  };

  setUser = (user: IUser | undefined) => {
    this.user = user;
  };

  setRoute = (route: Pages) => {
    this.route = route;
  };

  getToken = () => {
    return this.token;
  };

  setToken = (token: string | undefined) => {
    this.token = token;
  };

  setAuthenticated = (authenticated: boolean) => {
    this.authenticated = authenticated;
  };

  hydrate = (data: any) => {
    if (!data) return;

    this.authenticated = data.authenticated !== null ? data.authenticated : false;
    this.user = data.user !== null ? data.user : undefined;
    this.token = data.token !== null ? data.token : undefined;
  };
}