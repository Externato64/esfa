'use client';
import React, { useEffect, useState } from "react";
import Head from 'next/head';
import Image from 'next/image';
import { inject, observer } from "mobx-react";
import { Container, GoogleIcon, LoginArea, LoginButton, LoginInfoArea, LoginInfoText } from './styles';
import { PageProps, Pages, Storage } from "@/types";
import { useSession, useToast } from "@/hooks";
import { useRouter } from "next/router";
import { LoadingModal } from "@/components/Modals";

function LoginPage({ authStorage }: PageProps): JSX.Element {

    const [loading, setLoading] = useState(false);
    const {isAuthenticated} = useSession();
    const router = useRouter();

    useEffect(() => {
      if(isAuthenticated) {
        authStorage.setRoute(Pages.HOME);
        router.push(Pages.HOME);
    } else {
        if(router.pathname !== Pages.LOGIN) {
            authStorage.setRoute(Pages.LOGIN);
            localStorage.setItem('@esfa-token', '');
        }
      }
      //eslint-disable-next-line
    }, [isAuthenticated]);

    const {toastError} = useToast();
    const {signIn, inProgressSignIn} = useSession();

    const logGoogleUser = async () => {
        try {
            await signIn();
            setLoading(true);
            authStorage.setAuthenticated(true);
        } catch(err) {
            toastError('Ocorreu um erro fazer login');
        }
    };
    return (
        <>
            <Head>
                <title>Login - EsfaCX</title>
            </Head>
            { loading && <LoadingModal /> }
            <Container>
                <LoginArea>
                    <Image
                        alt='Logo Externato'
                        width="150"
                        height="150"
                        src="/images/logo_externato.png"
                    />
                    <LoginInfoArea>
                        <LoginInfoText>Logar com o google</LoginInfoText>
                        <LoginButton
                            name='Entrar com o google'
                            onClick={logGoogleUser}
                            PrefixIcon={<GoogleIcon />}
                            isLoading={inProgressSignIn}
                            active={!inProgressSignIn}
                        />
                    </LoginInfoArea>
                </LoginArea>
            </Container>
        </>
    );
}

export default inject(Storage.AUTH)(observer(LoginPage));