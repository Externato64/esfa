import Head from 'next/head'
import React from "react";
import { Container } from "../styles";
import { inject, observer } from "mobx-react";
import { Storage } from "@/types";
import Image from 'next/image';

function LoginPage(): JSX.Element {
    return (
        <>
            <Head>
                <title>Login - EsfaCX</title>
            </Head>
            <Container>
                <Image
                    alt='Logo Externato'
                    width="150"
                    height="150"
                    src="/images/logo_externato.png"
                />
            </Container>
        </>
    )
}

export default inject(Storage.AUTH)(observer(LoginPage));