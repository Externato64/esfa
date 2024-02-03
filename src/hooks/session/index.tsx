import { IUser } from '@/types';
import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from 'react';
import { useToast } from '../toast';
import { useApi } from '../api';
import { signInWithGooglePopup } from '@/services/firebase';
import { useRouter } from 'next/router';

type SessionType = {
  isAuthenticated: boolean;
  inProgressSignIn: boolean;
  signIn: () => Promise<void>;
  signOut: () => Promise<void>;
  userData: IUser | undefined;
};

const SessionContext = createContext({} as SessionType);

type SessionProviderProps = {
  children: ReactNode;
};

const SessionProvider = ({children}: SessionProviderProps): JSX.Element => {
  const [userData, setUserData] = useState<IUser>();
  const [inProgressSignIn, setInProgressSignIn] = useState(false);
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  const {toastError, toastSuccess, toastWarning} = useToast();
  const {auth, token} = useApi();
  const router = useRouter();

  useEffect(() => {
    if (!token) {
      toastWarning('Sessão expirada');
      signOut();
      localStorage.setItem('@esfa-token', '');
    }
    //eslint-disable-next-line
  }, [token])

  const signIn = async () => {
    setInProgressSignIn(true);
    try {
      const response = await signInWithGooglePopup();
      const { user } = response;
      if(!user.email) {
          toastError('Não foi possível verificar seu email, tente novamente');
          return;
      }
      
      await auth({ email: user.email });

      const newUser: IUser = {
        email: user.email ?? 'no-email',
        photo: user.photoURL,
        name: user.displayName ?? 'no-user',
    };
      setUserData(newUser);
      setIsAuthenticated(true);
      toastSuccess('Login feito com sucesso');
    } catch (error: any) {
      setIsAuthenticated(false);
      toastError('Ocorreu um erro ao realizar o login');
    } finally {
      setInProgressSignIn(false);
    }
  };

  const signOut = async () => {
      setUserData(undefined);
      setIsAuthenticated(false);
      toastSuccess('Logout feito com sucesso');
  };

  return (
    <SessionContext.Provider
      value={{
        isAuthenticated,
        inProgressSignIn,
        signIn,
        signOut,
        userData,
      }}>
      {children}
    </SessionContext.Provider>
  );
};

function useSession() {
  const context = useContext(SessionContext);
  return context;
}

export {useSession, SessionProvider};
